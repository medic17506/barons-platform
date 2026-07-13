export interface BrandAsset {
  name: string;
  logo?: string;
  colorClass?: string;
  href?: string;
}

const fallbackColor = 'text-slate-200';

export const brandAssets: Record<string, BrandAsset> = {
  'QuickBooks Online': { name: 'QuickBooks Online', logo: '/assets/brands/quickbooks.svg', colorClass: 'text-[#2ca01c]', href: '/platforms/quickbooks-online/' },
  'QuickBooks Enterprise': { name: 'QuickBooks Enterprise', logo: '/assets/brands/quickbooks.svg', colorClass: 'text-[#2ca01c]' },
  'Intuit Enterprise Suite': { name: 'Intuit Enterprise Suite', logo: '/assets/brands/intuit.svg', colorClass: 'text-[#236cff]', href: '/platforms/intuit-enterprise-suite/' },
  Intuit: { name: 'Intuit', logo: '/assets/brands/intuit.svg', colorClass: 'text-[#236cff]', href: '/platform-partners/intuit/' },
  Xero: { name: 'Xero', logo: '/assets/brands/xero.svg', colorClass: 'text-[#13b5ea]' },
  'Zoho One': { name: 'Zoho One', colorClass: fallbackColor },
  'Zoho CRM': { name: 'Zoho CRM', colorClass: fallbackColor },
  'Zoho Books': { name: 'Zoho Books', colorClass: fallbackColor },
  Lightspeed: { name: 'Lightspeed', colorClass: fallbackColor },
  Cin7: { name: 'Cin7', colorClass: fallbackColor },
  Avalara: { name: 'Avalara', colorClass: fallbackColor },
  Bill360: { name: 'Bill360', colorClass: fallbackColor },
  Databox: { name: 'Databox', colorClass: fallbackColor },
  Fathom: { name: 'Fathom', colorClass: fallbackColor },
  Gusto: { name: 'Gusto', colorClass: fallbackColor },
  'Human Interest': { name: 'Human Interest', colorClass: fallbackColor },
  Qvinci: { name: 'Qvinci', colorClass: fallbackColor },
  SysCloud: { name: 'SysCloud', colorClass: fallbackColor },
};

export function getBrandAsset(name: string): BrandAsset {
  return brandAssets[name] ?? { name, colorClass: fallbackColor };
}
