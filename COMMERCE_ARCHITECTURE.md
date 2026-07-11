# Guided Commerce Architecture

Version: 1.0  
Status: Active — Sprint 7

## Decision

Barons will not add native e-commerce during Sprint 7.

The public website will use a commerce abstraction layer so that pages describe what a visitor wants to start while a resolver determines how that journey begins.

Current mode: lead generation through existing Barons forms and human follow-up.

Future modes may include Zoho Commerce, vendor referral links, direct provisioning, quote workflows, bookings, or authenticated client-portal actions.

## Governing Principle

> Presentation never owns business logic.

Pages present information. The Knowledge Graph owns entity relationships. Intent metadata describes the visitor's goal. The commerce resolver determines the correct action.

## Supported Purchase Behaviors

- `lead-only`
- `quote-required`
- `schedule-consultation`
- `referral`
- `ecommerce`
- `client-portal`

Adding a future commerce provider must not require rewriting product pages.

## Intent Paths

Product and edition pages may support three visitor intents:

1. **Start** — the visitor already knows what they need.
2. **Compare** — the visitor is evaluating credible options.
3. **Design** — the visitor needs help designing the broader Business Operating System.

The interface should make the Start path exceptionally simple without forcing a ready buyer through long educational content.

## Franchise Constraint Rule

Franchise mandates override generic product recommendations.

The decision order is:

1. Franchise or regulatory requirements
2. Existing ecosystem constraints
3. Operational requirements
4. Business size and complexity
5. Barons best-practice guidance
6. Personal preference

The commerce layer must never bypass a known franchise mandate. A product may be generally recommended while still being inappropriate for a franchise location whose franchisor requires another platform or edition.

## Current Implementation

- Types: `src/types/authority.ts`
- Resolver: `src/lib/commerce.ts`
- CTA component: `src/components/commerce/ProductCta.astro`
- Authority integration: `src/components/authority/AuthorityPage.astro`

Entities without commerce metadata continue using their existing primary CTA.

## Future Zoho Commerce Integration

When Zoho Commerce is introduced:

1. Add a commerce provider adapter.
2. Change eligible entity behavior from `lead-only` to `ecommerce`.
3. Supply the checkout destination or product identifier.
4. Preserve the same public product page and CTA component.
5. Keep consultation, quote, referral, and franchise-constrained products on their appropriate paths.

## Definition of Done

The abstraction is successful when changing the starting workflow for a product requires updating entity data or a provider adapter—not rewriting page templates.
