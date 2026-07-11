export type AuthorityEntityType =
  | 'solution'
  | 'platform-partner'
  | 'product'
  | 'edition'
  | 'service'
  | 'integration'
  | 'policy'
  | 'comparison'
  | 'industry'
  | 'franchise'
  | 'location'
  | 'resource';

export type AuthorityStatus = 'draft' | 'review' | 'published';
export type SupportConfidence = 'recommended' | 'supported' | 'legacy' | 'retired';
export type RecommendationStrength = 'required' | 'preferred' | 'compatible' | 'supported' | 'legacy' | 'not-recommended';
export type PurchaseBehavior =
  | 'lead-only'
  | 'quote-required'
  | 'schedule-consultation'
  | 'referral'
  | 'ecommerce'
  | 'client-portal';

export interface AuthorityLink {
  label: string;
  href: string;
  description?: string;
}

export interface BrandAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  source?: string;
  approved?: boolean;
}

export interface AuthorityQuestion {
  question: string;
  answer: string;
}

export interface AuthorityCta {
  label: string;
  href: string;
}

export interface IntentOptions {
  start: boolean;
  compare: boolean;
  design: boolean;
}

export interface CommerceOptions {
  purchaseBehavior: PurchaseBehavior;
  ctaLabel?: string;
  destination?: string;
  futureBehavior?: PurchaseBehavior;
  owner?: string;
  note?: string;
}

export interface AuthorityEntity {
  type: AuthorityEntityType;
  title: string;
  slug: string;
  eyebrow: string;
  description: string;
  promise: string;
  chaosStatement: string;
  audience: readonly string[];
  notFor?: readonly string[];
  painPoints: readonly string[];
  outcomes: readonly string[];
  approach: readonly string[];
  integrations?: readonly string[];
  questions: readonly AuthorityQuestion[];
  relatedSolutions?: readonly string[];
  relatedPlatforms?: readonly string[];
  relatedIndustries?: readonly string[];
  relatedFranchises?: readonly string[];
  relatedLocations?: readonly string[];
  relatedResources?: readonly string[];
  primaryCta: AuthorityCta;
  secondaryCta: AuthorityCta;
  intent?: IntentOptions;
  commerce?: CommerceOptions;
  confidence?: SupportConfidence;
  recommendationStrength?: RecommendationStrength;
  logo?: BrandAsset;
  seoTitle: string;
  seoDescription: string;
  schemaType: 'Service' | 'SoftwareApplication' | 'Article' | 'ProfessionalService' | 'Organization';
  status: AuthorityStatus;
  lastReviewed: string;
}

export type SolutionEntity = AuthorityEntity & {
  type: 'solution';
  schemaType: 'Service';
};

export interface HierarchyChild {
  title: string;
  slug: string;
  href: string;
  description: string;
  badge?: string;
  logo?: BrandAsset;
}

export type PlatformEntity = AuthorityEntity & {
  type: 'platform-partner' | 'product' | 'edition';
  schemaType: 'SoftwareApplication' | 'Organization';
  vendorName: string;
  category: string;
  parentSlug?: string;
  parentHref?: string;
  parentLabel?: string;
  children?: readonly HierarchyChild[];
  mandateNotice?: string;
};

export const authorityRoutes: Record<AuthorityEntityType, string> = {
  solution: '/solutions',
  'platform-partner': '/platform-partners',
  product: '/platforms',
  edition: '/platforms',
  service: '/services',
  integration: '/integrations',
  policy: '/standards',
  comparison: '/compare',
  industry: '/industries',
  franchise: '/franchises',
  location: '/locations',
  resource: '/resources',
};

export function getAuthorityHref(entity: Pick<AuthorityEntity, 'type' | 'slug'>): string {
  return `${authorityRoutes[entity.type]}/${entity.slug}`;
}
