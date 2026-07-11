export type PolicyVerification = 'verified' | 'observed' | 'barons-best-practice' | 'pending-verification' | 'historical';
export type PolicyScope = 'accounting' | 'payroll' | 'point-of-sale' | 'merchant-services' | 'reporting' | 'administration' | 'naming';

export interface FranchisePolicyItem {
  scope: PolicyScope;
  requirement: string;
  explanation?: string;
  baronsRole: 'implements' | 'supports' | 'coordinates' | 'not-involved';
}

export interface FranchisePolicy {
  franchiseSlug: string;
  title: string;
  verification: PolicyVerification;
  source: string;
  lastReviewed: string;
  nextReviewSource: 'website' | 'crm-future';
  items: readonly FranchisePolicyItem[];
}

export const hotworxPolicy: FranchisePolicy = {
  franchiseSlug: 'hotworx',
  title: 'HOTWORX Technology and Accounting Standards',
  verification: 'verified',
  source: 'Current Barons implementation requirements and franchisor operating standards known to Barons.',
  lastReviewed: '2026-07-11',
  nextReviewSource: 'crm-future',
  items: [
    {
      scope: 'accounting',
      requirement: 'QuickBooks Online Plus is required for franchise locations.',
      explanation: 'The required edition supports the reporting and operational structure expected across the franchise system.',
      baronsRole: 'implements',
    },
    {
      scope: 'administration',
      requirement: 'Barons must retain the designated primary administrator role in the franchisee subscription.',
      baronsRole: 'supports',
    },
    {
      scope: 'naming',
      requirement: 'The franchise location code must remain in the QuickBooks company title.',
      baronsRole: 'implements',
    },
    {
      scope: 'point-of-sale',
      requirement: 'Square is the franchise point-of-sale platform.',
      explanation: 'Barons does not sell, replace, or administer the franchise POS standard.',
      baronsRole: 'not-involved',
    },
    {
      scope: 'merchant-services',
      requirement: 'Merchant processing is handled through the Square ecosystem.',
      baronsRole: 'not-involved',
    },
    {
      scope: 'payroll',
      requirement: 'Payroll is handled through the franchise-designated payroll provider.',
      explanation: 'Barons does not replace the franchise payroll provider.',
      baronsRole: 'not-involved',
    },
  ],
};
