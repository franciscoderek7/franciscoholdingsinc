'use strict';

/*
 * Phoenix Payment Authority
 *
 * This file defines the provider-neutral contract.
 * It intentionally contains NO credentials and performs NO
 * production transactions by itself.
 */

const PAYMENT_STATES = Object.freeze({
  CREATED: 'CREATED',
  APPROVED: 'APPROVED',
  CAPTURE_PENDING: 'CAPTURE_PENDING',
  COMPLETED: 'COMPLETED',
  DENIED: 'DENIED',
  REFUNDED: 'REFUNDED',
  REVERSED: 'REVERSED',
  DISPUTED: 'DISPUTED',
  CANCELLED: 'CANCELLED',
  REQUIRES_HUMAN_REVIEW: 'REQUIRES_HUMAN_REVIEW'
});

function assertServerAuthority() {
  if (typeof window !== 'undefined') {
    throw new Error(
      'Phoenix Payment Authority cannot execute in a browser context.'
    );
  }
}

function assertCompletedPayment(payment) {
  assertServerAuthority();

  if (!payment || payment.providerVerified !== true) {
    throw new Error('Payment is not provider-verified.');
  }

  if (payment.status !== PAYMENT_STATES.COMPLETED) {
    throw new Error('Payment is not completed.');
  }

  if (!payment.providerOrderId) {
    throw new Error('Missing provider order ID.');
  }

  return true;
}

module.exports = {
  PAYMENT_STATES,
  assertServerAuthority,
  assertCompletedPayment
};
