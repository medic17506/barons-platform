# Barons Content & Media Engine

Version: 1.0  
Status: Active — Sprint 9

## Purpose

The Content & Media Engine transforms Barons' operational knowledge into authoritative, reusable, and verifiable content.

It extends the Authority Engine and Knowledge Graph. It does not create a separate publishing system.

The governing principle is:

> Capture knowledge once. Publish it everywhere.

Every authoritative asset should help answer:

> How does this reduce business chaos?

The engine supports:

- Website resources
- AI search and answer engines
- ChatGPT, Gemini, Claude, and Perplexity
- Podcast episodes
- YouTube and short-form video
- LinkedIn
- Facebook
- Email marketing
- Speaking engagements
- Downloads and lead resources
- Future client and franchise portals

## Relationship to Existing Architecture

The Content & Media Engine operates within the existing platform layers:

1. The Knowledge Graph defines entities, relationships, policies, evidence, and editorial status.
2. Knowledge Objects hold canonical, reusable knowledge.
3. The Content & Media Engine turns that knowledge into structured editorial assets.
4. Astro renders public website experiences.
5. Future media, AI, portal, and automation services consume the same content contracts.

The engine must not duplicate facts already governed by another Knowledge Object.

A content asset may explain, organize, or interpret governed knowledge, but it must reference the canonical object rather than silently creating a second source of truth.

## Governing Principles

1. **Knowledge before format**  
   Establish the authoritative knowledge before producing an article, podcast, video, or social post.

2. **One source of truth**  
   Shared facts, policies, relationships, requirements, and recommendations must not be maintained independently across channels.

3. **Education before sales**  
   Content should help a reader understand the decision before asking them to engage Barons.

4. **Authority must be earned**  
   Claims must be supported by direct experience, documented evidence, reliable sources, or clearly labeled professional judgment.

5. **Unknown means unknown**  
   Missing or unverified information must never be presented as fact.

6. **Requirements and recommendations remain separate**  
   Franchise requirements, vendor requirements, legal obligations, industry standards, observations, and Barons recommendations must be identified accurately.

7. **Human review remains required**  
   Automation and AI may assist production, organization, and reuse. They must not publish unsupported claims or silently change governed knowledge.

8. **Each asset must be useful on its own**  
   Content should not exist merely to target a keyword, fill a calendar, or create artificial volume.

9. **No duplicate content**  
   Each topic has one canonical home. Related assets should summarize, specialize, or point back to that canonical source.

10. **Reviewability is part of the architecture**  
    Content that can become stale must expose its source, verification status, owner, and review date.

## Content Object Families

Sprint 9 adds specialized content families to the existing Knowledge Object model.

### Cornerstone Guide

A comprehensive evergreen explanation of a major business subject.

Examples:

- Ultimate Guide to QuickBooks Online
- Ultimate Guide to Intuit Enterprise Suite
- Business Operating Systems
- Franchise Accounting
- Payroll
- Merchant Services
- CRM
- Business Automation

A cornerstone guide should:

- Define the subject clearly
- Explain why it matters
- Identify common operational problems
- Explain major options and tradeoffs
- Connect related solutions, platforms, industries, and resources
- Provide practical next steps
- Act as the canonical topic hub

### Playbook

An actionable operational guide organized around a process or business decision.

Examples:

- Opening a Franchise
- Choosing Accounting Software
- Selecting Payroll
- Evaluating Merchant Services
- Completing a Year-End Close
- Multi-Entity Reporting
- Technology Due Diligence
- Business Operating System Blueprint

A playbook should include:

- Objective
- Intended audience
- Preconditions
- Required inputs
- Ordered steps
- Decision points
- Risks and warning signs
- Completion criteria
- Related tools and services
- Escalation or advisory guidance

### Comparison

An educational evaluation of two or more credible alternatives.

A comparison must:

- Establish the decision context
- Define fair evaluation criteria
- Explain similarities and differences
- Identify advantages and limitations
- Explain audience fit
- Avoid declaring a universal winner
- State when Barons may recommend each option
- Expose any commercial or partner relationship that could affect perceived objectivity

Comparisons remain part of the existing Comparison Knowledge Object family. Sprint 9 expands their editorial and media reuse capabilities.

### FAQ

A direct answer to a real customer, prospect, operator, or partner question.

Every FAQ should contain:

- The question in natural language
- A concise answer
- A fuller explanation
- Important qualifications
- Related Knowledge Objects
- Source or evidence
- Verification status
- Review date
- Suggested next action when appropriate

FAQs should originate from real questions whenever possible, including support tickets, sales conversations, discovery calls, onboarding, training, speaking engagements, and team knowledge.

### Legacy Story

A factual narrative explaining the history, values, evolution, and lessons behind Barons.

Legacy stories must distinguish:

- Verified dates and events
- Personal recollection
- Interpretation
- Lessons learned
- Current philosophy

A compelling story must not be made more dramatic by changing material facts.

### Success Story

A structured account of a client problem, the work performed, and the resulting business outcome.

Initial candidates:

- McAleer's Office Furniture
- Jaguar Cleaners
- Kelley's Welding & Excavation

Success stories require client approval before publication when the client or confidential details are identifiable.

Every success story should support:

- Client or anonymized profile
- Starting situation
- Operational chaos
- Constraints
- Discovery process
- System design
- Implementation
- Human involvement
- Outcomes
- Evidence
- Lessons
- Related solutions and platforms
- Client approval status

### Trusted Advisor Profile

A profile of a trusted person in the Barons professional network.

Categories include:

- Banking
- CPA and accounting
- Legal
- Insurance
- Marketing
- Human resources
- Technology
- Commercial real estate

The Trusted Advisor Network promotes people and relationships rather than selling directory placement.

### Local Authority Story

A resource connecting Barons to the Gulf Coast business and community ecosystem.

Examples:

- Business spotlights
- Community leadership
- Chamber involvement
- Local interviews
- Gulf Coast success stories
- Educational events
- Regional business challenges

Local authority content should be substantive. Merely inserting a city name into generic content does not create local authority.

## Canonical Content Contract

All major content assets should support a shared base contract.

Recommended fields:

```ts
type ContentStatus =
  | 'idea'
  | 'research'
  | 'draft'
  | 'internal-review'
  | 'client-review'
  | 'approved'
  | 'published'
  | 'review-due'
  | 'archived';

type VerificationStatus =
  | 'verified'
  | 'observed'
  | 'barons-best-practice'
  | 'pending-verification'
  | 'historical';

interface ContentSource {
  label: string;
  url?: string;
  sourceType:
    | 'official-documentation'
    | 'client-interview'
    | 'team-interview'
    | 'support-question'
    | 'internal-record'
    | 'firsthand-experience'
    | 'third-party-source';
  verificationStatus: VerificationStatus;
  accessedAt?: string;
  notes?: string;
}

interface MediaDerivative {
  channel:
    | 'article'
    | 'podcast'
    | 'youtube'
    | 'short-video'
    | 'linkedin'
    | 'facebook'
    | 'newsletter'
    | 'download'
    | 'speaking'
    | 'ai-knowledge';
  status: ContentStatus;
  title?: string;
  angle?: string;
  assetPath?: string;
}

interface ContentObject {
  id: string;
  type:
    | 'cornerstone-guide'
    | 'playbook'
    | 'comparison'
    | 'faq'
    | 'legacy-story'
    | 'success-story'
    | 'trusted-advisor'
    | 'local-authority';

  title: string;
  slug: string;
  description: string;
  canonicalRoute: string;

  audience: string[];
  intent: string[];
  chaosStatement: string;
  promise: string;

  summary: string;
  keyTakeaways: string[];
  questions: Array<{
    question: string;
    answer: string;
  }>;

  relatedSolutions: string[];
  relatedPlatforms: string[];
  relatedProducts: string[];
  relatedIndustries: string[];
  relatedFranchises: string[];
  relatedPeople: string[];
  relatedLocations: string[];
  relatedResources: string[];

  sources: ContentSource[];
  verificationStatus: VerificationStatus;
  author: string;
  reviewer?: string;
  status: ContentStatus;

  publishedAt?: string;
  lastReviewed: string;
  nextReview?: string;

  seoTitle: string;
  seoDescription: string;
  schemaType: string;
  aiSummary: string;
  answerEngineQuestions: string[];

  derivatives: MediaDerivative[];
}
```

The implemented Astro schema may separate shared fields from type-specific fields, but the conceptual contract must remain consistent.

## The 1 → 20 Rule

Every major authoritative asset should be capable of producing at least twenty useful derivatives over time.

This does not mean publishing twenty repetitive versions at once.

It means the original asset must contain enough structured knowledge to support responsible reuse.

A cornerstone guide may produce:

1. Canonical long-form guide
2. Executive summary
3. Downloadable PDF
4. Checklist
5. Decision worksheet
6. FAQ collection
7. Comparison article
8. Related playbook
9. Podcast episode
10. Podcast clips
11. YouTube episode
12. Short-form video series
13. LinkedIn article
14. LinkedIn post series
15. Facebook educational post
16. Email newsletter
17. Email nurture sequence
18. Speaking session
19. Sales enablement resource
20. AI Knowledge Graph entries

Derivatives must point back to the governed knowledge rather than becoming independent sources of truth.

## Media Production Contract

Each major Knowledge Object should support four layers.

### Layer 1: Canonical Knowledge

The authoritative facts, relationships, requirements, experience, evidence, and recommendations.

### Layer 2: Editorial Asset

The complete guide, playbook, comparison, FAQ, or story published on the website.

### Layer 3: Media Adaptations

Channel-specific adaptations such as podcast outlines, video scripts, social posts, newsletters, presentations, and downloads.

### Layer 4: Distribution Record

Future systems may track channel, publication date, URL, campaign, audience, performance, reuse history, and update status.

Sprint 9 should prepare for distribution tracking without requiring a full digital asset management system.

## Editorial Lifecycle

The Content & Media Engine uses the following lifecycle:

```text
Idea
→ Research
→ Draft
→ Internal Review
→ External or Client Review when required
→ Approved
→ Published
→ Reviewed
→ Updated
→ Archived
```

Content status and verification status are separate.

A polished draft may still contain pending verification.

Published content must not imply that pending information is verified.

## Source and Evidence Rules

Every material claim should be traceable to one or more of:

- Official documentation
- Internal records
- Firsthand Barons experience
- Client-approved evidence
- Recorded or documented interviews
- Reliable third-party sources
- Clearly labeled Barons professional judgment

The engine must distinguish fact, requirement, observation, recommendation, opinion, personal recollection, and pending information.

Unsupported precision is prohibited.

Do not invent:

- Performance percentages
- Savings
- Revenue impact
- Client results
- Adoption numbers
- Market position
- Credentials
- Dates
- Franchise mandates
- Product capabilities

## SEO, GEO, and AI Requirements

Every canonical asset should include:

- Stable canonical URL
- Direct definition near the beginning
- Descriptive title and summary
- Clear heading hierarchy
- Natural-language questions
- Concise extractable answers
- Entity relationships
- Source and review signals
- Accurate structured data
- Relevant internal links
- Author or organizational accountability
- No unsupported superlatives

Content must be written for people first while remaining structurally understandable to machines.

## Accessibility Requirements

All public content must maintain WCAG 2.2 AA.

Requirements include:

- One clear page heading
- Logical heading order
- Descriptive link text
- Keyboard-accessible controls
- Visible focus indicators
- Sufficient contrast
- Useful image alternative text
- Captions for prerecorded video
- Transcripts for podcast and video content
- No essential knowledge hidden behind JavaScript
- Tables used only for genuinely tabular data
- Downloads created in accessible formats

## Route Strategy

Content should remain under the established resource architecture:

```text
/resources/
/resources/guides/
/resources/guides/[slug]/
/resources/playbooks/
/resources/playbooks/[slug]/
/resources/faq/
/resources/faq/[slug]/
/resources/stories/
/resources/stories/[slug]/
/resources/advisors/
/resources/advisors/[slug]/
/resources/local/
/resources/local/[slug]/
```

Comparisons retain their established canonical route:

```text
/compare/
/compare/[slug]/
```

A content type should not receive a public index or detail route until there is enough useful content to justify it.

## Component Strategy

Sprint 9 should extend existing shared Authority Engine components before creating new ones.

Likely additions include:

- `ContentHero.astro`
- `ContentMeta.astro`
- `TableOfContents.astro`
- `KeyTakeaways.astro`
- `SourceList.astro`
- `ReviewNotice.astro`
- `AuthorProfile.astro`
- `DownloadCta.astro`
- `MediaDerivativeLinks.astro`
- `SuccessStoryResults.astro`
- `AdvisorProfile.astro`
- `ContentStructuredData.astro`

Components should accept typed data and remain independent of individual articles.

## Implementation Order

1. Document the Content & Media Engine contract.
2. Audit and extend the existing Knowledge Object types.
3. Define shared content schemas and validation.
4. Create content registries or Astro content collections.
5. Build reusable content presentation components.
6. Build canonical resource templates.
7. Implement FAQ composition and reuse.
8. Implement comparison media extensions.
9. Implement story and advisor templates.
10. Add source, review, author, and verification presentation.
11. Add structured data.
12. Populate one complete pilot Knowledge Object.
13. Generate its derivative media records.
14. Verify the 1 → 20 architecture.
15. Populate priority content in controlled waves.
16. Update project documentation.
17. Run build, accessibility, metadata, link, and schema verification.

## Pilot Asset

The first complete pilot should be:

> Business Operating Systems

This is the best pilot because it represents Barons' core philosophy and can connect:

- Accounting
- Payroll
- Merchant services
- CRM
- Reporting
- Inventory
- Automation
- Franchise operations
- BOSS Framework
- Strategy Sessions
- DigiEvolve

The pilot should prove the architecture before large-scale content production begins.

## Non-Negotiable Rules

- No major content page without a corresponding Knowledge Object.
- No unsupported authority claims.
- No franchise requirement presented as a Barons recommendation.
- No Barons recommendation presented as a franchise requirement.
- No client story published without appropriate approval.
- No duplicated source of truth.
- No AI-generated claim accepted without human verification.
- No content type created only to chase keywords.
- No media derivative allowed to contradict its canonical object.
- No stale content left without visible review ownership.

## Definition of Done

Sprint 9 is complete when:

- The Content & Media Engine contract is documented.
- Content object types are modeled and validated.
- Canonical content and media derivatives share one governed source.
- Reusable presentation components are implemented.
- Cornerstone guides, playbooks, FAQs, comparisons, stories, advisors, and local authority content have stable architecture.
- Source, verification, author, and review data are visible where appropriate.
- Structured data accurately reflects visible content.
- The Business Operating Systems pilot is published.
- The pilot demonstrates the 1 → 20 reuse model.
- Priority initial assets are populated without duplicate facts.
- All routes compile successfully.
- Content remains accessible, responsive, fast, useful, and human-first.
- Project documentation reflects the implemented system.
