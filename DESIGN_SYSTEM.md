# Barons Platform Design System

This document is the source of truth for the visual, interaction, and accessibility standards used across the Barons Platform.

## Brand Experience

The site should feel confident, calm, capable, and human.

The intended visitor progression is:

1. Confused or frustrated
2. Understood
3. Relieved
4. Confident
5. Ready to talk

Barons builds business operating systems that help businesses digitally evolve while removing business chaos.

## Core Experience Principles

- Reduce complexity instead of displaying complexity.
- Explain the next step clearly.
- Use technology without making the experience feel impersonal.
- Never create visual noise simply to appear innovative.
- Be honest when an answer requires research or a partner relationship.
- Design for business owners from startup through mid-market.

## Accessibility Standard

The project is built toward WCAG 2.2 Level AA.

Accessibility is part of the definition of done for every page and reusable component.

### Required

- One `main` landmark per page.
- One clear `h1` per page.
- Logical heading order.
- Keyboard access for every interactive control.
- Visible `focus-visible` states.
- No hover-only information.
- Text and controls must meet AA contrast requirements.
- Information may not depend on color alone.
- Informative images require meaningful alt text.
- Decorative images use empty alt text.
- Motion must respect `prefers-reduced-motion`.
- Forms require labels, instructions, accessible errors, and keyboard support.
- Embedded Zoho forms require an accessible fallback contact path.
- Touch targets should be at least 44 by 44 CSS pixels where practical.

### Verification Before Completion

- Keyboard-only review
- Browser zoom and reflow review
- Mobile touch-target review
- Lighthouse accessibility audit
- axe or equivalent automated scan
- Screen-reader sanity check where practical

Automated testing supports accessibility review but does not prove compliance by itself.

## Color Tokens

Defined in `src/styles/global.css`.

### Brand

- Primary: `#4ade80`
- Primary hover: `#86efac`
- Secondary: `#38bdf8`

### Surfaces

- Page: `#020617`
- Surface: `#0f172a`
- Raised surface: `#1e293b`
- Border: `rgba(255, 255, 255, 0.12)`

### Text

- Primary text: `#f8fafc`
- Muted text: `#cbd5e1`
- Subtle text: `#94a3b8`

### Feedback

- Success: `#4ade80`
- Warning: `#facc15`
- Danger: `#f87171`

Color values must be tested in their actual foreground/background combinations before release.

## Typography

- Use a clear sans-serif system stack unless a deliberate brand typeface is introduced later.
- Body copy should generally remain at least 16px.
- Long-form copy should use generous line height.
- Headings should be direct, compact, and readable rather than decorative.
- Avoid excessive uppercase text for long phrases.

## Layout

- Standard content maximum: `max-w-7xl`
- Standard horizontal padding: `px-6`
- Section rhythm: generally `py-20` to `py-24`
- Cards use consistent rounded geometry and restrained borders.
- Pages must reflow without horizontal scrolling at 320px viewport width.

## Interaction

- Links navigate; buttons perform actions.
- Visible focus is required for keyboard users.
- Interactive cards must expose a clear link purpose.
- Avoid hidden controls and unclear icon-only actions.
- Primary actions should be visually obvious without competing with several equal-priority CTAs.
- Animation should support comprehension, not distract from it.

## Core Components

Current reusable components:

- `ButtonLink.astro`
- `Container.astro`
- `Eyebrow.astro`
- `SectionIntro.astro`
- `PageHero.astro`

Sprint 3 will expand this system with accessible cards, stats, callouts, badges, form controls, alerts, and section wrappers as the site requires them. Components are created when there is a real repeated use case; the project will not build a bloated library of unused abstractions.

## ButtonLink

- Minimum control height: 44px
- Supports primary, secondary, and ghost variants
- Uses `focus-visible` rather than removing focus indication
- May accept `ariaLabel` when visible text does not fully describe the destination
- Link text should make sense out of context whenever practical

## Content Voice

- Confident, not arrogant
- Helpful, not breathless
- Human, not overly corporate
- Direct, not cryptic
- Honest about uncertainty
- Focused on business outcomes rather than vendor hype

Preferred emotional promise:

> You do not have to figure it out alone anymore.

Preferred referral outcome:

> Call Barons. You will be glad you did.

## The Barons Test

Before a page, feature, or component ships, ask:

1. Does it reduce business chaos?
2. Does it make the owner's next step clearer?
3. Is it accessible to the people who need it?
4. Does it maintain human responsibility where it matters?
5. Is it useful, or is it merely decorative?

If it fails the test, it does not ship.
