# Brand Asset Standards

## Purpose

Vendor, platform, franchise, and partner logos improve recognition and make the Barons Platform easier to scan. They must be treated as controlled brand assets rather than decorative images.

## Source Rules

Use only assets that are:

- Supplied directly by the partner, franchisor, or vendor.
- Downloaded from an official brand or media resource.
- Provided through an existing partnership portal or agreement.
- Approved for the intended context.

Do not use logos copied from search-result images, screenshots, reseller pages, or unofficial SVG repositories.

## Storage

Approved public assets should be stored under:

```text
/public/assets/partners/{partner-slug}/
/public/assets/platforms/{platform-slug}/
/public/assets/franchises/{franchise-slug}/
```

Prefer SVG when an official SVG is available. Otherwise use a transparent PNG or WebP sized for the actual display requirement.

## Knowledge Object Metadata

Knowledge Objects may include:

```ts
logo: {
  src: '/assets/platforms/quickbooks-online/logo.svg',
  alt: 'QuickBooks Online',
  width: 320,
  height: 96,
  source: 'Official Intuit partner asset library',
  approved: true,
}
```

The reusable `BrandLogo.astro` component renders approved assets and falls back to a readable text mark when an asset has not yet been approved or added.

## Accessibility

- Use concise alt text containing the brand or product name.
- Do not repeat words such as "logo" unless needed for clarity.
- Decorative duplicate marks should use empty alt text only when the nearby visible heading already identifies the same entity.
- Maintain sufficient surrounding contrast without modifying official logo colors.

## Performance

- Self-host approved assets.
- Do not hotlink vendor images.
- Include intrinsic width and height where known.
- Use lazy loading outside the first viewport.
- Avoid large raster files for small cards.

## Trademark and Presentation

- Preserve official proportions, spacing, colors, and clear space.
- Do not recolor or redraw vendor marks to fit the Barons palette.
- Do not imply endorsement beyond the actual relationship.
- Use a neutral white or light surface when required for legibility.

## Current State

Sprint 7 includes the metadata model and reusable rendering system. Partner and platform marks should be added as approved assets become available. Missing assets render a clean text fallback rather than a broken image.
