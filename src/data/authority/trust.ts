export interface TrustSignal {
  label: string;
  detail: string;
  evidence: string;
}

const defaultSignals: readonly TrustSignal[] = [
  {
    label: 'Serving businesses since 2002',
    detail: 'Long-term perspective across changing technology, business models, and operating requirements.',
    evidence: 'Barons, Inc. company history.',
  },
  {
    label: 'Human implementation and support',
    detail: 'Recommendations are backed by real people who help clients configure, understand, and maintain the system.',
    evidence: 'Barons service and support model.',
  },
];

const trustRegistry: Record<string, readonly TrustSignal[]> = {
  intuit: [
    {
      label: '24+ years working with QuickBooks',
      detail: 'Barons supported QuickBooks businesses long before QuickBooks Online existed and has worked through major generations of the platform.',
      evidence: 'Barons has served QuickBooks clients since 2002.',
    },
    {
      label: 'Elite QuickBooks Solution Provider',
      detail: 'Deep product, licensing, implementation, and support experience across the Intuit ecosystem.',
      evidence: 'Current Intuit partner standing maintained by Barons.',
    },
    ...defaultSignals,
  ],
  'quickbooks-online': [
    {
      label: '24+ years of QuickBooks experience',
      detail: 'Advice is grounded in real implementations, migrations, support, and platform changes—not feature sheets alone.',
      evidence: 'Barons has served QuickBooks clients since 2002.',
    },
    {
      label: 'Franchise-aware implementation',
      detail: 'Franchise standards and required editions are confirmed before general recommendations are made.',
      evidence: 'Barons franchise onboarding and support workflows.',
    },
    ...defaultSignals,
  ],
};

export function getTrustSignals(slug: string): readonly TrustSignal[] {
  return trustRegistry[slug] ?? defaultSignals;
}
