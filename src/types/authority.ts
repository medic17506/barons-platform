export type AuthorityEntityType =
  | 'solution'
  | 'platform'
  | 'comparison'
  | 'industry'
  | 'franchise'
  | 'location'
  | 'resource';

export type AuthorityStatus = 'draft' | 'review' | 'published';

export interface AuthorityLink {
  label: string;
  href: string;
  description?: string;
}

export interface AuthorityQuestion {
  question: string;
  answer: string;
}

export interface AuthorityCta {
  label: string;
  href: string;
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
  seoTitle: string;
  seoDescription: string;
  schemaType: 'Service' | 'SoftwareApplication' | 'Article' | 'ProfessionalService';
  status: AuthorityStatus;
  lastReviewed: string;
}

export type SolutionEntity = AuthorityEntity & {
  type: 'solution';
  schemaType: 'Service';
};

export type PlatformEntity = AuthorityEntity & {
  type: 'platform';
  schemaType: 'SoftwareApplication';
  vendorName: string;
  category: string;
};

export const authorityRoutes: Record<AuthorityEntityType, string> = {
  solution: '/solutions',
  platform: '/platforms',
  comparison: '/compare',
  industry: '/industries',
  franchise: '/franchises',
  location: '/locations',
  resource: '/resources',
};

export function getAuthorityHref(entity: Pick<AuthorityEntity, 'type' | 'slug'>): string {
  return `${authorityRoutes[entity.type]}/${entity.slug}`;
}
