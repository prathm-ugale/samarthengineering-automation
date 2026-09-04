import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { CaseStudyCardComponent } from '../../../shared/components/case-study-card/case-study-card.component';
import { IndustryService } from '../../../core/services/industry.service';
import { ProductService } from '../../../core/services/product.service';
import { CaseStudyService } from '../../../core/services/case-study.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { SeoService } from '../../../core/services/seo.service';
import { IndustryVertical } from '../../../core/models/industry.model';
import { Product } from '../../../core/models/product.model';
import { CaseStudy } from '../../../core/models/case-study.model';

@Component({
  selector: 'app-industry-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    NgIf,
    BreadcrumbsComponent,
    ProductCardComponent,
    CaseStudyCardComponent
  ],
  template: `
    <div class="industry-detail-page" *ngIf="industry">
      <!-- HEADER HERO -->
      <div class="page-header">
        <div class="container">
          <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
          <div class="hero-badge">
            <span class="badge badge-amber">Sector Focus</span>
          </div>
          <h1 class="page-title">{{ industry.name }} Automation Solutions</h1>
          <p class="page-subtitle">{{ industry.heroHeadline }}</p>
          <div class="hero-actions">
            <button (click)="openRfqModal()" class="btn btn-primary btn-lg">Request {{ industry.name }} Solution Brief</button>
            <a routerLink="/contact" class="btn btn-outline btn-lg">Consult Industry Specialist</a>
          </div>
        </div>
      </div>

      <div class="container page-content">
        <!-- OVERVIEW & MEDIA SECTION -->
        <div class="industry-overview-grid">
          <div class="overview-img-wrap">
            <img [src]="industry.imageUrl" [alt]="industry.name" class="overview-img" />
          </div>
          <div class="overview-text">
            <h2>Engineering Challenges Solved in {{ industry.name }}</h2>
            <p>{{ industry.heroDescription }}</p>

            <div class="standards-box" *ngIf="industry.challenges && industry.challenges.length > 0">
              <h3>Core Sector Challenges:</h3>
              <ul class="standards-list">
                <li *ngFor="let ch of industry.challenges">
                  <span class="bullet">&#10004;</span>
                  <span><strong>{{ ch.title }}:</strong> {{ ch.description }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- APPLICATIONS CARDS -->
        <div class="section" *ngIf="industry.exampleApplications && industry.exampleApplications.length > 0">
          <div class="section-heading-custom">
            <span class="section-badge">Tailored Capabilities</span>
            <h2>Proven Automation Applications in {{ industry.name }}</h2>
            <p>Purpose-built machinery and sub-assemblies deployed on high-volume production lines.</p>
          </div>

          <div class="apps-cards-grid">
            <div *ngFor="let app of industry.exampleApplications" class="app-detail-card">
              <h3 class="app-title">{{ app.title }}</h3>
              <p class="app-desc">{{ app.description }}</p>
              <div class="benefits-list" *ngIf="app.impactMetric">
                <strong>Target Impact:</strong>
                <span class="metric-highlight">{{ app.impactMetric }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RECOMMENDED PRODUCTS FOR THIS SECTOR -->
        <div class="section bg-mist-box" *ngIf="recommendedProducts.length > 0">
          <div class="section-heading-custom">
            <span class="section-badge">Matched Components</span>
            <h2>Recommended Hardware for {{ industry.name }}</h2>
            <p>Pre-validated linear guides, actuators, and servo systems ready for integration.</p>
          </div>

          <div class="grid grid-4">
            <app-product-card *ngFor="let p of recommendedProducts" [product]="p"></app-product-card>
          </div>
        </div>

        <!-- SECTOR CASE STUDIES -->
        <div class="section" *ngIf="sectorCaseStudies.length > 0">
          <div class="section-heading-custom">
            <span class="section-badge">Deployment Track Record</span>
            <h2>Relevant Case Studies in {{ industry.name }}</h2>
          </div>

          <div class="grid grid-3">
            <app-case-study-card *ngFor="let cs of sectorCaseStudies" [project]="cs"></app-case-study-card>
          </div>
        </div>

        <!-- BOTTOM CTA -->
        <div class="industry-bottom-cta">
          <div class="cta-inner">
            <h2>Accelerate Your {{ industry.name }} Facility Automation</h2>
            <p>Get in touch with our application specialists for a detailed line audit and component selection proposal.</p>
            <div class="cta-actions">
              <button (click)="openRfqModal()" class="btn btn-primary btn-lg">Request Sector RFQ</button>
              <a routerLink="/contact" class="btn btn-secondary btn-lg">Book Engineering Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #102A43 0%, #0b1d2a 100%);
      color: white;
      padding: 50px 0;
      margin-bottom: 40px;
    }
    .hero-badge {
      margin-bottom: 12px;
    }
    .page-title {
      font-size: 36px;
      font-weight: 800;
      color: white;
      margin-bottom: 16px;
    }
    .page-subtitle {
      font-size: 16px;
      color: #d9e2ec;
      max-width: 800px;
      line-height: 1.6;
      margin-bottom: 28px;
    }
    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .industry-overview-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 48px;
      align-items: center;
      margin-bottom: 60px;
    }
    .overview-img-wrap {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      height: 360px;
    }
    .overview-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .overview-text h2 {
      font-size: 26px;
      font-weight: 800;
      color: var(--color-navy);
      margin-bottom: 16px;
    }
    .overview-text p {
      font-size: 15px;
      line-height: 1.6;
      color: var(--color-text);
      margin-bottom: 24px;
    }
    .standards-box {
      background: var(--color-mist);
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid var(--color-teal);
    }
    .standards-box h3 {
      font-size: 15px;
      color: var(--color-navy);
      margin-bottom: 12px;
    }
    .standards-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .standards-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 13px;
      color: var(--color-text);
    }
    .bullet {
      color: var(--color-teal);
      font-weight: bold;
    }
    .section-heading-custom {
      margin-bottom: 36px;
    }
    .section-heading-custom h2 {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-navy);
      margin: 8px 0;
    }
    .section-heading-custom p {
      font-size: 15px;
      color: var(--color-steel);
      margin: 0;
    }
    .apps-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .app-detail-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
    }
    .app-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--color-navy);
      margin-bottom: 10px;
    }
    .app-desc {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin-bottom: 16px;
    }
    .benefits-list {
      margin-top: auto;
      border-top: 1px dashed var(--color-border);
      padding-top: 12px;
    }
    .benefits-list strong {
      font-size: 12px;
      color: var(--color-navy);
      display: block;
      margin-bottom: 4px;
    }
    .metric-highlight {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      color: var(--color-teal);
      background: rgba(0, 124, 122, 0.1);
      padding: 2px 8px;
      border-radius: 4px;
      display: inline-block;
    }
    .bg-mist-box {
      background: var(--color-mist);
      padding: 40px;
      border-radius: 12px;
      border: 1px solid var(--color-border);
    }
    .industry-bottom-cta {
      margin-top: 60px;
      background: linear-gradient(135deg, var(--color-teal) 0%, #005857 100%);
      color: white;
      padding: 50px;
      border-radius: 12px;
      text-align: center;
    }
    .cta-inner h2 {
      font-size: 28px;
      font-weight: 800;
      color: white;
      margin-bottom: 12px;
    }
    .cta-inner p {
      font-size: 15px;
      color: #e0f2f1;
      max-width: 600px;
      margin: 0 auto 28px;
    }
    .cta-actions {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    @media (max-width: 900px) {
      .industry-overview-grid { grid-template-columns: 1fr; }
      .apps-cards-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class IndustryDetailComponent implements OnInit {
  industry?: IndustryVertical;
  recommendedProducts: Product[] = [];
  sectorCaseStudies: CaseStudy[] = [];
  breadcrumbs: CrumbItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private industryService: IndustryService,
    private productService: ProductService,
    private caseStudyService: CaseStudyService,
    private quoteService: QuoteModalService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('industry-slug');
      if (slug) {
        this.loadIndustry(slug);
      }
    });
  }

  loadIndustry(slug: string): void {
    const ind = this.industryService.getIndustryBySlug(slug);
    if (!ind) {
      this.router.navigate(['/industries']);
      return;
    }

    this.industry = ind;
    this.seoService.setTitle(`${ind.name} Automation Solutions`);
    this.seoService.setMetaData(ind.shortDescription);

    this.breadcrumbs = [
      { label: 'Industries', url: '/industries' },
      { label: ind.name }
    ];

    // Find products matching this industry
    const allProducts = this.productService.getAllProducts();
    this.recommendedProducts = allProducts.filter(p =>
      p.tags.some(i => i.toLowerCase().includes(ind.name.toLowerCase().split(' ')[0])) ||
      p.applications.some(i => i.toLowerCase().includes(ind.name.toLowerCase().split(' ')[0]))
    ).slice(0, 4);

    if (this.recommendedProducts.length === 0) {
      this.recommendedProducts = allProducts.slice(0, 4);
    }

    // Find case studies matching this industry
    const allCaseStudies = this.caseStudyService.getAllCaseStudies();
    this.sectorCaseStudies = allCaseStudies.filter(cs =>
      cs.industry.toLowerCase().includes(ind.name.toLowerCase().split(' ')[0])
    );
    if (this.sectorCaseStudies.length === 0) {
      this.sectorCaseStudies = allCaseStudies.slice(0, 2);
    }
  }

  openRfqModal(): void {
    if (!this.industry) return;
    this.quoteService.open({
      source: `Industry Detail: ${this.industry.name}`
    });
  }
}
