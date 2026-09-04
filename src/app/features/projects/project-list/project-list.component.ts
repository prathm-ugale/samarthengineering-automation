import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CaseStudyCardComponent } from '../../../shared/components/case-study-card/case-study-card.component';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { CaseStudyService } from '../../../core/services/case-study.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { SeoService } from '../../../core/services/seo.service';
import { CaseStudy } from '../../../core/models/case-study.model';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    NgFor,
    CaseStudyCardComponent,
    BreadcrumbsComponent
  ],
  template: `
    <div class="page-header">
      <div class="container">
        <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        <h1 class="page-title">Engineering Projects & Case Studies</h1>
        <p class="page-subtitle">
          Real-world production outcomes, cycle-time reductions, and ROI metrics achieved through Samarth Engineering's turnkey automation deployments.
        </p>
      </div>
    </div>

    <div class="container page-content">
      <!-- INDUSTRY FILTER PILLS -->
      <div class="filter-pills-row">
        <button
          (click)="filterIndustry('')"
          [class.active]="selectedIndustry === ''"
          class="pill-btn"
        >
          All Sectors ({{ caseStudies.length }})
        </button>
        <button
          *ngFor="let ind of availableIndustries"
          (click)="filterIndustry(ind)"
          [class.active]="selectedIndustry === ind"
          class="pill-btn"
        >
          {{ ind }}
        </button>
      </div>

      <!-- CASE STUDIES GRID -->
      <div class="grid grid-3" style="margin-top: 32px;">
        <app-case-study-card *ngFor="let p of filteredCaseStudies" [project]="p"></app-case-study-card>
      </div>

      <!-- ROI SUMMARY STRIP -->
      <div class="roi-summary-card">
        <div class="roi-item">
          <span class="roi-val">2.8x</span>
          <span class="roi-lbl">Average Throughput Boost</span>
        </div>
        <div class="roi-item">
          <span class="roi-val">&lt; 14 Mo</span>
          <span class="roi-lbl">Typical Capital Payback</span>
        </div>
        <div class="roi-item">
          <span class="roi-val">99.8%</span>
          <span class="roi-lbl">Assembly Yield Quality</span>
        </div>
        <div class="roi-item">
          <span class="roi-val">250+</span>
          <span class="roi-lbl">Deployments Across India</span>
        </div>
      </div>

      <!-- BOTTOM CTA -->
      <div class="projects-cta">
        <h3>Have a Similar Manufacturing Challenge?</h3>
        <p>Our automation design team will analyze your part geometry, line layout, and throughput objectives.</p>
        <button (click)="openRfqModal()" class="btn btn-primary btn-lg">Request Feasibility Study</button>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: var(--color-navy);
      color: white;
      padding: 40px 0;
      margin-bottom: 40px;
    }
    .page-title {
      font-size: 36px;
      font-weight: 800;
      color: white;
      margin-bottom: 12px;
    }
    .page-subtitle {
      font-size: 16px;
      color: #d9e2ec;
      max-width: 800px;
      line-height: 1.6;
      margin: 0;
    }
    .filter-pills-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }
    .pill-btn {
      padding: 8px 18px;
      border-radius: 20px;
      border: 1px solid var(--color-border);
      background: white;
      color: var(--color-steel);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .pill-btn:hover {
      border-color: var(--color-teal);
      color: var(--color-teal);
    }
    .pill-btn.active {
      background: var(--color-teal);
      border-color: var(--color-teal);
      color: white;
    }
    .roi-summary-card {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      background: #102A43;
      color: white;
      padding: 36px;
      border-radius: 12px;
      text-align: center;
    }
    .roi-val {
      display: block;
      font-family: var(--font-mono);
      font-size: 32px;
      font-weight: 800;
      color: var(--color-amber);
      margin-bottom: 6px;
    }
    .roi-lbl {
      font-size: 13px;
      color: #d9e2ec;
    }
    .projects-cta {
      margin-top: 40px;
      background: var(--color-mist);
      border: 1px solid var(--color-border);
      padding: 40px;
      border-radius: 12px;
      text-align: center;
    }
    .projects-cta h3 {
      font-size: 24px;
      color: var(--color-navy);
      margin-bottom: 8px;
    }
    .projects-cta p {
      font-size: 15px;
      color: var(--color-steel);
      max-width: 600px;
      margin: 0 auto 24px;
    }
    @media (max-width: 900px) {
      .roi-summary-card { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 500px) {
      .roi-summary-card { grid-template-columns: 1fr; }
    }
  `]
})
export class ProjectListComponent implements OnInit {
  caseStudies: CaseStudy[] = [];
  filteredCaseStudies: CaseStudy[] = [];
  selectedIndustry: string = '';
  availableIndustries: string[] = ['Automotive', 'Pharmaceutical', 'Electronics', 'Heavy Engineering', 'Warehousing'];
  breadcrumbs: CrumbItem[] = [
    { label: 'Projects' }
  ];

  constructor(
    private caseStudyService: CaseStudyService,
    private quoteService: QuoteModalService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.setTitle('Engineering Projects & Case Studies');
    this.seoService.setMetaData('Documented engineering case studies showing quantifiable throughput, cycle time, and uptime metrics.');
    this.caseStudies = this.caseStudyService.getAllCaseStudies();
    this.filteredCaseStudies = this.caseStudies;
  }

  filterIndustry(ind: string): void {
    this.selectedIndustry = ind;
    if (ind) {
      this.filteredCaseStudies = this.caseStudies.filter(c =>
        c.industry.toLowerCase().includes(ind.toLowerCase())
      );
    } else {
      this.filteredCaseStudies = this.caseStudies;
    }
  }

  openRfqModal(): void {
    this.quoteService.open({
      source: 'Projects Overview Page'
    });
  }
}
