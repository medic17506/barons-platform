# Barons Knowledge Graph

Status: Active platform contract

## Governing principles

1. Model reality first. Render pages second.
2. Capture knowledge once. Publish it everywhere.
3. Presentation never owns business logic.
4. Franchise requirements take priority over general recommendations.
5. Facts, observations, best practices, and pending information must never be presented as though they have equal certainty.

## Platform layers

- Zoho CRM owns relationship and operational metadata, including future franchise review records.
- The Knowledge Graph owns publishable entities, relationships, policies, evidence, and editorial status.
- Astro renders public experiences from Knowledge Objects.
- Future portals and AI services consume the same knowledge contracts.

## Knowledge Object families

- Solution
- Platform Partner
- Product
- Edition
- Service
- Integration
- Industry
- Franchise System
- Policy
- Comparison
- Resource
- Location
- Person and ASG profile in future sprints

## Core hierarchy

A platform partner may own products. Products may contain editions. All may connect to solutions, industries, franchise systems, services, integrations, and resources.

Example:

Intuit → QuickBooks Online → Plus → Accounting

Intuit Enterprise Suite is a sibling product to QuickBooks Online, not a QuickBooks Online edition.

## Relationship verbs

Relationships should use meaningful business language, including:

- PART_OF
- OWNED_BY
- INTEGRATES_WITH
- REQUIRES
- PREFERRED_BY
- SUPPORTED_BY
- IMPLEMENTED_BY
- ALTERNATIVE_TO
- RECOMMENDED_FOR
- SERVES
- SUPERSEDES
- RELATED_TO

Relationships should be stored as data and rendered consistently rather than hardcoded into individual pages.

## Policy and mandate model

Franchise standards are separate from Barons recommendations.

Every policy should identify:

- scope
- requirement
- explanation
- source
- verification status
- last review date
- Barons role

Verification statuses:

- verified
- observed
- Barons best practice
- pending verification
- historical

A franchise with no known requirement must not be described as though one exists. Unknown information remains unknown until verified.

HOTWORX is the first policy model. Current known standards include QBO Plus, Barons retaining the designated primary administrator role, the location code remaining in the company title, Square for POS and merchant processing, and a separate franchise-designated payroll provider. Barons does not replace the mandated POS, merchant, or payroll providers.

## Trust and evidence

Trust signals must be relevant to the visitor's decision and supported by evidence.

Examples include:

- serving businesses since 2002
- 24+ years working with QuickBooks
- Elite QuickBooks Solution Provider standing
- real franchise implementation experience
- human implementation and support

Credentials should never interrupt the visitor's task. Partner pages may tell the fuller story; product and edition pages should use concise, decision-relevant proof.

## Intent engine

Major product experiences support three visitor paths:

- Start: the visitor already knows what is required or wanted.
- Compare: the visitor is evaluating credible alternatives.
- Design: the visitor needs help designing the broader Business Operating System.

## Commerce abstraction

The public page asks what the visitor wants to start. It does not own checkout logic.

Current mode: human-reviewed lead intake.

Future modes may include Zoho Commerce, referral links, quote workflows, bookings, direct provisioning, or client portal actions.

## Content lifecycle

Draft → Internal Review → Published → Verified → Reviewed → Updated

Time-sensitive content must expose a review date. Franchise verification will eventually be managed through Zoho CRM review records and synchronized into the published knowledge layer.

## AI readiness

AI responses should be explainable through Knowledge Objects, relationships, policies, evidence, and current review status. AI may explain business rules, but it should not invent or silently override them.

## Non-negotiable rule

No new authority page should be created without a corresponding Knowledge Object or documented exception.
