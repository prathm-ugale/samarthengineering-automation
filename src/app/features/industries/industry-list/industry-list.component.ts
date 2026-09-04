import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { IndustryCardComponent } from '../../../shared/components/industry-card/industry-card.component';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { IndustryService } from '../../../core/services/industry.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { SeoService } from '../../../core/services/seo.service';
import { IndustryVertical } from '../../../core/models/industry.model';

@Component({
  selector: 'app-industry-list',
  standalone: true,
  imports: [
    NgFor,
    IndustryCardComponent,
    BreadcrumbsComponent
  ],
  template: `
    <div class="page-header">
      <div class="container">
        <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        <h1 class="page-title">Industry Automation Verticals</h1>
        <p class="page-subtitle">
          Samarth Engineering provides specialized automation machinery, robotic material handling, and certified components engineered for demanding industrial production lines across India.
        </p>
      </div>
    </div>

    <div class="container page-content">
      <!-- VERTICALS GRID -->
      <div class="grid grid-3">
        <app-industry-card *ngFor="let ind of industries" [industry]="ind"></app-industry-card>
      </div>

      <!-- COMPLIANCE & VALIDATION STRIP -->
      <div class="compliance-banner">
        <div class="comp-item">
          <div class="comp-icon">&#128220;</div>
          <div class="comp-text">
            <strong>Automotive Standards</strong>
            <span>Compliant with IATF 16949 lines and high-cadence assembly protocols.</span>
          </div>
        </div>
        <div class="comp-item">
          <div class="comp-icon">&#128300;</div>
          <div class="comp-text">
            <strong>Pharma Cleanroom Grade</strong>
            <span>SS316L contact parts, FDA-approved lubricants, and 21 CFR Part 11 ready controls.</span>
          </div>
        </div>
        <div class="comp-item">
          <div class="comp-icon">&#9889;</div>
          <div class="comp-text">
            <strong>Electronics & EV Battery</strong>
            <span>ESD-safe grippers, clean assembly chambers, and precision cell balancing systems.</span>
          </div>
        </div>
      </div>

      <!-- BOTTOM BANNER -->
      <div class="industry-rfq-banner">
        <div class="text-content">
          <h3>Need an Industry-Specific Automation Audit?</h3>
          <p>Our application engineering team will review your production line cycle times, quality checkpoints, and component sizing requirements.</p>
        </div>
        <div class="action-btn">
          <button (click)="openRfqModal()" class="btn btn-primary btn-lg">Request Sector Consultation</button>
        </div>
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
    .compliance-banner {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
      box-shadow: var(--shadow-sm);
    }
    .comp-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .comp-icon {
      font-size: 28px;
    }
    .comp-text strong {
      display: block;
      font-size: 15px;
      color: var(--color-navy);
      margin-bottom: 4px;
    }
    .comp-text span {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.4;
    }
    .industry-rfq-banner {
      margin-top: 40px;
      background: linear-gradient(135deg, var(--color-teal) 0%, #005857 100%);
      color: white;
      padding: 40px;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
    }
    .text-content h3 {
      font-size: 24px;
      color: white;
      margin-bottom: 8px;
    }
    .text-content p {
      font-size: 14px;
      color: #e0f2f1;
      margin: 0;
      max-width: 600px;
    }
    @media (max-width: 900px) {
      .compliance-banner {
        grid-template-columns: 1fr;
      }
      .industry-rfq-banner {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class IndustryListComponent implements OnInit {
  industries: IndustryVertical[] = [];
  breadcrumbs: CrumbItem[] = [
    { label: 'Industries' }
  ];

  constructor(
    private industryService: IndustryService,
    private quoteService: QuoteModalService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.setTitle('Industry Automation Solutions');
    this.seoService.setMetaData('Specialized factory automation and component packages for Automotive, EV, Pharma, FMCG, Electronics, and Heavy Engineering.');
    this.industries = this.industryService.getAllIndustries();
  }

  openRfqModal(): void {
    this.quoteService.open({
      source: 'Industries Overview Page'
    });
  }
}
