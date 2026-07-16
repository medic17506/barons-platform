import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { authoritySolutions } from '../data/authority/solutions';
import { cloverProducts } from '../data/cloverProducts';

const staticRoutes = [
  '/',
  '/about/',
  '/accessibility/',
  '/boss-framework/',
  '/contact/',
  '/digievolve-quest/',
  '/franchise-support/',
  '/franchises/',
  '/franchises/hotworx/',
  '/industries/',
  '/industries/construction/',
  '/mobile-gulf-coast/',
  '/platform-partners/intuit/',
  '/platforms/',
  '/platforms/bill360/',
  '/platforms/clover/',
  '/platforms/intuit-enterprise-suite/',
  '/platforms/quickbooks-online/',
  '/platforms/quickbooks-online/simple-start/',
  '/platforms/quickbooks-online/essentials/',
  '/platforms/quickbooks-online/plus/',
  '/platforms/quickbooks-online/advanced/',
  '/privacy/',
  '/resources/',
  '/solutions/',
  '/start/',
  '/support/',
  '/who-we-help/',
];

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = async () => {
  const resources = await getCollection('resources');
  const dynamicRoutes = [
    ...authoritySolutions.filter((solution) => solution.status === 'published').map((solution) => `/solutions/${solution.slug}/`),
    ...cloverProducts.map((product) => `/platforms/clover/${product.slug}/`),
    ...resources.map((resource) => `/resources/${resource.id.replace(/\.md$/, '')}/`),
  ];

  const routes = [...new Set([...staticRoutes, ...dynamicRoutes])].sort();
  const urls = routes.map((route) => `  <url><loc>${escapeXml(new URL(route, site.url).toString())}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
