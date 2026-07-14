export interface CloverProduct {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  description: string;
  bestFor: string[];
  capabilities: string[];
  considerations: string[];
  relatedSystems: string[];
  seoTitle: string;
  seoDescription: string;
}

export const cloverProducts: CloverProduct[] = [
  {
    slug: 'go',
    name: 'Clover Go',
    eyebrow: 'Mobile payments',
    headline: 'Take payments wherever the work happens.',
    description: 'Clover Go pairs with a compatible phone or tablet to support mobile card acceptance for businesses that do not need a fixed counter-based point of sale.',
    bestFor: ['Field service teams', 'Mobile vendors and events', 'Small service businesses', 'Backup or occasional payment acceptance'],
    capabilities: ['Pairs with a phone or tablet over Bluetooth', 'Accepts common card and contactless payment types', 'Works over Wi-Fi or cellular connectivity', 'Uses the Clover Go app for mobile transaction management'],
    considerations: ['Confirm device compatibility before ordering', 'Evaluate cellular coverage where payments will be accepted', 'Decide how mobile transactions will sync with accounting and reporting', 'Do not choose a mobile reader when a full POS workflow is actually required'],
    relatedSystems: ['Payments', 'Accounting', 'Customer Management', 'Reporting'],
    seoTitle: 'Clover Go Mobile Card Reader | Barons, Inc.',
    seoDescription: 'Learn where Clover Go fits, who it is best for, and how mobile payments should connect with accounting, reporting, and the rest of your business system.',
  },
  {
    slug: 'flex',
    name: 'Clover Flex',
    eyebrow: 'Portable POS and payments',
    headline: 'Bring the checkout experience to the customer.',
    description: 'Clover Flex is a portable payment and point-of-sale device designed for tableside, curbside, counter, and field use, with Wi-Fi or LTE connectivity and an integrated receipt printer.',
    bestFor: ['Restaurants needing tableside payments', 'Curbside or line-busting workflows', 'Service businesses working away from a counter', 'Retail teams needing a portable checkout option'],
    capabilities: ['Accepts payments away from a fixed register', 'Supports Wi-Fi and LTE connectivity', 'Includes a built-in physical receipt printer', 'Can participate in broader Clover POS and app workflows'],
    considerations: ['Map where staff will use the device and who owns it', 'Review LTE and data-plan requirements', 'Confirm whether inventory and item management live in Clover or another system', 'Design reconciliation before adding multiple portable devices'],
    relatedSystems: ['Payments', 'POS', 'Inventory', 'Accounting'],
    seoTitle: 'Clover Flex Portable POS | Barons, Inc.',
    seoDescription: 'Explore Clover Flex for tableside, curbside, counter, and field payments, including fit, workflow, integration, and implementation considerations.',
  },
  {
    slug: 'mini',
    name: 'Clover Mini',
    eyebrow: 'Compact countertop POS',
    headline: 'Full POS capability without a full-size footprint.',
    description: 'Clover Mini provides compact countertop point-of-sale functionality for businesses that need more than a payment terminal but do not require a large station.',
    bestFor: ['Small retail counters', 'Service desks and reception areas', 'Businesses with limited counter space', 'Locations needing a compact secondary register'],
    capabilities: ['Compact countertop form factor', 'Supports order, payment, customer, and item workflows', 'Can connect with Clover accessories and apps', 'Works within Clover service plans for retail, restaurant, or service use cases'],
    considerations: ['Choose the service plan around the operating workflow', 'Confirm printer, scanner, cash drawer, and accessory needs', 'Define the source of truth for items and inventory', 'Review whether a Mini is sufficient for peak transaction volume'],
    relatedSystems: ['POS', 'Payments', 'Inventory', 'Customer Engagement', 'Accounting'],
    seoTitle: 'Clover Mini Compact POS System | Barons, Inc.',
    seoDescription: 'See how Clover Mini fits compact retail, service, and restaurant environments and what to evaluate before selecting a countertop POS system.',
  },
  {
    slug: 'station',
    name: 'Clover Station Solo or Duo',
    eyebrow: 'Full-size point of sale',
    headline: 'Build the primary checkout around the way your business operates.',
    description: 'Clover Station Solo and Station Duo are full-size point-of-sale configurations for businesses that need a central register, integrated receipt printing, and broader operational capabilities.',
    bestFor: ['Higher-volume retail locations', 'Counter-service and table-service restaurants', 'Businesses needing a primary register', 'Locations that benefit from a customer-facing display'],
    capabilities: ['Full-size merchant display and integrated receipt printer', 'Station Duo adds a customer-facing screen', 'Supports Clover retail, restaurant, and service plans', 'Connects with accessories, apps, online ordering, customer, and employee tools'],
    considerations: ['Choose Solo versus Duo based on the customer interaction', 'Map permissions, shifts, drawers, tips, returns, and discounts', 'Plan kitchen, printer, scanner, and display requirements', 'Confirm how sales, fees, deposits, inventory, and payroll data reach accounting'],
    relatedSystems: ['POS', 'Payments', 'Inventory', 'Employees', 'Customer Engagement', 'Accounting'],
    seoTitle: 'Clover Station Solo vs Duo POS | Barons, Inc.',
    seoDescription: 'Compare where Clover Station Solo and Duo fit and evaluate customer displays, hardware, workflows, integrations, accounting, and total operating needs.',
  },
  {
    slug: 'kiosk',
    name: 'Clover Kiosk',
    eyebrow: 'Self-service ordering',
    headline: 'Let customers place orders without disconnecting the operation.',
    description: 'Clover Kiosk supports customer self-service ordering in applicable restaurant environments while connecting orders and payments with the broader Clover workflow.',
    bestFor: ['Quick-service restaurants', 'Counter-service restaurants', 'High-volume ordering environments', 'Businesses seeking to reduce ordering bottlenecks'],
    capabilities: ['Customer self-service ordering and payment', 'Can connect with Clover restaurant workflows', 'Supports menu and order-routing processes', 'Wheelchair-accessible floor-stand options are available through Clover'],
    considerations: ['Accessibility must be designed into placement and configuration', 'Menu design and modifiers must work well without staff assistance', 'Kitchen routing and exception handling must be tested', 'A kiosk should improve the customer journey—not simply reduce labor'],
    relatedSystems: ['POS', 'Payments', 'Kitchen Operations', 'Inventory', 'Customer Experience', 'Accounting'],
    seoTitle: 'Clover Kiosk Self-Service Ordering | Barons, Inc.',
    seoDescription: 'Evaluate Clover Kiosk for self-service restaurant ordering, including accessibility, menu design, kitchen routing, payments, and accounting integration.',
  },
];

export function getCloverProduct(slug: string): CloverProduct | undefined {
  return cloverProducts.find((product) => product.slug === slug);
}
