import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-application-selector',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, FormsModule],
  template: `
    <div class="app-selector-wrapper">
      <div class="selector-header">
        <span class="badge badge-teal">Interactive Finder</span>
        <h3>Find Components by Industry & Application</h3>
        <p>Select your sector and process type to find recommended engineering components.</p>
      </div>

      <div class="selector-form">
        <div class="form-group">
          <label>1. Select Industry Sector</label>
          <select [(ngModel)]="selectedIndustry" (change)="updateResults()">
            <option value="">-- All Industries --</option>
            <option *ngFor="let ind of industries" [value]="ind">{{ ind }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>2. Select Motion / Process Type</label>
          <select [(ngModel)]="selectedMotion" (change)="updateResults()">
            <option value="">-- All Applications --</option>
            <option *ngFor="let m of motions" [value]="m">{{ m }}</option>
          </select>
        </div>
      </div>

      <div class="selector-results" *ngIf="matchedProducts.length > 0">
        <h4>Recommended Solutions ({{ matchedProducts.length }} matches):</h4>
        <div class="results-grid">
          <a *ngFor="let p of matchedProducts.slice(0, 4)"
             [routerLink]="['/products', p.categorySlug, p.slug]"
             class="result-item">
            <span class="result-cat">{{ p.categoryName }}</span>
            <strong class="result-name">{{ p.name }}</strong>
            <span class="result-sku">{{ p.sku }}</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .app-selector-wrapper {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 28px;
      box-shadow: var(--shadow-md);
    }
    .selector-header h3 {
      font-size: 22px;
      margin: 8px 0;
      color: var(--color-navy);
    }
    .selector-header p {
      font-size: 14px;
      color: var(--color-steel);
      margin-bottom: 20px;
    }
    .selector-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    .selector-results h4 {
      font-size: 15px;
      margin-bottom: 12px;
      color: var(--color-navy);
    }
    .results-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }
    .result-item {
      padding: 12px;
      background: var(--color-mist);
      border-radius: 8px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
      transition: all 0.2s ease;
    }
    .result-item:hover {
      background: #e0f2f1;
      transform: translateY(-2px);
    }
    .result-cat {
      font-size: 10px;
      font-weight: 700;
      color: var(--color-teal);
      text-transform: uppercase;
    }
    .result-name {
      font-size: 13px;
      color: var(--color-navy);
      line-height: 1.3;
    }
    .result-sku {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--color-steel);
    }
    @media (max-width: 768px) {
      .selector-form { grid-template-columns: 1fr; }
      .results-grid { grid-template-columns: 1fr 1fr; }
    }
  `]
})
export class ApplicationSelectorComponent {
  industries = ['Automotive & EV', 'Pharmaceuticals', 'Food & Beverage', 'Heavy Engineering', 'Electronics & Semicon', 'Warehousing & Logistics'];
  motions = ['High-Speed Pick & Place', 'Heavy Load Transfer', 'Precision Indexing', 'Palletizing & Sorting', 'Cleanroom Automation'];

  selectedIndustry = '';
  selectedMotion = '';
  matchedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.updateResults();
  }

  updateResults(): void {
    const all = this.productService.getAllProducts();
    if (!this.selectedIndustry && !this.selectedMotion) {
      this.matchedProducts = all.slice(0, 4);
      return;
    }
    this.matchedProducts = all.filter(p => {
      let match = true;
      if (this.selectedIndustry) {
        const indWord = this.selectedIndustry.toLowerCase().split(' ')[0];
        match = p.tags.some(t => t.toLowerCase().includes(indWord)) ||
                p.applications.some(a => a.toLowerCase().includes(indWord));
      }
      if (this.selectedMotion) {
        const motionWord = this.selectedMotion.toLowerCase().split(' ')[0];
        match = match && p.applications.some(a => a.toLowerCase().includes(motionWord));
      }
      return match;
    });

    if (this.matchedProducts.length === 0) {
      this.matchedProducts = all.slice(0, 4);
    }
  }
}