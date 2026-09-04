import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { CaseStudyCardComponent } from '../../../shared/components/case-study-card/case-study-card.component';
import { CaseStudyService } from '../../../core/services/case-study.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { SeoService } from '../../../core/services/seo.service';
import { CaseStudy } from '../../../core/models/case-study.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    BreadcrumbsComponent,
    CaseStudyCardComponent
  ],
  template: `
    <div class="project-detail-page" *ngIf="project">
      <!-- HEADER HERO -->
      <div class="page-header">
        <div class="container">
          <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
          <div class="meta-row">
            <span class="badge badge-amber">{{ project.industry }}</span>
            <span class="location-badge">{{ project.clientPlaceholder || project.client }}</span>
          </div>
          <h1 class="page-title">{{ project.title }}</h1>
          <p class="page-subtitle">{{ project.overview || project.summary }}</p>
        </div>
      </div>

      <div class="container page-content">
        <!-- QUANTIFIABLE METRICS GRID -->
        <div class="metrics-hero-card" *ngIf="(project.results && project.results.length > 0) || (project.metrics && project.metrics.length > 0)">
          <div *ngFor="let m of (project.results || project.metrics)" class="metric-block">
            <span class="metric-number">{{ m.value }}</span>
            <strong class="metric-title">{{ m.label }}</strong>
          </div>
        </div>

        <!-- MAIN CONTENT LAYOUT -->
        <div class="project-body-grid">
          <div class="project-narrative">
            <div class="narrative-section">
              <span class="section-tag">01. The Problem</span>
              <h2>Operational Challenge & Bottlenecks</h2>
              <p>{{ project.challenge }}</p>
            </div>

            <div class="narrative-section">
              <span class="section-tag">02. The Engineering</span>
              <h2>Custom System Architecture & Automation Solution</h2>
              <p>{{ project.solution }}</p>
            </div>

            <div class="narrative-section" *ngIf="project.engineeringApproach && project.engineeringApproach.length > 0">
              <span class="section-tag">03. Key Engineering Highlights</span>
              <h2>Approach & Implementation</h2>
              <ul class="approach-list">
                <li *ngFor="let app of project.engineeringApproach">
                  <span class="chk">&#10004;</span>
                  <span>{{ app }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- SIDEBAR SPECS -->
          <aside class="project-sidebar">
            <div class="sidebar-box">
              <img [src]="project.imageUrl" [alt]="project.title" class="sidebar-img" />
              <div class="tech-stack-list" *ngIf="project.productsUsed && project.productsUsed.length > 0">
                <h4>Components & Technologies Integrated</h4>
                <div class="tag-chips-wrap">
                  <span *ngFor="let tech of project.productsUsed" class="tech-chip">{{ tech }}</span>
                </div>
              </div>
            </div>

            <div class="sidebar-box rfq-box">
              <h4>Require a Similar Solution?</h4>
              <p>Speak with the engineering team that delivered this project.</p>
              <button (click)="openRfqModal()" class="btn btn-primary w-100">Discuss Your Line Requirements</button>
            </div>
          </aside>
        </div>

        <!-- OTHER CASE STUDIES -->
        <div class="section" *ngIf="otherProjects.length > 0">
          <h2 class="section-title">Explore Other Automation Case Studies</h2>
          <div class="grid grid-3" style="margin-top: 24px;">
            <app-case-study-card *ngFor="let op of otherProjects" [project]="op"></app-case-study-card>
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
    .meta-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 14px;
    }
    .location-badge {
      font-size: 13px;
      color: #9fb3c8;
    }
    .page-title {
      font-size: 34px;
      font-weight: 800;
      color: white;
      margin-bottom: 14px;
      line-height: 1.2;
    }
    .page-subtitle {
      font-size: 16px;
      color: #d9e2ec;
      max-width: 800px;
      line-height: 1.6;
      margin: 0;
    }
    .metrics-hero-card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
      box-shadow: var(--shadow-sm);
      margin-bottom: 48px;
    }
    .metric-block {
      text-align: center;
      padding: 12px;
      border-right: 1px solid var(--color-border);
    }
    .metric-block:last-child {
      border-right: none;
    }
    .metric-number {
      display: block;
      font-family: var(--font-mono);
      font-size: 32px;
      font-weight: 800;
      color: var(--color-teal);
      margin-bottom: 4px;
    }
    .metric-title {
      display: block;
      font-size: 14px;
      color: var(--color-navy);
    }
    .project-body-grid {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 48px;
      margin-bottom: 60px;
    }
    .narrative-section {
      margin-bottom: 40px;
    }
    .section-tag {
      font-family: var(--font-mono);
      font-size: 12px;
      font-weight: 700;
      color: var(--color-teal);
      text-transform: uppercase;
      letter-spacing: 1px;
      display: block;
      margin-bottom: 6px;
    }
    .narrative-section h2 {
      font-size: 22px;
      font-weight: 800;
      color: var(--color-navy);
      margin-bottom: 12px;
    }
    .narrative-section p {
      font-size: 15px;
      line-height: 1.65;
      color: var(--color-text);
    }
    .approach-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .approach-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 14px;
      color: var(--color-text);
    }
    .chk {
      color: var(--color-teal);
      font-weight: bold;
    }
    .project-sidebar {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .sidebar-box {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 20px;
      overflow: hidden;
    }
    .sidebar-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .tech-stack-list h4 {
      font-size: 14px;
      color: var(--color-navy);
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .tag-chips-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .tech-chip {
      background: var(--color-mist);
      border: 1px solid var(--color-border);
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-family: var(--font-mono);
      color: var(--color-navy);
    }
    .rfq-box {
      background: #f0f7ff;
      border-color: #bfdbfe;
    }
    .rfq-box h4 {
      font-size: 16px;
      color: var(--color-navy);
      margin-bottom: 8px;
    }
    .rfq-box p {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.4;
      margin-bottom: 16px;
    }
    @media (max-width: 900px) {
      .project-body-grid { grid-template-columns: 1fr; }
      .metrics-hero-card { grid-template-columns: 1fr 1fr; }
      .metric-block { border-right: none; }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project?: CaseStudy;
  otherProjects: CaseStudy[] = [];
  breadcrumbs: CrumbItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private caseStudyService: CaseStudyService,
    private quoteService: QuoteModalService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('project-slug');
      if (slug) {
        this.loadProject(slug);
      }
    });
  }

  loadProject(slug: string): void {
    const p = this.caseStudyService.getCaseStudyBySlug(slug);
    if (!p) {
      this.router.navigate(['/projects']);
      return;
    }

    this.project = p;
    this.seoService.setTitle(`${p.title}`);
    this.seoService.setMetaData(p.overview || p.summary);

    this.breadcrumbs = [
      { label: 'Projects', url: '/projects' },
      { label: p.title }
    ];

    this.otherProjects = this.caseStudyService.getAllCaseStudies().filter(c => c.id !== p.id).slice(0, 3);
  }

  openRfqModal(): void {
    if (!this.project) return;
    this.quoteService.open({
      source: `Case Study: ${this.project.title}`
    });
  }
}
