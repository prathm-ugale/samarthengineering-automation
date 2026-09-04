import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceCardComponent } from '../../shared/components/resource-card/resource-card.component';
import { BreadcrumbsComponent, CrumbItem } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { ResourceService } from '../../core/services/resource.service';
import { ToastService } from '../../core/services/toast.service';
import { SeoService } from '../../core/services/seo.service';
import { IndustrialResource } from '../../core/models/resource.model';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    ResourceCardComponent,
    BreadcrumbsComponent
  ],
  template: `
    <div class="page-header">
      <div class="container">
        <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        <h1 class="page-title">Technical Knowledge Hub & Downloads</h1>
        <p class="page-subtitle">
          Download engineering sizing calculations, SPM design handbooks, pneumatic air consumption tables, and industrial case studies.
        </p>
      </div>
    </div>

    <div class="container page-content">
      <!-- FILTER & SEARCH BAR -->
      <div class="resources-toolbar">
        <div class="type-pills">
          <button
            (click)="selectType('')"
            [class.active]="selectedType === ''"
            class="pill-btn"
          >
            All Resources ({{ allResources.length }})
          </button>
          <button
            (click)="selectType('Application Guide')"
            [class.active]="selectedType === 'Application Guide'"
            class="pill-btn"
          >
            Engineering Guides
          </button>
          <button
            (click)="selectType('Catalogue')"
            [class.active]="selectedType === 'Catalogue'"
            class="pill-btn"
          >
            Master Catalogues
          </button>
          <button
            (click)="selectType('Datasheet')"
            [class.active]="selectedType === 'Datasheet'"
            class="pill-btn"
          >
            Datasheets
          </button>
          <button
            (click)="selectType('Technical Article')"
            [class.active]="selectedType === 'Technical Article'"
            class="pill-btn"
          >
            Technical Articles
          </button>
        </div>

        <div class="search-box">
          <input
            type="text"
            [(ngModel)]="searchQuery"
            (input)="applyFilters()"
            placeholder="Search guides, topics, standards..."
            class="res-search"
          />
        </div>
      </div>

      <!-- RESOURCES GRID -->
      <div class="grid grid-3" *ngIf="filteredResources.length > 0">
        <app-resource-card *ngFor="let r of filteredResources" [resource]="r"></app-resource-card>
      </div>

      <div class="no-resources" *ngIf="filteredResources.length === 0">
        <p>No documentation found matching your search. Please clear your filter.</p>
        <button (click)="resetFilters()" class="btn btn-secondary btn-sm">Reset Filters</button>
      </div>

      <!-- BUNDLE DOWNLOAD BANNER -->
      <div class="bundle-download-card">
        <div class="bundle-info">
          <h3>Download Complete 2026 Engineering Toolkit</h3>
          <p>Get the full ZIP containing all product 2D/3D CAD libraries, servo sizing formulas, and pneumatic selection charts (45 MB).</p>
        </div>
        <div class="bundle-action">
          <button (click)="downloadCompleteBundle()" class="btn btn-primary btn-lg">Download Master ZIP</button>
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
    .resources-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-bottom: 36px;
      flex-wrap: wrap;
    }
    .type-pills {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .pill-btn {
      padding: 8px 16px;
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
    .res-search {
      padding: 8px 16px;
      font-size: 13px;
      border: 1px solid var(--color-border);
      border-radius: 20px;
      width: 260px;
      outline: none;
    }
    .res-search:focus {
      border-color: var(--color-teal);
    }
    .no-resources {
      text-align: center;
      padding: 48px;
      background: white;
      border-radius: 12px;
      border: 1px dashed var(--color-border);
    }
    .bundle-download-card {
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
    .bundle-info h3 {
      font-size: 22px;
      color: white;
      margin-bottom: 8px;
    }
    .bundle-info p {
      font-size: 14px;
      color: #d9e2ec;
      margin: 0;
      max-width: 600px;
    }
    @media (max-width: 900px) {
      .resources-toolbar { flex-direction: column; align-items: stretch; }
      .res-search { width: 100%; }
      .bundle-download-card { flex-direction: column; text-align: center; }
    }
  `]
})
export class ResourcesComponent implements OnInit {
  allResources: IndustrialResource[] = [];
  filteredResources: IndustrialResource[] = [];
  selectedType: string = '';
  searchQuery: string = '';

  breadcrumbs: CrumbItem[] = [
    { label: 'Resources' }
  ];

  constructor(
    private resourceService: ResourceService,
    private toastService: ToastService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.seoService.setTitle('Technical Resources & Downloads');
    this.seoService.setMetaData('Engineering whitepapers, sizing templates, technical datasheets, and industrial calculations.');
    this.allResources = this.resourceService.getAllResources();
    this.filteredResources = this.allResources;
  }

  selectType(type: string): void {
    this.selectedType = type;
    this.applyFilters();
  }

  applyFilters(): void {
    let list = [...this.allResources];

    if (this.selectedType) {
      list = list.filter(r => r.type === this.selectedType);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(r =>
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        (r.category ? r.category.toLowerCase().includes(q) : false)
      );
    }

    this.filteredResources = list;
  }

  resetFilters(): void {
    this.selectedType = '';
    this.searchQuery = '';
    this.filteredResources = this.allResources;
  }

  downloadCompleteBundle(): void {
    this.toastService.show(
      'Compiling 2026 Master Engineering Toolkit (ZIP - 45MB). Download will commence shortly.',
      'success',
      'Toolkit Download Initiated'
    );
  }
}
