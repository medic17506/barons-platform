# Architectural Decisions

This document records major architectural and business decisions made during the Barons Platform project.

---

## Decision 001

### Navigation is data-driven.

**Reason**

Navigation should be managed from a single location and support future CMS integration.

**Status**

Accepted

---

## Decision 002

### Barons Green remains the primary brand color.

**Reason**

The color has represented Barons for decades and is part of the Barons identity.

**Status**

Accepted

---

## Decision 003

### The public platform is solution-led.

**Reason**

Visitors search for business outcomes and operating problems before they search for software products. Platforms support solutions; they do not define the entire client journey.

**Status**

Accepted

---

## Decision 004

### Documentation lives at the project root.

**Reason**

Core project documents should be easy to locate and independent of Astro's generated folders.

**Status**

Accepted

---

## Decision 005

### Pages assemble reusable components.

**Reason**

Pages should contain minimal presentation logic. Components and Knowledge Objects should be reusable across the platform.

**Status**

Accepted

---

## Decision 006

### Model reality first. Render pages second.

**Reason**

Partners, products, editions, solutions, franchises, industries, policies, people, and resources should exist as structured Knowledge Objects before they are presented as pages.

**Status**

Accepted

---

## Decision 007

### Capture knowledge once and publish it everywhere.

**Reason**

Descriptions, policies, relationships, trust signals, and evidence should not be rewritten separately for the website, AI, CRM, media, and future client portal.

**Status**

Accepted

---

## Decision 008

### Presentation never owns business logic.

**Reason**

Pages present information. Knowledge Objects own relationships. Intent determines the visitor path. The commerce abstraction determines how a transaction or intake begins.

**Status**

Accepted

---

## Decision 009

### Commerce remains abstracted from page design.

**Reason**

The current experience is lead generation and human review. Future Zoho Commerce, partner referral, quoting, booking, provisioning, and client-portal flows should be introduced without rebuilding product pages.

**Status**

Accepted

---

## Decision 010

### Education comes before sales.

**Reason**

Content should help visitors make a better decision even when they do not immediately become a client.

**Status**

Accepted

---

## Decision 011

### Business problems are presented before products.

**Reason**

Payroll is about paying people accurately and compliantly. Merchant services are about getting paid and improving cash flow. Inventory is about operational visibility. Software is the supporting tool.

**Status**

Accepted

---

## Decision 012

### Authority is earned, not assumed.

**Reason**

Barons should speak with strong authority where it has verified knowledge and real implementation experience. Newer or less familiar products receive measured, transparent positioning until experience grows.

**Status**

Accepted

---

## Decision 013

### Product pages should explain when the product is not a good fit.

**Reason**

Honest boundaries increase trust and prevent software-first recommendations.

**Status**

Accepted

---

## Decision 014

### Franchise requirements take priority over general recommendations.

**Reason**

When a franchisor mandates a platform, edition, provider, administrator structure, naming standard, or reporting process, Barons works within that constraint.

**Status**

Accepted

---

## Decision 015

### Franchise requirements and Barons guidance remain separate.

**Reason**

A franchisor requirement is not the same as a Barons recommendation. Public pages must clearly distinguish verified standards, observed practices, pending verification, historical information, and Barons best practices.

**Status**

Accepted

---

## Decision 016

### Unknown franchise requirements remain unknown.

**Reason**

The platform must never infer or invent a franchise mandate. Unverified information remains unpublished or clearly marked pending verification.

**Status**

Accepted

---

## Decision 017

### Franchise review metadata will eventually be CRM-driven.

**Reason**

Review dates, contacts, verification history, follow-up actions, and annual alignment workflows belong in Zoho CRM rather than being manually maintained only in the website.

**Status**

Planned

---

## Decision 018

### Strategic partners receive priority over the full software market.

**Reason**

The platform should promote technologies Barons actively represents, recommends, implements, and supports. Supported or external systems may appear contextually without receiving equal promotional weight.

**Status**

Accepted

---

## Decision 019

### External systems are documented only when necessary.

**Reason**

A system required by a franchise or existing client environment may be acknowledged in context, but it does not automatically receive a dedicated page, logo placement, comparison campaign, or SEO priority.

**Status**

Accepted

---

## Decision 020

### Brand assets require provenance and replacement status.

**Reason**

Official partner kits are preferred. Temporary official-site assets may be used when needed, but their source and replacement status must be recorded.

**Status**

Accepted

---

## Decision 021

### Support is a first-class public journey.

**Reason**

Existing clients need a direct path to Zoho Assist and general support without being forced through a sales-oriented contact flow.

**Status**

Accepted

---

## Decision 022

### Success Stories are first-class Knowledge Objects.

**Reason**

Client stories should connect company, industry, location, challenge, solution, outcome, technology, media, and approval status. Public publication requires client permission.

**Status**

Accepted

---

## Decision 023

### Trusted Advisors are first-class Knowledge Objects.

**Reason**

Strong businesses depend on relationships with bankers, CPAs, attorneys, insurance professionals, HR advisors, marketers, and other specialists. Barons may educate visitors about those roles and highlight trusted regional relationships.

**Status**

Accepted

---

## Decision 024

### Community leadership is a strategic trust signal.

**Reason**

Goldman Sachs 10,000 Small Businesses, Chamber involvement, Gulf Coast relationships, community leadership, and local business stories demonstrate both competence and commitment.

**Status**

Accepted

---

## Decision 025

### The About section is a cornerstone trust section.

**Reason**

The About structure should tell the foundation and evolution of Barons, explain its philosophy, document community leadership, and introduce the humans behind the technology: Brandon Morris, Sharon McCauley, Kylee Williams, Dakota Williams, and Carol Robinson.

**Status**

Accepted

---

## Decision 026

### Media is connected to the Knowledge Graph.

**Reason**

Videos, podcast episodes, transcripts, short clips, articles, newsletters, FAQs, and speaking content should strengthen existing Knowledge Objects rather than become disconnected marketing assets.

**Status**

Accepted

---

## Decision 027

### Sprint 9 focuses on reusable content and media.

**Reason**

The platform architecture is sufficiently established. The next priority is authoritative content: guides, comparisons, FAQs, playbooks, stories, interviews, videos, podcasts, and downloads.

**Status**

Accepted
