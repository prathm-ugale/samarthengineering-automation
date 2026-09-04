import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { SolutionService } from '../../../core/services/solution.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { SeoService } from '../../../core/services/seo.service';
import { AutomationSolution } from '../../../core/models/solution.model';

@Component({
  selector: 'app-solution-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    NgIf,
    BreadcrumbsComponent
  ],
  template: `
    <div class="solution-detail-page" *ngIf="solution">
      <!-- HEADER HERO -->
      <div class="page-header">
        <div class="container">
          <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
          <div class="hero-badge-row">
            <span class="badge badge-amber">{{ solution.outcomeStatement }}</span>
          </div>
          <h1 class="page-title">{{ solution.title }}</h1>
          <p class="page-subtitle">{{ solution.heroHeadline }}</p>
          <div class="hero-cta-row">
            <button (click)="openRfqModal()" class="btn btn-primary btn-lg">Request Solution Proposal</button>
            <a routerLink="/contact" class="btn btn-outline btn-lg">Talk to Lead Engineer</a>
          </div>
        </div>
      </div>

      <div class="container page-content">
        <!-- OVERVIEW & MEDIA SECTION -->
        <div class="solution-overview-grid">
          <div class="overview-img-wrap">
            <img [src]="solution.imageUrl" [alt]="solution.title" class="overview-img" />
          </div>
          <div class="overview-text">
            <h2>Engineering Scope & Architecture</h2>
            <p>{{ solution.shortDescription }}</p>

            <div class="capabilities-box" *ngIf="solution.capabilities && solution.capabilities.length > 0">
              <h3>Key Performance Deliverables:</h3>
              <ul class="features-list">
                <li *ngFor="let c of solution.capabilities">
                  <span class="bullet">&#10004;</span>
                  <span>{{ c }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CHALLENGES VS HOW WE HELP -->
        <div class="section" *ngIf="solution.challenges && solution.challenges.length > 0">
          <div class="section-heading-custom">
            <span class="section-badge">Problem & Solution</span>
            <h2>Overcoming Manufacturing Constraints</h2>
          </div>

          <div class="grid grid-2">
            <div class="challenge-card" *ngFor="let ch of solution.challenges; let idx = index">
              <h4>{{ ch.title }}</h4>
              <p>{{ ch.description }}</p>
              <div class="resolution-sub" *ngIf="solution.howWeHelp && solution.howWeHelp[idx]">
                <strong>Our Engineering Fix:</strong>
                <span>{{ solution.howWeHelp[idx].description }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PROCESS WORKFLOW STEPS -->
        <div class="section" *ngIf="solution.deliveryProcess && solution.deliveryProcess.length > 0">
          <div class="section-heading-custom">
            <span class="section-badge">Implementation Lifecycle</span>
            <h2>Our Structured Execution Methodology</h2>
            <p>From initial feasibility to turnkey site integration, our structured delivery process mitigates risk.</p>
          </div>

          <div class="process-steps-grid">
            <div *ngFor="let step of solution.deliveryProcess" class="step-card">
              <div class="step-header">
                <span class="step-num">Step {{ step.stepNumber }}</span>
                <span class="step-bar"></span>
              </div>
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-desc">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <!-- APPLICATIONS -->
        <div class="section bg-mist-box" *ngIf="solution.applications && solution.applications.length > 0">
          <div class="app-col">
            <h3>Primary Manufacturing Operations & Applications</h3>
            <div class="tags-group" style="margin-top: 16px;">
              <span *ngFor="let app of solution.applications" class="tag-chip tag-teal">{{ app }}</span>
            </div>
          </div>
        </div>

        <!-- FAQS ACCORDION -->
        <div class="section" *ngIf="solution.faqs && solution.faqs.length > 0">
          <div class="section-heading-custom">
            <span class="section-badge">Engineering FAQ</span>
            <h2>Technical & Commercial Questions</h2>
          </div>

          <div class="faq-list">
            <div *ngFor="let faq of solution.faqs; let idx = index" class="faq-item" [class.open]="openFaqIndex === idx">
              <button class="faq-question" (click)="toggleFaq(idx)">
                <span>{{ faq.question }}</span>
                <span class="faq-arrow">{{ openFaqIndex === idx ? '−' : '+' }}</span>
              </button>
              <div class="faq-answer" *ngIf="openFaqIndex === idx">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA SECTION -->
        <div class="solution-bottom-cta">
          <div class="cta-inner">
            <h2>Ready to Deploy {{ solution.title }}?</h2>
            <p>Schedule a technical conference call with our mechanical and automation design team in Pune.</p>
            <div class="cta-actions">
              <button (click)="openRfqModal()" class="btn btn-primary btn-lg">Submit Requirement RFQ</button>
              <a routerLink="/projects" class="btn btn-secondary btn-lg">View Deployed Projects</a>
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
    .hero-badge-row {
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
    .hero-cta-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .solution-overview-grid {
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
    .capabilities-box {
      background: var(--color-mist);
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid var(--color-teal);
    }
    .capabilities-box h3 {
      font-size: 15px;
      color: var(--color-navy);
      margin-bottom: 12px;
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .features-list li {
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
    .challenge-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
    }
    .challenge-card h4 {
      font-size: 16px;
      color: var(--color-navy);
      margin-bottom: 8px;
    }
    .challenge-card p {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin-bottom: 14px;
    }
    .resolution-sub {
      background: var(--color-mist);
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 12px;
    }
    .resolution-sub strong {
      color: var(--color-teal);
      display: block;
      margin-bottom: 2px;
    }
    .resolution-sub span {
      color: var(--color-text);
    }
    .process-steps-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .step-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
    }
    .step-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .step-num {
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 800;
      color: var(--color-teal);
      background: rgba(0, 124, 122, 0.1);
      padding: 4px 10px;
      border-radius: 4px;
    }
    .step-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--color-navy);
      margin-bottom: 8px;
    }
    .step-desc {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin: 0;
    }
    .bg-mist-box {
      background: var(--color-mist);
      padding: 40px;
      border-radius: 12px;
      border: 1px solid var(--color-border);
      margin: 40px 0;
    }
    .tags-group {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .tag-chip {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }
    .tag-teal {
      background: white;
      border: 1px solid var(--color-teal);
      color: var(--color-teal);
    }
    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .faq-item {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      overflow: hidden;
    }
    .faq-question {
      width: 100%;
      text-align: left;
      padding: 16px 20px;
      font-size: 15px;
      font-weight: 700;
      color: var(--color-navy);
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .faq-arrow {
      font-size: 20px;
      color: var(--color-teal);
    }
    .faq-answer {
      padding: 0 20px 16px 20px;
      font-size: 14px;
      color: var(--color-steel);
      line-height: 1.6;
    }
    .solution-bottom-cta {
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
      .solution-overview-grid { grid-template-columns: 1fr; }
      .process-steps-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 600px) {
      .process-steps-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class SolutionDetailComponent implements OnInit {
  solution?: AutomationSolution;
  openFaqIndex: number = 0;
  breadcrumbs: CrumbItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private solutionService: SolutionService,
    private quoteService: QuoteModalService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('solution-slug');
      if (slug) {
        this.loadSolution(slug);
      }
    });
  }

  loadSolution(slug: string): void {
    const s = this.solutionService.getSolutionBySlug(slug);
    if (!s) {
      this.router.navigate(['/solutions']);
      return;
    }

    this.solution = s;
    this.seoService.setTitle(`${s.title}`);
    this.seoService.setMetaData(s.shortDescription);

    this.breadcrumbs = [
      { label: 'Solutions', url: '/solutions' },
      { label: s.title }
    ];
  }

  toggleFaq(idx: number): void {
    this.openFaqIndex = this.openFaqIndex === idx ? -1 : idx;
  }

  openRfqModal(): void {
    if (!this.solution) return;
    this.quoteService.open({
      source: `Solution Detail: ${this.solution.title}`
    });
  }
}
