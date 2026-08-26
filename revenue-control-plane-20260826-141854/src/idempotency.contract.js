'use strict';

/*
 * Payment events may be delivered more than once.
 *
 * The provider event ID is the primary replay-protection key.
 * The internal idempotency key protects our own transaction creation.
 */

function normalizeKey(value) {
  if (!value || typeof value !== 'string') {
    throw new Error('Idempotency key is required.');
  }

  const key = value.trim();

  if (!key || key.length > 255) {
    throw new Error('Invalid idempotency key.');
  }

  return key;
}

function createEventKey(provider, eventId) {
  if (!provider || !eventId) {
    throw new Error('Provider and event ID are required.');
  }

  return normalizeKey(`${provider}:${eventId}`);
}

module.exports = {
  normalizeKey,
  createEventKey
};
