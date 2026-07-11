# Barons Website Forms Registry

This document is the source of truth for public website forms and their intended workflows.

| ID | Form | Zoho application | Website route | Status | Purpose |
|---|---|---|---|---|---|
| WF-001 | Strategy Session | Zoho Forms | `/start` | Live | Primary website conversion and discovery intake before booking. |
| WF-002 | Contact Barons | Zoho Forms | `/contact` | Planned | General sales, partnership, media, billing, careers, and other inquiries. |
| WF-003 | BOSS Assessment | Zoho Forms / custom workflow | `/boss-assessment` | Design | Business operating system maturity assessment and qualified lead generation. |
| WF-004 | Support Request | Zoho Desk / Zoho Forms | `/support` | Planned | Existing-client support intake and routing. |
| WF-005 | Software Finder | Zoho Forms / custom workflow | `/software-finder` | Planned | Guided software recommendation based on business requirements. |
| WF-006 | Payments Review | Zoho Forms | `/solutions/payments` | Planned | Merchant services and payment workflow discovery. |
| WF-007 | Payroll Consultation | Zoho Forms | `/solutions/payroll` | Planned | Payroll and workforce discovery and onboarding routing. |
| WF-008 | Referral Partner | Zoho Forms | `/partners` | Planned | Referral, secondary partner, and technology partner inquiries. |
| WF-009 | Newsletter | Zoho Campaigns | Sitewide | Planned | Educational content subscription with explicit consent. |

## WF-001 production details

- Public form URL: `https://zfrmz.com/DXlQnld9dOpzePYa4S0M`
- Website route: `/start`
- Embedded through: `src/components/forms/StrategySessionForm.astro`
- Referrer tracking: enabled by the website component
- Primary CTA language: `Start a Strategy Session`
- Post-submission next step: continue to the appropriate Zoho Bookings service

## Standards

Every public form must:

1. Explain what happens after submission.
2. Ask only for information required for the next business step.
3. Use plain, human language rather than CRM terminology.
4. Include accessible labels, instructions, validation, and error messaging.
5. Capture source and campaign attribution where practical.
6. Provide a fallback link when embedded third-party content fails.
7. Route to a named owner or documented workflow in Zoho.
