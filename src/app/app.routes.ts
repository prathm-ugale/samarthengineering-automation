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

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:category',
    component: ProductListComponent
  },
  {
    path: 'products/:category/:product-slug',
    component: ProductDetailComponent
  },
  {
    path: 'solutions',
    component: SolutionListComponent
  },
  {
    path: 'solutions/:solution-slug',
    component: SolutionDetailComponent
  },
  {
    path: 'industries',
    component: IndustryListComponent
  },
  {
    path: 'industries/:industry-slug',
    component: IndustryDetailComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'projects/:project-slug',
    component: ProjectDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
