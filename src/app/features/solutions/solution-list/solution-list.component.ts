import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SolutionCardComponent } from '../../../shared/components/solution-card/solution-card.component';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { SolutionService } from '../../../core/services/solution.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { SeoService } from '../../../core/services/seo.service';
import { AutomationSolution } from '../../../core/models/solution.model';

@Component({
  selector: 'app-solution-list',
  standalone: true,
  imports: [
    NgFor,
    SolutionCardComponent,
    BreadcrumbsComponent
  ],
  template: `
    <div class="page-header">
      <div class="container">
        <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        <h1 class="page-title">Turnkey Automation & Custom SPM Solutions</h1>
        <p class="page-subtitle">
          From concept design in SolidWorks to commissioning on your factory floor, Samarth Engineering builds reliable, high-yield automation systems and robotic workcells.
        </p>
      </div>
    </div>

    <div class="container page-content">
      <!-- SOLUTIONS INTRO STRIP -->
      <div class="engineering-pillars-banner">
        <div class="pillar">
          <div class="pill-num">01</div>
          <div class="pill-body">
            <h4>Concept & Simulation</h4>
            <p>Cycle-time calculation, 3D kinematic modeling, and mechanical FEA.</p>
          </div>
        </div>
        <div class="pillar">
          <div class="pill-num">02</div>
          <div class="pill-body">
            <h4>Precision Manufacturing</h4>
            <p>CNC machined frames, hardened tooling, and premium branded components.</p>
          </div>
        </div>
        <div class="pillar">
          <div class="pill-num">03</div>
          <div class="pill-body">
            <h4>Controls & Commissioning</h4>
            <p>PLC, SCADA, robot programming with rigorous FAT/SAT acceptance protocols.</p>
          </div>
        </div>
      </div>

      <!-- SOLUTIONS GRID -->
      <div class="grid grid-3" style="margin-top: 40px;">
        <app-solution-card *ngFor="let s of solutions" [solution]="s"></app-solution-card>
      </div>

      <!-- BOTTOM BANNER -->
      <div class="custom-rfq-banner">
        <div class="rfq-text">
          <h3>Need a Custom Automation Machine (SPM)?</h3>
          <p>Share your component drawing, cycle-time target, and factory floor constraints with our Pune engineering team.</p>
        </div>
        <div class="rfq-action">
          <button (click)="openRfqModal()" class="btn btn-primary btn-lg">Submit Automation Requirement</button>
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
    .engineering-pillars-banner {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px 32px;
      box-shadow: var(--shadow-sm);
    }
    .pillar {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
    .pill-num {
      font-family: var(--font-mono);
      font-size: 24px;
      font-weight: 800;
      color: var(--color-teal);
      background: rgba(0, 124, 122, 0.1);
      padding: 6px 12px;
      border-radius: 8px;
    }
    .pill-body h4 {
      font-size: 16px;
      color: var(--color-navy);
      margin-bottom: 4px;
    }
    .pill-body p {
      font-size: 13px;
      color: var(--color-steel);
      margin: 0;
      line-height: 1.4;
    }
    .custom-rfq-banner {
      margin-top: 60px;
      background: linear-gradient(135deg, #102A43 0%, #0b1d2a 100%);
      color: white;
      padding: 40px;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
    }
    .rfq-text h3 {
      font-size: 24px;
      color: white;
      margin-bottom: 8px;
    }
    .rfq-text p {
      color: #d9e2ec;
      font-size: 14px;
      margin: 0;
      max-width: 600px;
    }
    @media (max-width: 900px) {
      .engineering-pillars-banner {
        grid-template-columns: 1fr;
      }
      .custom-rfq-banner {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class SolutionListComponent implements OnInit {
  solutions: AutomationSolution[] = [];
  breadcrumbs: CrumbItem[] = [
    { label: 'Solutions' }
  ];

  constructor(
    private solutionService: SolutionService,
    private quoteService: QuoteModalService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.setTitle('Automation Solutions & SPM Machines');
    this.seoService.setMetaData('Explore custom special purpose machines (SPM), robotic palletizing cells, pneumatic systems, and turnkey assembly lines.');
    this.solutions = this.solutionService.getAllSolutions();
  }

  openRfqModal(): void {
    this.quoteService.open({
      source: 'Solutions Overview Page'
    });
  }
}
