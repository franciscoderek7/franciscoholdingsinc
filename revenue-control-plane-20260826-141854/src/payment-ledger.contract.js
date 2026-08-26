'use strict';

const {
  PAYMENT_STATES
} = require('./payment-authority.contract');

const REQUIRED_FIELDS = Object.freeze([
  'internalTransactionId',
  'provider',
  'providerOrderId',
  'productId',
  'amount',
  'currency',
  'providerStatus',
  'status',
  'createdAt',
  'updatedAt',
  'idempotencyKey',
  'fulfillmentStatus'
]);

function assertLedgerRecord(record) {
  if (!record || typeof record !== 'object') {
    throw new Error('Invalid payment ledger record.');
  }

  for (const field of REQUIRED_FIELDS) {
    if (
      record[field] === undefined ||
      record[field] === null ||
      record[field] === ''
    ) {
      throw new Error(`Missing ledger field: ${field}`);
    }
  }

  if (record.provider !== 'paypal') {
    throw new Error('Unsupported payment provider.');
  }

  if (!Object.values(PAYMENT_STATES).includes(record.status)) {
    throw new Error(`Invalid internal payment state: ${record.status}`);
  }

  if (!Number.isFinite(Number(record.amount)) || Number(record.amount) < 0) {
    throw new Error('Invalid payment amount.');
  }

  if (!String(record.currency).match(/^[A-Z]{3}$/)) {
    throw new Error('Currency must be a 3-letter ISO code.');
  }

  return true;
}

module.exports = {
  REQUIRED_FIELDS,
  assertLedgerRecord
};
