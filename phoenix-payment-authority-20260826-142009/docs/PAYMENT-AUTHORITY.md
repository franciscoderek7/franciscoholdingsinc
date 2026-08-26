# Phoenix Payment Authority

## Governing rule

No browser callback, localStorage record, frontend variable,
simulated transaction, or UI status is authoritative proof of payment.

Only verified payment-provider state may create a completed financial
transaction in the Phoenix ledger.

## Canonical flow

Customer
  -> Company Website
  -> Product / Offer
  -> Phoenix Checkout
  -> Payment Provider
  -> Server-side verification
  -> Payment Ledger
  -> Phoenix Core
  -> PrimeDox AI
  -> Fulfillment
  -> CRM
  -> Customer notification

## PayPal

Use PayPal Orders v2 server-side.

Production API:
https://api-m.paypal.com

Sandbox API:
https://api-m.sandbox.paypal.com

The browser may render the PayPal UI.

The browser must NOT be the financial authority.

## Payment states

CREATED
APPROVED
CAPTURE_PENDING
COMPLETED
DENIED
REFUNDED
REVERSED
DISPUTED
CANCELLED
REQUIRES_HUMAN_REVIEW

## Ledger requirements

Every transaction must have:

- internal transaction ID
- provider
- provider order ID
- provider capture ID when applicable
- customer ID
- company
- product ID
- amount
- currency
- provider status
- internal status
- timestamps
- idempotency key
- fulfillment status
- audit trail

## Human approval gates

Human approval is mandatory for:

- refunds above configured threshold
- unusual/high-value transactions
- legal commitments
- security actions
- destructive actions
- contractual exceptions
- disputes
- ambiguous payment states

## PrimeDox role

PrimeDox is the default execution and fulfillment engine.

PrimeDox may:

- classify orders
- generate documents
- assemble client deliverables
- execute approved workflows
- update CRM
- notify customers
- create follow-up tasks
- escalate exceptions

PrimeDox may NOT independently:

- move money
- issue unrestricted refunds
- make binding legal decisions
- override security controls
- approve destructive actions
- bypass human approval gates

## Revenue truth

Revenue is recorded only after authoritative provider verification.

Client-side "success" is never revenue.

## Deployment rule

No production deployment occurs until:

1. provider credentials are stored server-side
2. credentials are absent from browser code
3. webhook endpoint exists
4. webhook signatures are verified
5. idempotency is implemented
6. transaction ledger exists
7. sandbox test passes
8. failure/replay tests pass
9. human approval gates are tested
10. production smoke test passes without creating an unintended charge
