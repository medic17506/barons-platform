# Knowledge Object Builder Guide

Use this guide before adding any Authority Engine page.

## 1. Classify the object

Choose exactly one primary type:

- solution
- platform-partner
- product
- edition
- service
- integration
- industry
- franchise
- policy
- comparison
- resource
- location

Do not create a page first and decide the model later.

## 2. Confirm the hierarchy

Answer:

- Does this object have a parent?
- Does it have child products or editions?
- Which solution does it support?
- Which platform partner owns it?
- Is it a sibling, upgrade path, alternative, or integration?

Do not describe a separate product as though it were merely another edition.

## 3. Add visitor-facing content

Every published object should define:

- title and stable slug
- clear description
- promise
- chaos statement
- audience fit
- who it may not fit
- warning signs or pain points
- expected outcomes
- Barons approach
- common questions
- SEO title and description
- schema type
- status and review date

## 4. Add relationships

Connect the object to relevant:

- solutions
- platform partners
- products and editions
- industries
- franchise systems
- integrations
- services
- comparisons
- resources
- locations

Relationships drive internal links. Do not duplicate relationship lists manually in page templates.

## 5. Configure visitor intent

Decide whether the object supports:

- Start
- Compare
- Design

For products and editions, configure the commerce abstraction:

- lead-only
- quote-required
- schedule-consultation
- referral
- ecommerce
- client-portal

E-commerce remains disabled until intentionally implemented.

## 6. Add trust signals only when relevant

Each signal needs:

- a concise claim
- why it matters to the visitor
- supporting evidence

Avoid generic credential dumping.

## 7. Handle franchise policies carefully

Before publishing a mandate, identify:

- franchise system
- scope
- exact requirement
- source
- verification status
- review date
- Barons role

Never infer that every franchise has mandates. Never substitute a Barons recommendation for a franchisor requirement.

## 8. Review accessibility and semantics

Verify:

- one clear page heading
- logical heading sequence
- descriptive links
- visible keyboard focus
- sufficient contrast
- no essential content hidden behind JavaScript
- useful mobile layout

## 9. Review SEO, GEO, and AI readiness

Verify:

- stable canonical route
- direct entity definition near the top
- factual, visible structured data
- useful questions and answers
- clear relationships
- no unsupported superlatives
- visible review date for changeable content

## 10. Validate before publishing

Run:

```bash
npm run build
```

Then test the route on mobile and desktop, verify internal links, and confirm the CTA resolves to the intended current behavior.

## Definition of ready

A Knowledge Object is ready when another developer can understand what it is, where it belongs, how it relates to the operating system, why a visitor should trust the guidance, and what the visitor should do next without reading page-specific implementation code.
