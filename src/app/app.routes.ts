import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { SolutionListComponent } from './features/solutions/solution-list/solution-list.component';
import { SolutionDetailComponent } from './features/solutions/solution-detail/solution-detail.component';
import { IndustryListComponent } from './features/industries/industry-list/industry-list.component';
import { IndustryDetailComponent } from './features/industries/industry-detail/industry-detail.component';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail.component';
import { AboutComponent } from './features/about/about.component';
import { ResourcesComponent } from './features/resources/resources.component';
import { ContactComponent } from './features/contact/contact.component';
import { PrivacyPolicyComponent } from './features/legal/privacy-policy.component';
import { TermsOfUseComponent } from './features/legal/terms-of-use.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

// Application routing configuration mapping URL paths to page feature components
export const routes: Routes = [
  // Homepage with background video hero, featured products, and quick RFQ
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // All products catalog listing with category filters and search
  {
    path: 'products',
    component: ProductListComponent
  },
  // Products filtered by a specific category slug
  {
    path: 'products/:category',
    component: ProductListComponent
  },
  // Deep-dive product details page with specifications and RFQ trigger
  {
    path: 'products/:category/:product-slug',
    component: ProductDetailComponent
  },
  // Engineering turnkey solutions and SPM machine capabilities listing
  {
    path: 'solutions',
    component: SolutionListComponent
  },
  // Detailed case breakdown for a specific engineering automation solution
  {
    path: 'solutions/:solution-slug',
    component: SolutionDetailComponent
  },
  // Industrial sector solutions overview (Automotive, Pharma, FMCG, etc.)
  {
    path: 'industries',
    component: IndustryListComponent
  },
  // Industry-specific technical automation capabilities and standards
  {
    path: 'industries/:industry-slug',
    component: IndustryDetailComponent
  },
  // Completed customer engineering projects and installations portfolio
  {
    path: 'projects',
    component: ProjectListComponent
  },
  // Detailed project case study with metrics and equipment deployed
  {
    path: 'projects/:project-slug',
    component: ProjectDetailComponent
  },
  // About Samarth Engineering history, MIDC Bhosari facility, and leadership
  {
    path: 'about',
    component: AboutComponent
  },
  // Technical whitepapers, CAD models, and catalog downloads repository
  {
    path: 'resources',
    component: ResourcesComponent
  },
  // Contact page with MIDC Bhosari plant location, maps, and inquiry form
  {
    path: 'contact',
    component: ContactComponent
  },
  // Privacy policy and data protection compliance
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  // Terms and conditions of commercial use
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent
  },
  // Fallback 404 handler redirecting unmatched routes to NotFoundComponent
  {
    path: '**',
    component: NotFoundComponent
  }
];
