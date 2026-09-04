const fs = require('fs');
const path = require('path');

function save(relPath, content) {
  const f = path.resolve(relPath);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content.trim() + '\n', 'utf8');
  console.log('Saved: ' + relPath);
}

// 1. global styles
save('src/styles.scss', `/*=====================================================================
   Samarth Engineering — Industrial Design Tokens & Global Styles
   ===================================================================== */

:root {
  /* Brand Color System */
  --color-navy: #102A43;
  --color-navy-dark: #091a2b;
  --color-navy-light: #1e3e5e;
  --color-navy-rgb: 16, 42, 67;

  --color-teal: #007C7A;
  --color-teal-hover: #006160;
  --color-teal-light: #E6F4F4;
  --color-teal-rgb: 0, 124, 122;

  --color-amber: #F5A524;
  --color-amber-hover: #DC8E14;
  --color-amber-light: #FEF6EA;
  --color-amber-rgb: 245, 165, 36;

  --color-steel: #52606D;
  --color-steel-light: #9AA5B1;
  --color-steel-border: #E4E7EB;
  --color-steel-bg: #F0F4F8;

  --color-mist: #F5F7FA;
  --color-surface: #FFFFFF;
  --color-surface-hover: #F8FAFC;
  --color-text: #111827;
  --color-text-muted: #627D98;
  --color-danger: #D32F2F;
  --color-success: #2E7D32;

  /* Typography */
  --font-heading: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'IBM Plex Mono', SFMenlo-Regular, Menlo, Monaco, Consolas, monospace;

  /* Spacing & Layout */
  --container-max-width: 1320px;
  --header-height: 80px;
  --utility-bar-height: 38px;

  /* Border Radii */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(16, 42, 67, 0.08);
  --shadow-md: 0 4px 14px rgba(16, 42, 67, 0.08), 0 1px 3px rgba(16, 42, 67, 0.04);
  --shadow-lg: 0 10px 28px rgba(16, 42, 67, 0.12), 0 3px 8px rgba(16, 42, 67, 0.06);
  --shadow-xl: 0 20px 40px rgba(16, 42, 67, 0.16);
  --shadow-teal: 0 6px 20px rgba(0, 124, 122, 0.25);
  --shadow-amber: 0 6px 20px rgba(245, 165, 36, 0.25);

  /* Transitions */
  --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-smooth: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-mist);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--color-navy);
  font-weight: 700;
  line-height: 1.25;
}

h1 { font-size: clamp(32px, 3.8vw, 54px); letter-spacing: -0.02em; }
h2 { font-size: clamp(24px, 2.8vw, 38px); letter-spacing: -0.015em; }
h3 { font-size: clamp(19px, 1.8vw, 24px); }
h4 { font-size: 18px; }

p {
  color: var(--color-steel);
  margin-bottom: 1rem;
}
p:last-child { margin-bottom: 0; }

a {
  color: var(--color-teal);
  text-decoration: none;
  transition: color var(--transition-fast);
}
a:hover {
  color: var(--color-teal-hover);
}

img { max-width: 100%; height: auto; display: block; }
ul, ol { list-style: none; }
button, input, select, textarea { font-family: inherit; font-size: inherit; color: inherit; }

:focus-visible {
  outline: 2px solid var(--color-teal);
  outline-offset: 3px;
}

.skip-link {
  position: absolute;
  top: -60px;
  left: 20px;
  background: var(--color-teal);
  color: #fff;
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  z-index: 99999;
  font-weight: 600;
  transition: top var(--transition-fast);
}
.skip-link:focus { top: 15px; }

.main-content {
  flex: 1 0 iuto;
}

.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.container-narrow {
  width: 100%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.section { padding: 5.5rem 0; }
.section-sm { padding: 3.5rem 0; }
.section-lg { padding: 7rem 0; }

.bg-white { background-color: var(--color-surface); }
.bg-mist { background-color: var(--color-mist); }
.bg-navy { background-color: var(--color-navy); color: #FFFFFF; }
.bg-navy h1, .bg-navy h2, .bg-navy h3, .bg-navy h4 { color: #FFFFFF; }
.bg-navy p { color: #BCCCDC; }

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  min-height: 46px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.btn-primary {
  background-color: var(--color-teal);
  color: #FFFFFF;
  border-color: var(--color-teal);
}
.btn-primary:hover {
  background-color: var(--color-teal-hover);
  border-color: var(--color-teal-hover);
  color: #FFFFFF;
  box-shadow: var(--shadow-teal);
}

.btn-secondary {
  background-color: var(--color-navy);
  color: #FFFFFF;
  border-color: var(--color-navy);
}
.btn-secondary:hover {
  background-color: var(--color-navy-dark);
  border-color: var(--color-navy-dark);
  color: #FFFFFF;
}

.btn-outline {
  background-color: transparent;
  color: var(--color-navy);
  border-color: var(--color-steel-border);
}
.btn-outline:hover {
  background-color: var(--color-surface);
  border-color: var(--color-navy);
  color: var(--color-navy);
}

.btn-outline-white {
  background-color: transparent;
  color: #FFFFFF;
  border-color: rgba(255, 255, 255, 0.5);
}
.btn-outline-white:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: #FFFFFF;
  color: #FFFFFF;
}

.btn-amber {
  background-color: var(--color-amber);
  color: var(--color-navy);
  border-color: var(--color-amber);
  font-weight: 700;
}
.btn-amber:hover {
  background-color: var(--color-amber-hover);
  border-color: var(--color-amber-hover);
  box-shadow: var(--shadow-amber);
}

.btn-sm { padding: 0.45rem 0.9rem; min-height: 36px; font-size: 0.85rem; }
.btn-lg { padding: 0.9rem 2.25rem; min-height: 52px; font-size: 1.05rem; }

/* Badges & Tags */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-xs);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.badge-teal { background-color: var(--color-teal-light); color: var(--color-teal); }
.badge-amber { background-color: var(--color-amber-light); color: #B46C00; }
.badge-navy { background-color: rgba(16, 42, 67, 0.1); color: var(--color-navy); }
.badge-steel { background-color: var(--color-steel-bg); color: var(--color-steel); }

.tag-mono {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  background-color: var(--color-mist);
  border: 1px solid var(--color-steel-border);
  border-radius: var(--radius-xs);
  color: var(--color-steel);
}

/* Cards */
.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-steel-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  transition: transform var(--transition-base), box-shadow var(--transition-base), border-color var(--transition-base);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(0, 124, 122, 0.3);
}

/* Forms */
.form-group { margin-bottom: 1.25rem; }
.form-label {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 0.4rem;
}
.form-label .required { color: var(--color-danger); }

.form-control {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-steel-border);
  border-radius: var(--radius-sm);
  background-color: var(--color-surface);
  color: var(--color-text);
  font-size: 0.95rem;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}
.form-control:focus {
  outline: none;
  border-color: var(--color-teal);
  box-shadow: 0 0 0 3px rgba(0, 124, 122, 0.15);
}
.form-control.is-invalid {
  border-color: var(--color-danger);
  background-color: #FFF5F5;
}
.form-error {
  display: block;
  font-size: 0.80m;
  color: var(--color-danger);
  margin-top: 0.3rem;
}

/* Breadcrumbs */
.breadcrumb-trail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-steel);
  padding: 1.25rem 0;
  flex-wrap: wrap;
}
.breadcrumb-trail a { color: var(--color-steel); }
.breadcrumb-trail a:hover { color: var(--color-teal); }
.breadcrumb-separator { color: var(--color-steel-light); }
.breadcrumb-current { color: var(--color-navy); font-weight: 600; }

/* Grids */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }

/* Micro Animation */
.animate-fadein {
  animation: fadeIn 0.4s ease-in-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive */
@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
  .section { padding: 3.5rem 0; }
  .section-lg { padding: 4.5rem 0; }
}
`);

// 2. MODELS
save('src/app/core/models/category.model.ts', `export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  productCount: number;
  highlightBullets: string[];
  imageUrl: string;
}
`);

save('src/app/core/models/product.model.ts', `export interface ProductSpec {
  name: string;
  value: string;
  category?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  sku: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: ProductSpec[];
  applications: string[];
  brand: string;
  tags: string[];
  inStock: boolean;
  datasheetUrl?: string;
  imageUrl: string;
  gallery: string[];
  relatedProductIds: string[];
  featured?: boolean;
}
`i;

save('src/app/core/models/solution.model.ts', `export interface SolutionProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface AutomationSolution {
  id: string;
  slug: string;
  title: string;
  heroHeadline: string;
  shortDescription: string;
  outcomeStatement: string;
  icon: string;
  challenges: { title: string; description: string }[];
  howWeHelp: { title: string; description: string }[];
  capabilities: string[];
  applications: string[];
  deliveryProcess: SolutionProcessStep[];
  relatedCategorySlugs: string[];
  faqs: SolutionFaq[];
  imageUrl: string;
  featured?: boolean;
}
`);

save('src/app/core/models/industry.model.ts', `export interface IndustryApplication {
  title: string;
  description: string;
  impactMetric?: string;
}

export interface IndustryVertical {
  id: string;
  slug: string;
  name: string;
  icon: string;
  shortDescription: string;
  heroHeadline: string;
  heroDescription: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  recommendedCategorySlugs: string[];
  exampleApplications: IndustryApplication[];
  imageUrl: string;
}
`);

save('src/app/core/models/case-study.model.ts', `export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  clientPlaceholder: string;
  challenge: string;
  solution: string;
  productsUsed: string[];
  results: CaseStudyMetric[];
  overview: string;
  engineeringApproach: string[];
  imageUrl: string;
  featured?: boolean;
}
`i;

save('src/app/core/models/resource.model.ts', `export type ResourceType = 'Catalogue' | 'Datasheet' | 'Application Guide' | 'Technical Article';

export interface IndustrialResource {
  id: string;
  title: string;
  type: ResourceType;
  category: string;
  format: 'PDF' | 'ZIP' | 'DOC';
  size: string;
  description: string;
  downloadUrl: string;
  dateAdded: string;
}
`);

save('src/app/core/models/quote.model.ts', `export interface QuoteRequest {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  city: string;
  productOrSolution: string;
  sku?: string;
  requirement: string;
  attachmentFileName?: string;
  consent: boolean;
}
`);

console.log('Step 1 completed!');
