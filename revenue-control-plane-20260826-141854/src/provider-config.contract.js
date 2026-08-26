'use strict';

/*
 * Phoenix Payment Authority
 * Provider configuration contract.
 *
 * SECURITY RULE:
 * Credentials must come from the server environment only.
 * Never place PAYPAL_CLIENT_SECRET in browser code.
 */

function requireEnv(name) {
  const value = process.env[name];

  if (!value || !String(value).trim()) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }

  return String(value).trim();
}

function getPayPalConfig() {
  const mode = String(process.env.PAYPAL_MODE || 'sandbox').toLowerCase();

  if (!['sandbox', 'live'].includes(mode)) {
    throw new Error('PAYPAL_MODE must be sandbox or live.');
  }

  return Object.freeze({
    mode,
    clientId: requireEnv('PAYPAL_CLIENT_ID'),
    clientSecret: requireEnv('PAYPAL_CLIENT_SECRET'),
    webhookId: requireEnv('PAYPAL_WEBHOOK_ID'),
    baseUrl:
      mode === 'live'
        ? 'https://api-m.paypal.com'
        : 'https://api-m.sandbox.paypal.com'
  });
}

module.exports = {
  getPayPalConfig
};
