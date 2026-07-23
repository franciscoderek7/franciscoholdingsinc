require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("redis");
const { Pool } = require("pg");
const CODWall = require("./security/cod-wall");
const protectedRoutes = require("./security/protected-routes");

const app = express();
const codWall = new CODWall();

app.use(cors());
app.use(express.json());

// Redis
const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379"
});
redisClient.on("error", (err) => console.log("Redis Error", err));
redisClient.connect().catch(console.error);

// Postgres
const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  PUBLIC ENDPOINTS — No auth required                                 ║
// ╚══════════════════════════════════════════════════════════════════════╝

app.get("/health", (req, res) => {
  res.json({ status: "EMPIRE ONLINE", timestamp: new Date().toISOString() });
});

// Login endpoint — public
app.post("/api/auth/login", (req, res) => codWall.login(req, res));

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  COD WALL — Everything below requires authentication                 ║
// ╚══════════════════════════════════════════════════════════════════════╝

app.use(codWall.middleware());

// Protected empire tools
app.use("/api/empire", protectedRoutes);

// Floor data (CQRS) — now protected
app.get("/api/floor/:floorId", async (req, res) => {
  const cacheKey = `floor:${req.params.floorId}`;
  const cached = await redisClient.get(cacheKey);
  if (cached) return res.json({ source: "cache", data: JSON.parse(cached) });

  const result = await pgPool.query("SELECT * FROM floors WHERE id = $1", [req.params.floorId]);
  if (result.rows.length > 0) {
    await redisClient.setEx(cacheKey, 300, JSON.stringify(result.rows[0]));
    return res.json({ source: "database", data: result.rows[0] });
  }
  res.status(404).json({ error: "Floor not found" });
});

// Agent status — now protected
app.get("/api/agents/status", async (req, res) => {
  res.json({ omniGuard: 45, primeDox: 15, total: 60, status: "operational" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Empire Backend COD-WALLED on port ${PORT}`));
