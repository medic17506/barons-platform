export type FranchiseBrandAssetStatus =
  | 'official-site-asset'
  | 'official-site-found'
  | 'pending-source'
  | 'replace-with-franchisor-kit';

export interface FranchiseBrandAssetRecord {
  name: string;
  slug: string;
  officialSite: string;
  logoSrc?: string;
  logoAlt: string;
  sourcePage?: string;
  status: FranchiseBrandAssetStatus;
  notes?: string;
}

export const franchiseBrandAssets = [
  {
    name: 'HOTWORX',
    slug: 'hotworx',
    officialSite: 'https://www.hotworx.net/',
    logoSrc: 'https://cdn.prod.website-files.com/67040add09cdc82708e09899/671aa6b1fab06fe17619c32b_HW.svg',
    logoAlt: 'HOTWORX logo',
    sourcePage: 'https://www.hotworx.net/',
    status: 'replace-with-franchisor-kit',
    notes: 'Temporary SVG served by the official HOTWORX website. Replace when corporate supplies an approved brand package.',
  },
  {
    name: 'Burn Boot Camp',
    slug: 'burn-boot-camp',
    officialSite: 'https://burnbootcamp.com/',
    logoSrc: 'https://burnbootcamp.com/logo-228.svg',
    logoAlt: 'Burn Boot Camp logo',
    sourcePage: 'https://burnbootcamp.com/',
    status: 'replace-with-franchisor-kit',
    notes: 'Temporary SVG served by the official Burn Boot Camp website. Replace when corporate supplies an approved brand package.',
  },
  {
    name: 'Pigtails & Crewcuts',
    slug: 'pigtails-and-crewcuts',
    officialSite: 'https://pigtailsandcrewcuts.com/',
    logoAlt: 'Pigtails & Crewcuts logo',
    sourcePage: 'https://pigtailsandcrewcuts.com/',
    status: 'official-site-found',
    notes: 'Official site confirmed. Direct logo asset still needs extraction or a franchisor-provided file.',
  },
  {
    name: 'Scenthound',
    slug: 'scenthound',
    officialSite: 'https://www.scenthound.com/',
    logoAlt: 'Scenthound logo',
    sourcePage: 'https://www.scenthound.com/',
    status: 'official-site-found',
    notes: 'Official site confirmed. Direct logo asset still needs extraction or a franchisor-provided file.',
  },
  { name: 'Woodhouse Spa', slug: 'woodhouse-spa', officialSite: '', logoAlt: 'Woodhouse Spa logo', status: 'pending-source' },
  { name: 'ARCpoint Labs', slug: 'arcpoint-labs', officialSite: '', logoAlt: 'ARCpoint Labs logo', status: 'pending-source' },
  { name: 'DoodyCalls', slug: 'doodycalls', officialSite: '', logoAlt: 'DoodyCalls logo', status: 'pending-source' },
  { name: 'Urban Air', slug: 'urban-air', officialSite: '', logoAlt: 'Urban Air logo', status: 'pending-source' },
  { name: "PJ's Coffee", slug: 'pjs-coffee', officialSite: '', logoAlt: "PJ's Coffee logo", status: 'pending-source' },
  { name: 'Curves', slug: 'curves', officialSite: '', logoAlt: 'Curves logo', status: 'pending-source' },
  { name: 'Senior Helpers', slug: 'senior-helpers', officialSite: '', logoAlt: 'Senior Helpers logo', status: 'pending-source' },
  { name: 'Painting with a Twist', slug: 'painting-with-a-twist', officialSite: '', logoAlt: 'Painting with a Twist logo', status: 'pending-source' },
  { name: 'Metal Supermarkets', slug: 'metal-supermarkets', officialSite: '', logoAlt: 'Metal Supermarkets logo', status: 'pending-source' },
] as const satisfies readonly FranchiseBrandAssetRecord[];

export function getFranchiseBrandAsset(slug: string): FranchiseBrandAssetRecord | undefined {
  return franchiseBrandAssets.find((asset) => asset.slug === slug);
}
