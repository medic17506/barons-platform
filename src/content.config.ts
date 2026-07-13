import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const contentStatus = z.enum([
  'idea',
  'research',
  'draft',
  'internal-review',
  'client-review',
  'approved',
  'published',
  'review-due',
  'archived',
]);

const verificationStatus = z.enum([
  'verified',
  'observed',
  'barons-best-practice',
  'pending-verification',
  'historical',
]);

const sourceSchema = z.object({
  label: z.string(),
  sourceType: z.enum([
    'official-documentation',
    'client-interview',
    'team-interview',
    'support-question',
    'internal-record',
    'firsthand-experience',
    'third-party-source',
  ]),
  verificationStatus,
  url: z.string().url().optional(),
  accessedAt: z.string().optional(),
  notes: z.string().optional(),
});

const derivativeSchema = z.object({
  channel: z.enum([
    'article',
    'podcast',
    'youtube',
    'short-video',
    'linkedin',
    'facebook',
    'newsletter',
    'download',
    'speaking',
    'ai-knowledge',
  ]),
  status: contentStatus,
  title: z.string().optional(),
  angle: z.string().optional(),
  assetPath: z.string().optional(),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    type: z.enum([
      'cornerstone-guide',
      'playbook',
      'comparison',
      'faq',
      'legacy-story',
      'success-story',
      'trusted-advisor',
      'local-authority',
    ]),
    title: z.string(),
    eyebrow: z.string().default('Resource'),
    description: z.string(),
    promise: z.string(),
    chaosStatement: z.string(),
    audience: z.array(z.string()).default([]),
    intent: z.array(z.string()).default([]),
    keyTakeaways: z.array(z.string()).default([]),
    author: z.string(),
    reviewer: z.string().optional(),
    status: contentStatus,
    verificationStatus,
    publishedAt: z.string().optional(),
    lastReviewed: z.string(),
    nextReview: z.string().optional(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    schemaType: z.string().default('Article'),
    aiSummary: z.string(),
    answerEngineQuestions: z.array(z.string()).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    relatedPlatforms: z.array(z.string()).default([]),
    relatedIndustries: z.array(z.string()).default([]),
    relatedFranchises: z.array(z.string()).default([]),
    relatedResources: z.array(z.string()).default([]),
    sources: z.array(sourceSchema).default([]),
    derivatives: z.array(derivativeSchema).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resources };
