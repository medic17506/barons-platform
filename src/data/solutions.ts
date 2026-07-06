export const solutions = [
  {
    title: 'Accounting Systems',
    slug: 'accounting',
    description:
      'QuickBooks, Xero, Zoho Books, cleanup strategy, conversions, controls, and support for the numbers your business depends on.',
    promise: 'Cleaner books, clearer ownership, better decisions.',
    pain: ['Messy chart of accounts', 'Duplicate workflows', 'Unclear reporting', 'Software decisions made under pressure'],
  },
  {
    title: 'Payroll & Workforce',
    slug: 'payroll',
    description:
      'Payroll, time tracking, benefits connections, coach access, employee workflows, and human processes that keep teams aligned.',
    promise: 'A workforce system your team can actually use.',
    pain: ['Manual payroll steps', 'Confusing permissions', 'Location-specific access', 'Disconnected time and payroll data'],
  },
  {
    title: 'Payments & Cash Flow',
    slug: 'payments',
    description:
      'Merchant services, invoicing, AR/AP workflows, recurring revenue, and reporting that make money movement easier to understand.',
    promise: 'Less friction between sale, payment, and visibility.',
    pain: ['Slow collections', 'Hidden merchant fees', 'Manual invoice follow-up', 'Weak cash flow forecasting'],
  },
  {
    title: 'CRM & Operations',
    slug: 'crm',
    description:
      'Zoho CRM, Results CRM, sales pipelines, onboarding workflows, franchise records, and customer communication systems.',
    promise: 'Your customer journey stops living in everyone’s head.',
    pain: ['Lost follow-ups', 'Scattered contact records', 'No clear ownership', 'Weak handoff from sales to operations'],
  },
  {
    title: 'Inventory, POS & Retail',
    slug: 'inventory-pos',
    description:
      'Inventory, point of sale, multi-location controls, item strategy, and practical systems for businesses that sell products or services.',
    promise: 'Inventory and sales systems that match real operations.',
    pain: ['Inventory drift', 'Location blind spots', 'POS/accounting mismatch', 'No clean item structure'],
  },
  {
    title: 'Reporting & Automation',
    slug: 'reporting-automation',
    description:
      'Dashboards, executive reporting, recurring tasks, AI-assisted workflows, and integrations that remove operational drag.',
    promise: 'Better visibility without creating a robot boss.',
    pain: ['Manual reports', 'No single source of truth', 'Too many status meetings', 'Automation without accountability'],
  },
] as const;

export const platforms = [
  'QuickBooks Online',
  'QuickBooks Enterprise',
  'Xero',
  'Zoho One',
  'Zoho CRM',
  'Zoho Books',
  'Lightspeed',
  'Cin7',
  'Avalara',
  'Bill360',
  'Databox',
  'Fathom',
  'Gusto',
  'Human Interest',
  'Qvinci',
  'SysCloud',
] as const;

export const audiences = [
  {
    title: 'Franchise Owners',
    description:
      'Launch support, accounting standards, reporting, payroll, payments, CRM, and franchise-aware workflows without losing the local owner reality.',
  },
  {
    title: 'Multi-Location Operators',
    description:
      'Cleaner visibility across locations, ownership groups, users, permissions, workflows, reporting, and change management.',
  },
  {
    title: 'Growing Small Businesses',
    description:
      'A practical path from duct-taped tools to systems that can handle more volume, more people, and better decisions.',
  },
  {
    title: 'Direct & Independent Sales',
    description:
      'Support for businesses buying directly, outside of a franchise system, with the same care and structured implementation.',
  },
] as const;

export const bossPhases = [
  {
    phase: 'B',
    title: 'Baseline',
    description:
      'Map the current state: systems, users, permissions, pain points, workflows, reporting, requirements, risk, and the humans affected.',
  },
  {
    phase: 'O',
    title: 'Optimize',
    description:
      'Clean up what should stay, remove what should not, and design a better operating flow before adding complexity.',
  },
  {
    phase: 'S',
    title: 'Scale',
    description:
      'Implement platforms, integrations, dashboards, training, and documentation that support the next stage of growth.',
  },
  {
    phase: 'S',
    title: 'Support',
    description:
      'Stay close after launch so the system keeps working when the business, team, vendor rules, or requirements change.',
  },
] as const;

export const franchiseBrands = [
  'HOTWORX',
  'Burn Boot Camp',
  'Pigtails & Crewcuts',
  'Scenthound',
  'Woodhouse Day Spa',
  'ArcPoint Labs',
  'DoodyCalls',
  'Urban Air',
  'PJ’s Coffee',
  'Curves',
  'Senior Helpers',
  'Painting with a Twist',
  'Metal Supermarkets',
] as const;

export const processSteps = [
  'Discovery and system audit',
  'Architecture and platform fit',
  'Implementation and migration',
  'Training and documentation',
  'Support and continuous improvement',
] as const;
