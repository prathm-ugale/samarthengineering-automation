# -*- coding: utf-8 -*-
import os

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


save('src/app/shared/components/section-heading/section-heading.component.ts', '''import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="section-heading-wrap" [class.text-center]="centered">
      <div *ngIf="badge" class="section-badge">{{ badge }}</div>
      <h2 class="section-title">{{ title }}</h2>
      <p *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    .section-heading-wrap {
      margin-bottom: 40px;
    }
    .text-center {
      text-align: center;
    }
    .section-badge {
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--color-teal);
      background: rgba(0, 124, 122, 0.1);
      padding: 4px 12px;
      border-radius: 4px;
      margin-bottom: 12px;
    }
    .section-title {
      font-size: 32px;
      font-weight: 800;
      color: var(--color-navy);
      line-height: 1.25;
      margin-bottom: 12px;
    }
    .section-subtitle {
      font-size: 16px;
      color: var(--color-steel);
      max-width: 680px;
      margin: 0;
      line-height: 1.6;
    }
    .text-center .section-subtitle {
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      .section-title { font-size: 26px; }
      .section-subtitle { font-size: 14px; }
    }
  `]
})
export class SectionHeadingComponent {
  @Input() badge?: string;
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() centered: boolean = false;
}
''')

save('src/app/shared/components/product-card/product-card.component.ts', '''import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { QuoteModalService } from '../../../core/services/quote-modal.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="product-card">
      <div class="card-media">
        <img [src]="product.heroImage" [alt]="product.title" loading="lazy" class="product-img" />
        <span *ngIf="product.isNew" class="badge badge-amber badge-pos">New</span>
        <span *ngIf="product.isFeatured && !product.isNew" class="badge badge-teal badge-pos">Featured</span>
      </div>
      <div class="card-body">
        <div class="category-tag">{{ product.categoryName }}</div>
        <h3 class="product-name">
          <a [routerLink]="['/products', product.categorySlug, product.slug]">{{ product.name }}</a>
        </h3>
        <div class="sku-row">
          <span class="sku-label">SKU:</span>
          <span class="sku-val">{{ product.sku }}</span>
        </div>
        <p class="product-summary">{{ product.shortDescription }}</p>
        
        <div class="specs-preview" *ngIf="product.specifications.length > 0">
          <div class="spec-row" *ngFor="let spec of product.specifications.slice(0, 3)">
            <span class="spec-k">{{ spec.name }}:</span>
            <span class="spec-v">{{ spec.value }}</span>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <a [routerLink]="['/products', product.categorySlug, product.slug]" class="btn btn-secondary btn-sm">Details</a>
        <button (click)="openRfq(product)" class="btn btn-primary btn-sm">Request RFQ</button>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: var(--shadow-sm);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .product-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-teal);
    }
    .card-media {
      position: relative;
      height: 180px;
      background: var(--color-mist);
      overflow: hidden;
    }
    .product-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .product-card:hover .product-img {
      transform: scale(1.04);
    }
    .badge-pos {
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .card-body {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .category-tag {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-teal);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    
save('src/app/shared/components/industry-card/industry-card.component.ts', '''import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { IndustryVertical } from '../../../core/models/industry.model';

@Component({
  selector: 'app-industry-card',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="industry-card">
      <div class="card-img-wrap">
        <img [src]="industry.heroImage" [alt]="industry.name" loading="lazy" class="industry-img" />
        <div class="img-gradient"></div>
        <h3 class="overlay-title">{{ industry.name }}</h3>
      </div>
      <div class="card-body">
        <p class="industry-summary">{{ industry.summary }}</p>
        <div class="apps-list" *ngIf="industry.applications.length > 0">
          <span class="apps-label">Key Applications:</span>
          <ul>
            <li *ngFor="let app of industry.applications.slice(0, 2)">
              {{ app.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="card-action">
        <a [routerLink]="['/industries', industry.slug]" class="link-arrow">
          View Industry Solutions &rarr;
        </a>
      </div>
    </div>
  `,
  styles: [`
    .industry-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: var(--shadow-sm);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .industry-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-teal);
    }
    .card-img-wrap {
      position: relative;
      height: 180px;
      overflow: hidden;
    }
    
save('src/app/shared/components/breadcrumbs/breadcrumbs.component.ts', '''import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface CrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <nav aria-label="Breadcrumb" class="breadcrumbs">
      <ol>
        <li>
          <a routerLink="/">Home</a>
          <span class="sep">/</span>
        </li>
        <li *ngFor="let crumb of items; let last = last" [class.active]="last">
          <a *ngIf="!last && crumb.url" [routerLink]="crumb.url">{{ crumb.label }}</a>
          <span *ngIf="last || !crumb.url" aria-current="page">{{ crumb.label }}</span>
          <span *ngIf="!last" class="sep">/</span>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumbs {
      padding: 12px 0;
      margin-bottom: 20px;
    }
    .breadcrumbs ol {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 13px;
    }
    .breadcrumbs li {
      display: inline-flex;
      align-items: center;
    }
    .breadcrumbs a {
      color: var(--color-steel);
      text-decoration: none;
      transition: color 0.2s;
    }
    .breadcrumbs a:hover {
      color: var(--color-teal);
    }
    .breadcrumbs .sep {
      margin: 0 8px;
      color: #c4d1d9;
    }
    .breadcrumbs li.active span {
      color: var(--color-navy);
      font-weight: 600;
    }
  `]
})
export class BreadcrumbsComponent {
  @Input({ required: true }) items: CrumbItem[] = [];
}
''')

save('src/app/shared/components/application-selector/application-selector.component.ts', '''import { Component } from '@angular/core';
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
        <h3>Find Products by Application & Industry</h3>
        <p>Select your sector and motion type to find recommended engineering components.</p>
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
    