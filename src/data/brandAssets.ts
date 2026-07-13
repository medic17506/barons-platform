export interface BrandAsset {
  name: string;
  logo?: string;
  logoDark?: string;
  colorClass?: string;
  href?: string;
  source?: string;
  businessSystems?: string[];
}

const fallbackColor = 'text-slate-200';

const zohoAsset = {
  logo: '/assets/brands/zoho/logo.svg',
  logoDark: '/assets/brands/zoho/logo-dark.svg',
  source: 'https://www.zoho.com/branding/visual-guidelines.html',
};

export const brandAssets: Record<string, BrandAsset> = {
  'QuickBooks Online': {
    name: 'QuickBooks Online',
    logo: '/assets/brands/quickbooks.svg',
    colorClass: 'text-[#2ca01c]',
    href: '/platforms/quickbooks-online/',
    businessSystems: ['Accounting', 'Payroll', 'Payments', 'Reporting'],
  },
  'QuickBooks Enterprise': {
    name: 'QuickBooks Enterprise',
    logo: '/assets/brands/quickbooks.svg',
    colorClass: 'text-[#2ca01c]',
    businessSystems: ['Accounting', 'Inventory', 'Reporting'],
  },
  'Intuit Enterprise Suite': {
    name: 'Intuit Enterprise Suite',
    logo: '/assets/brands/intuit.svg',
    colorClass: 'text-[#236cff]',
    href: '/platforms/intuit-enterprise-suite/',
    businessSystems: ['Accounting', 'Payroll', 'Payments', 'Reporting', 'Multi-Entity'],
  },
  Intuit: {
    name: 'Intuit',
    logo: '/assets/brands/intuit.svg',
    colorClass: 'text-[#236cff]',
    href: '/platform-partners/intuit/',
    businessSystems: ['Accounting', 'Payroll', 'Payments'],
  },
  Xero: {
    name: 'Xero',
    logo: '/assets/brands/xero.svg',
    colorClass: 'text-[#13b5ea]',
    businessSystems: ['Accounting', 'Reporting'],
  },
  'Zoho One': {
    name: 'Zoho One',
    ...zohoAsset,
    businessSystems: ['CRM', 'Accounting', 'Automation', 'HR', 'Projects', 'Marketing'],
  },
  'Zoho CRM': {
    name: 'Zoho CRM',
    ...zohoAsset,
    businessSystems: ['CRM', 'Sales', 'Automation'],
  },
  'Zoho Books': {
    name: 'Zoho Books',
    ...zohoAsset,
    businessSystems: ['Accounting', 'Payments', 'Reporting'],
  },
  Lightspeed: { name: 'Lightspeed', colorClass: fallbackColor, businessSystems: ['POS', 'Inventory'] },
  Cin7: { name: 'Cin7', colorClass: fallbackColor, businessSystems: ['Inventory', 'Operations'] },
  Avalara: { name: 'Avalara', colorClass: fallbackColor, businessSystems: ['Tax & Compliance'] },
  Bill360: { name: 'Bill360', colorClass: fallbackColor, businessSystems: ['AR', 'Payments'] },
  Databox: { name: 'Databox', colorClass: fallbackColor, businessSystems: ['Reporting', 'Business Intelligence'] },
  Fathom: { name: 'Fathom', colorClass: fallbackColor, businessSystems: ['Reporting', 'Business Intelligence'] },
  Gusto: { name: 'Gusto', colorClass: fallbackColor, businessSystems: ['Payroll', 'HR'] },
  'Human Interest': { name: 'Human Interest', colorClass: fallbackColor, businessSystems: ['Benefits', 'Retirement'] },
  Qvinci: { name: 'Qvinci', colorClass: fallbackColor, businessSystems: ['Reporting', 'Multi-Entity'] },
  SysCloud: { name: 'SysCloud', colorClass: fallbackColor, businessSystems: ['Backup & Security'] },
};

export function getBrandAsset(name: string): BrandAsset {
  return brandAssets[name] ?? { name, colorClass: fallbackColor };
}
