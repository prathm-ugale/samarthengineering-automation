import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { QuoteModalService } from '../../../core/services/quote-modal.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="product-card" *ngIf="product">
      <div class="card-image-wrap">
        <img [src]="product.imageUrl" [alt]="product.name" class="product-image" loading="lazy" />
        <div class="card-badges">
          <span *ngIf="product.featured" class="badge badge-amber">Featured</span>
          <span *ngIf="product.inStock" class="badge badge-teal">In Stock</span>
        </div>
        <div class="card-brand-tag" *ngIf="product.brand">{{ product.brand }}</div>
      </div>

      <div class="card-content">
        <div class="card-meta">
          <span class="category-name">{{ product.categoryName }}</span>
          <span class="sku-code">{{ product.sku }}</span>
        </div>

        <h3 class="product-name">
          <a [routerLink]="['/products', product.categorySlug, product.slug]">
            {{ product.name }}
          </a>
        </h3>

        <p class="product-desc">{{ product.shortDescription }}</p>

        <!-- QUICK SPECS -->
        <div class="specs-preview" *ngIf="product.specs && product.specs.length > 0">
          <div class="spec-row" *ngFor="let s of product.specs.slice(0, 2)">
            <span class="spec-key">{{ s.name }}</span>
            <span class="spec-val">{{ s.value }}</span>
          </div>
        </div>

        <!-- CARD ACTIONS -->
        <div class="card-actions">
          <a [routerLink]="['/products', product.categorySlug, product.slug]" class="btn btn-outline btn-sm">
            View Details
          </a>
          <button (click)="openRfq($event)" class="btn btn-primary btn-sm">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
    .product-card {
      background: #ffffff;
      border: 1px solid var(--color-border);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;
      box-shadow: var(--shadow-sm);
      transition: all var(--transition-normal);
    }
    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-teal-light);
    }
    .card-image-wrap {
      position: relative;
      background: linear-gradient(145deg, #eef3f7 0%, #e2eaf0 100%);
      height: 200px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .product-card:hover .product-image {
      transform: scale(1.06);
    }
    .card-badges {
      position: absolute;
      top: 12px;
      left: 12px;
      display: flex;
      gap: 6px;
      z-index: 2;
    }
    .card-brand-tag {
      position: absolute;
      bottom: 10px;
      right: 12px;
      font-family: var(--font-mono);
      font-size: 0.65rem;
      font-weight: 600;
      color: var(--color-navy);
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(4px);
      padding: 2px 8px;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }
    .card-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .category-name {
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--color-amber);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-left: 2px solid var(--color-amber);
      padding-left: 6px;
    }
    .sku-code {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--color-steel-light);
      background: var(--color-mist);
      padding: 2px 6px;
      border-radius: 4px;
    }
    .product-name {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .product-name a {
      color: var(--color-navy);
      text-decoration: none;
      transition: color var(--transition-fast);
    }
    .product-name a:hover {
      color: var(--color-amber);
    }
    .product-desc {
      font-size: 0.86rem;
      color: var(--color-steel);
      line-height: 1.5;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .specs-preview {
      background: var(--color-mist);
      padding: 10px 12px;
      border-radius: 8px;
      margin-bottom: 16px;
      font-size: 0.78rem;
      border: 1px solid var(--color-border-subtle);
    }
    .spec-row {
      display: flex;
      justify-content: space-between;
      padding: 3px 0;
    }
    .spec-row:not(:last-child) {
      border-bottom: 1px dashed rgba(0,0,0,0.06);
    }
    .spec-key {
      color: var(--color-steel);
      font-weight: 500;
    }
    .spec-val {
      font-family: var(--font-mono);
      font-weight: 600;
      color: var(--color-navy);
      text-align: right;
    }
    .card-actions {
      display: flex;
      gap: 10px;
      margin-top: auto;
    }
    .card-actions .btn {
      flex: 1;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private quoteService: QuoteModalService) {}

  openRfq(e: Event): void {
    e.stopPropagation();
    this.quoteService.open({
      productName: this.product.name,
      sku: this.product.sku,
      source: `Card: ${this.product.name}`
    });
  }
}