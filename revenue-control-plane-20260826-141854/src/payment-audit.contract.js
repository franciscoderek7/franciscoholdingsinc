'use strict';

const crypto = require('node:crypto');

const ALLOWED_EVENTS = Object.freeze([
  'ORDER_CREATED',
  'ORDER_APPROVED',
  'CAPTURE_REQUESTED',
  'PAYMENT_COMPLETED',
  'PAYMENT_DENIED',
  'PAYMENT_REVERSED',
  'PAYMENT_REFUNDED',
  'PAYMENT_DISPUTED',
  'WEBHOOK_RECEIVED',
  'WEBHOOK_REJECTED',
  'WEBHOOK_REPLAY_IGNORED',
  'FULFILLMENT_STARTED',
  'FULFILLMENT_COMPLETED',
  'FULFILLMENT_FAILED',
  'HUMAN_REVIEW_REQUIRED'
]);

function createAuditEvent({
  eventType,
  transactionId,
  actor = 'system',
  providerEventId = null,
  metadata = {}
}) {
  if (!ALLOWED_EVENTS.includes(eventType)) {
    throw new Error(`Invalid audit event type: ${eventType}`);
  }

  if (!transactionId) {
    throw new Error('Audit event requires transactionId.');
  }

  return Object.freeze({
    eventId: crypto.randomUUID(),
    eventType,
    transactionId,
    actor,
    providerEventId,
    metadata,
    timestamp: new Date().toISOString()
  });
}

module.exports = {
  ALLOWED_EVENTS,
  createAuditEvent
};
