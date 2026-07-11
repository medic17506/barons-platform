import type { AuthorityEntity } from '../../types/authority';

export interface Wave3Entity extends AuthorityEntity {
  highlights: readonly string[];
  commonMistakes: readonly string[];
  guidance: readonly string[];
  policySlug?: string;
}

const ctas = {
  primaryCta: { label: 'Talk to Barons', href: '/contact' },
  secondaryCta: { label: 'Start a Strategy Session', href: '/start' },
} as const;

export const hotworxEntity: Wave3Entity = {
  type: 'franchise',
  title: 'HOTWORX Franchise Support',
  slug: 'hotworx',
  eyebrow: 'Franchise system',
  description: 'Accounting technology, implementation support, and franchise-aware guidance for HOTWORX owners operating within established corporate standards.',
  promise: 'Implement the required system correctly, preserve franchise standards, and reduce avoidable operational friction.',
  chaosStatement: 'Franchise technology becomes chaotic when required editions, administrator roles, naming conventions, and reporting structures are treated as optional. Barons helps HOTWORX owners begin with the correct accounting foundation and maintain it as the location grows.',
  audience: ['New HOTWORX franchise owners', 'Existing owners opening additional locations', 'Multi-unit ownership groups', 'HOTWORX teams needing accounting implementation or support'],
  notFor: ['Businesses that are not part of the HOTWORX franchise system', 'Owners seeking to replace corporate-mandated systems'],
  painPoints: ['Pushback against the required QuickBooks edition', 'Incorrect subscription ownership or administrator access', 'Missing location codes in company names', 'Inconsistent setup across multiple locations', 'Confusion about which systems Barons supports'],
  outcomes: ['QuickBooks Online Plus implemented to the franchise standard', 'Correct administrator and naming structure', 'Cleaner support and onboarding', 'More consistent multi-location accounting', 'Clear separation between corporate requirements and Barons guidance'],
  approach: ['Confirm the location and ownership structure', 'Implement the required QuickBooks Online Plus subscription', 'Preserve required administrator access and location naming', 'Configure the accounting environment for dependable reporting', 'Support the owner while respecting systems outside Barons’ scope'],
  questions: [
    { question: 'Why does HOTWORX require QuickBooks Online Plus?', answer: 'The required edition supports the operational tracking and reporting structure expected across the franchise system. Barons implements the requirement rather than treating the edition as an optional recommendation.' },
    { question: 'Can a HOTWORX owner choose a cheaper QuickBooks plan?', answer: 'The franchise standard takes priority. Choosing another edition can create reporting, support, and compliance problems even when the lower plan appears sufficient for basic bookkeeping.' },
    { question: 'Does Barons provide the HOTWORX POS or payroll system?', answer: 'No. Those systems are part of the franchise ecosystem but remain outside Barons’ service scope. Barons focuses on the accounting environment and the systems it is responsible for implementing and supporting.' },
  ],
  highlights: ['QBO Plus franchise standard', 'Primary administrator continuity', 'Location-code naming standard', 'Multi-unit accounting support'],
  commonMistakes: ['Purchasing the wrong QuickBooks edition', 'Removing or changing required administrator access', 'Deleting the location code from the company name', 'Setting up each location differently', 'Assuming Barons controls every franchise technology provider'],
  guidance: ['Use the franchise-required accounting edition from the beginning', 'Keep ownership, access, and naming conventions documented', 'Separate corporate requirements from optional improvements', 'Standardize setup across locations whenever possible', 'Ask before changing subscriptions, users, or company naming'],
  policySlug: 'hotworx',
  relatedSolutions: ['accounting', 'payroll', 'reporting-automation'],
  relatedPlatforms: ['quickbooks-online', 'plus'],
  relatedIndustries: ['franchise-businesses', 'multi-entity-organizations'],
  ...ctas,
  seoTitle: 'HOTWORX QuickBooks Setup & Franchise Support | Barons',
  seoDescription: 'HOTWORX franchise support for required QuickBooks Online Plus setup, administrator standards, location naming, reporting, and multi-unit operations.',
  schemaType: 'ProfessionalService',
  status: 'published',
  lastReviewed: '2026-07-11',
};

export const constructionEntity: Wave3Entity = {
  type: 'industry',
  title: 'Business Systems for Construction Companies',
  slug: 'construction',
  eyebrow: 'Industry',
  description: 'Accounting, job costing, payroll, inventory, reporting, and operational systems designed around the realities of construction and field-based businesses.',
  promise: 'Connect the field, the office, the job, and the financials before disconnected systems erode margin.',
  chaosStatement: 'Construction companies lose visibility when job costs, equipment, labor, purchasing, change orders, billing, and cash flow live in separate systems. Barons helps design a practical operating structure that supports the work without burying the team in administration.',
  audience: ['General contractors', 'Specialty contractors', 'Welding and excavation companies', 'Construction companies with equipment and field crews', 'Growing contractors moving beyond basic bookkeeping'],
  notFor: ['Businesses looking only for a generic software recommendation without examining workflow', 'Teams unwilling to track job-level information consistently'],
  painPoints: ['Incomplete job costing', 'Labor disconnected from projects', 'Equipment and inventory tracked outside accounting', 'Weak visibility into work in progress', 'Cash flow gaps between spending and collections'],
  outcomes: ['More dependable job profitability', 'Clearer labor and material tracking', 'Better purchasing and inventory visibility', 'Stronger cash-flow planning', 'Reporting that supports operational decisions'],
  approach: ['Map the estimate-to-cash workflow', 'Define jobs, cost codes, labor, materials, and equipment tracking', 'Select accounting and inventory systems appropriate to complexity', 'Connect payroll, purchasing, payments, and reporting', 'Review whether the system still fits as the company grows'],
  questions: [
    { question: 'Which QuickBooks product is best for construction?', answer: 'The answer depends on job costing depth, users, inventory, field workflows, reporting, and whether the company needs QuickBooks Online, QuickBooks Enterprise, or a broader integrated stack.' },
    { question: 'Why is job costing often inaccurate?', answer: 'Costs are frequently entered late, coded inconsistently, or disconnected from payroll, purchasing, and field activity. Accurate job costing is a process design issue as much as a software issue.' },
    { question: 'Can inventory and equipment be managed inside accounting software?', answer: 'Sometimes. QuickBooks Enterprise Advanced Inventory can be a strong fit for certain businesses, while companies with more complex inventory operations may need a system such as Cin7.' },
  ],
  highlights: ['Job costing', 'Progress and project billing', 'Payroll and labor allocation', 'Equipment and inventory visibility', 'Cash-flow planning'],
  commonMistakes: ['Treating every expense as overhead', 'Waiting until month-end to code job costs', 'Using spreadsheets as the permanent operating system', 'Ignoring committed costs and work in progress', 'Buying software before defining the workflow'],
  guidance: ['Design job and cost-code standards before implementation', 'Make field data capture simple enough to be used consistently', 'Connect payroll and purchasing to jobs', 'Review margins during the project, not only after completion', 'Scale controls as volume and project complexity increase'],
  relatedSolutions: ['accounting', 'payroll', 'inventory', 'reporting-automation', 'payments'],
  relatedPlatforms: ['quickbooks-online', 'quickbooks-enterprise', 'cin7'],
  relatedLocations: ['mobile-alabama', 'baldwin-county', 'gulf-coast'],
  relatedResources: ['kelleys-welding-excavation'],
  ...ctas,
  seoTitle: 'Construction Accounting, Job Costing & Business Systems | Barons',
  seoDescription: 'Construction accounting, job costing, payroll, inventory, reporting, and operational systems for contractors and field-based businesses.',
  schemaType: 'ProfessionalService',
  status: 'published',
  lastReviewed: '2026-07-11',
};
