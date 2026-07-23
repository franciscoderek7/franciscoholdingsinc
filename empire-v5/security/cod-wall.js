// ╔══════════════════════════════════════════════════════════════════════╗
// ║  COD WALL — Francisco Holdings Inc. Authentication Gate              ║
// ║  Everything behind this wall requires valid empire credentials       ║
// ╚══════════════════════════════════════════════════════════════════════╝

const crypto = require('crypto');

class CODWall {
  constructor() {
    this.sessions = new Map();
    this.failedAttempts = new Map();
    this.MAX_ATTEMPTS = 5;
    this.LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes
    this.SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  }

  // Verify empire code against hashed secret
  verifyCode(inputCode) {
    const hashedInput = crypto.createHash('sha256').update(inputCode).digest('hex');
    const storedHash = process.env.EMPIRE_CODE_HASH;
    return hashedInput === storedHash;
  }

  // Check if IP is locked out
  isLockedOut(clientId) {
    const lockData = this.failedAttempts.get(clientId);
    if (!lockData) return false;
    if (lockData.count >= this.MAX_ATTEMPTS) {
      if (Date.now() - lockData.lastAttempt < this.LOCKOUT_TIME) {
        return true;
      }
      // Reset after lockout period
      this.failedAttempts.delete(clientId);
    }
    return false;
  }

  // Record failed attempt
  recordFailure(clientId) {
    const data = this.failedAttempts.get(clientId) || { count: 0, lastAttempt: 0 };
    data.count++;
    data.lastAttempt = Date.now();
    this.failedAttempts.set(clientId, data);
    return this.MAX_ATTEMPTS - data.count;
  }

  // Create session token
  createSession(clientId) {
    const token = crypto.randomBytes(32).toString('hex');
    this.sessions.set(token, {
      clientId,
      createdAt: Date.now(),
      lastActivity: Date.now()
    });
    return token;
  }

  // Validate session
  validateSession(token) {
    const session = this.sessions.get(token);
    if (!session) return false;
    if (Date.now() - session.lastActivity > this.SESSION_TIMEOUT) {
      this.sessions.delete(token);
      return false;
    }
    session.lastActivity = Date.now();
    return true;
  }

  // Middleware for Express
  middleware() {
    return (req, res, next) => {
      const token = req.headers['x-empire-token'] || req.cookies?.empire_token;
      
      // Public paths that don't need auth
      const publicPaths = ['/health', '/api/public', '/login'];
      if (publicPaths.some(p => req.path.startsWith(p))) {
        return next();
      }

      if (!token || !this.validateSession(token)) {
        return res.status(401).json({ 
          error: 'COD WALL BREACHED',
          message: 'Valid empire credentials required',
          timestamp: new Date().toISOString()
        });
      }

      req.empireSession = this.sessions.get(token);
      next();
    };
  }

  // Login endpoint handler
  login(req, res) {
    const clientId = req.ip || req.connection.remoteAddress;
    const { code } = req.body;

    if (this.isLockedOut(clientId)) {
      return res.status(429).json({
        error: 'LOCKED OUT',
        message: 'Too many failed attempts. Wait 15 minutes.',
        retryAfter: this.LOCKOUT_TIME
      });
    }

    if (!this.verifyCode(code)) {
      const remaining = this.recordFailure(clientId);
      return res.status(401).json({
        error: 'INVALID CODE',
        message: `Invalid empire code. ${remaining} attempts remaining.`,
        attemptsRemaining: remaining
      });
    }

    // Clear failures on success
    this.failedAttempts.delete(clientId);
    const token = this.createSession(clientId);
    
    res.json({
      success: true,
      token,
      message: 'COD WALL CLEARED. Welcome to the Empire.',
      expiresIn: '30 minutes'
    });
  }
}

module.exports = CODWall;
