import type { AuthorityEntity, AuthorityCta, PurchaseBehavior } from '../types/authority';

const defaultDestinations: Record<PurchaseBehavior, string> = {
  'lead-only': '/start',
  'quote-required': '/contact',
  'schedule-consultation': '/start',
  referral: '/contact',
  ecommerce: '/start',
  'client-portal': '/contact',
};

const defaultLabels: Record<PurchaseBehavior, string> = {
  'lead-only': 'Get Started',
  'quote-required': 'Request a Quote',
  'schedule-consultation': 'Schedule a Strategy Session',
  referral: 'Connect with Barons',
  ecommerce: 'Get Started',
  'client-portal': 'Contact Your Barons Team',
};

export interface ResolvedCommerceCta extends AuthorityCta {
  behavior: PurchaseBehavior;
  owner?: string;
  note?: string;
}

export function resolveCommerceCta(entity: AuthorityEntity): ResolvedCommerceCta {
  const commerce = entity.commerce;

  if (!commerce) {
    return {
      ...entity.primaryCta,
      behavior: 'lead-only',
    };
  }

  return {
    behavior: commerce.purchaseBehavior,
    label: commerce.ctaLabel ?? defaultLabels[commerce.purchaseBehavior],
    href: commerce.destination ?? defaultDestinations[commerce.purchaseBehavior],
    owner: commerce.owner,
    note: commerce.note,
  };
}
