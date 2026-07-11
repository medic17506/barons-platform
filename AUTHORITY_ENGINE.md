# Authority Engine

Version: 1.0  
Status: Active — Sprint 7

## Purpose

The Authority Engine is the structured public knowledge layer of the Barons Platform. It establishes Barons as an authoritative, human-first advisor for business operating systems while creating a reusable foundation for future knowledge, portal, ASG, and AI capabilities.

Every Authority Engine page must answer one practical question:

> How does this reduce business chaos?

## Core Entity Types

The website will model content as connected entities rather than isolated pages.

1. **Solutions** — business problems and operational capabilities.
2. **Platforms** — software and technology partners Barons evaluates, implements, integrates, or supports.
3. **Comparisons** — educational decision guides between credible alternatives.
4. **Industries** — operational context for specific business models.
5. **Franchise Ecosystems** — franchise-specific systems, standards, workflows, and support.
6. **Locations** — geographic authority and community impact.
7. **Resources** — knowledge articles, guides, FAQs, videos, downloads, and future learning content.

## Canonical Route Architecture

- `/solutions/`
- `/solutions/[slug]/`
- `/platforms/`
- `/platforms/[slug]/`
- `/compare/`
- `/compare/[slug]/`
- `/industries/`
- `/industries/[slug]/`
- `/franchises/`
- `/franchises/[slug]/`
- `/locations/`
- `/locations/[slug]/`
- `/resources/`
- `/resources/[category]/`
- `/resources/[category]/[slug]/`

The public navigation may use friendlier labels, but canonical URLs should remain stable and entity-based.

## Content Model Standards

Every entity record should support:

- `title`
- `slug`
- `description`
- `eyebrow`
- `promise`
- `painPoints`
- `outcomes`
- `questions`
- `relatedSolutions`
- `relatedPlatforms`
- `relatedIndustries`
- `relatedFranchises`
- `relatedResources`
- `primaryCta`
- `secondaryCta`
- `seoTitle`
- `seoDescription`
- `schemaType`
- `status`
- `lastReviewed`

Not every field must render on every page, but relationships and review status must be available to the architecture.

## Page Composition

Authority pages should be assembled from reusable sections rather than duplicated page markup.

Recommended sequence:

1. Entity hero
2. Problem / chaos statement
3. Who it is for
4. Outcomes and benefits
5. How Barons approaches it
6. Related platforms or solutions
7. Integration context
8. Questions and answers
9. Related content
10. Strategy Session CTA
11. Contact CTA

## Reusable Component Plan

- `AuthorityHero.astro`
- `ChaosReducer.astro`
- `AudienceFit.astro`
- `OutcomeGrid.astro`
- `RelationshipLinks.astro`
- `IntegrationGrid.astro`
- `QuestionAnswerList.astro`
- `RelatedContent.astro`
- `AuthorityCta.astro`
- `StructuredData.astro`

Components should accept typed data and remain independent of any single entity type.

## Structured Data Strategy

Use JSON-LD appropriate to the page rather than applying one schema everywhere.

- Solutions: `Service`
- Platforms: `SoftwareApplication` and, where appropriate, `Product`
- Comparisons: `Article` with item references
- Industries: `Service` with audience context
- Franchise pages: `Service` and `Organization` relationships where accurate
- Location pages: `ProfessionalService` or `LocalBusiness` only when the claims and service area are factual
- Knowledge resources: `Article`, `HowTo`, or `FAQPage` only when the visible page content satisfies the schema requirements
- Breadcrumbs: `BreadcrumbList` on all nested Authority Engine pages

Never add schema solely for ranking. Structured data must accurately describe visible content.

## AI and GEO Readiness

Every page should:

- Define the entity clearly in the opening section.
- Use direct, descriptive headings.
- Include concise answers to real buyer and operator questions.
- Explain tradeoffs rather than claiming one universal best choice.
- Name relevant integrations and operational relationships.
- Connect claims to Barons' actual experience.
- Avoid unsupported superlatives and vague marketing language.
- Include visible review dates where content may become stale.

## Internal Linking Rules

Each detail page should link to at least:

- One related solution
- One related platform when relevant
- One related industry or franchise context
- One useful resource when available
- The Strategy Session route
- The Contact route

Relationship data should drive these links so they remain consistent and maintainable.

## Editorial Standard

Authority content educates before it sells.

Each page must clearly distinguish:

- What the category or platform does
- Who it fits
- Who it may not fit
- Operational requirements
- Important tradeoffs
- Why Barons may recommend it
- How Barons helps implement or support it

Barons is the trusted advisor. Vendors are tools within the system, not the center of the story.

## Accessibility and Performance

- Preserve semantic heading order.
- Keep link purpose understandable outside surrounding text.
- Do not hide essential content behind interaction.
- Use native HTML before JavaScript.
- Avoid client-side rendering for primary page content.
- Optimize logos and images and provide useful alternative text.
- Maintain visible focus states and WCAG 2.2 AA contrast.

## Future Compatibility

The content model must support:

- Sprint 8 ASG profile and network relationships
- Sprint 9 knowledge base publishing
- Sprint 10 authenticated client context
- Sprint 11 retrieval, recommendation, and AI assistant workflows

Public content should remain separable from future private portal data.

## Sprint 7 Implementation Order

1. Establish typed entity models and registries.
2. Build shared Authority Engine components.
3. Upgrade solution architecture and pages.
4. Build platform index and platform detail templates.
5. Build industry, franchise, comparison, and location templates.
6. Add relationship-driven internal linking.
7. Add entity-specific structured data and breadcrumbs.
8. Populate priority pages with verified Barons content.
9. Validate accessibility, build output, links, metadata, and schema.
10. Update `SITE_MAP.md`, `SPRINTS.md`, `DECISIONS.md`, and related documentation.

## Definition of Done

Sprint 7 is complete when:

- All entity families have stable route and data architecture.
- Priority pages are published using shared templates.
- Internal relationships generate useful links.
- Structured data accurately matches visible content.
- Pages compile without errors and require minimal JavaScript.
- Content is accessible, responsive, useful, and reviewable.
- Documentation reflects the implemented system.
