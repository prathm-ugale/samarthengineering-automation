import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProductCategory } from '../../models/category.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <div class="mega-menu-container" (mouseleave)="close.emit()">
      <div class="container mega-grid">
        <div class="categories-grid">
          <a *ngFor="let cat of categories" 
             [routerLink]="['/products', cat.slug]" 
             (click)="close.emit()"
             class="mega-cat-card">
            <div class="cat-header">
              <span class="cat-name">{{ cat.name }}</span>
              <span class="cat-count">{{ cat.productCount }} items</span>
            </div>
            <p class="cat-desc">{{ cat.shortDescription }}</p>
            <ul class="cat-bullets">
              <li *ngFor="let b of cat.highlightBullets.slice(0, 3)">• {{ b }}</li>
            </ul>
          </a>
        </div>
        <div class="mega-sidebar">
          <div class="sidebar-card">
            <span class="badge badge-amber">Engineering Focus</span>
            <h4>Custom Automation Solutions</h4>
            <p>From SPM machines to robotic palletizing, our engineers design turnkey systems.</p>
            <a routerLink="/solutions" (click)="close.emit()" class="btn btn-secondary btn-sm w-100">Explore Solutions</a>
          </div>
          <div class="sidebar-links">
            <a routerLink="/products" (click)="close.emit()" class="all-products-link">
              View Full Product Catalogue &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mega-menu-container {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #ffffff;
      border-top: 2px solid var(--color-teal);
      box-shadow: var(--shadow-xl);
      padding: 32px 0;
      z-index: 1100;
      animation: fadeDown 0.22s ease-out;
    }
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .mega-grid {
      display: grid;
      grid-template-columns: 1fr 280px;
      gap: 32px;
    }
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    .mega-cat-card {
      padding: 16px;
      border-radius: var(--radius-md);
      background: var(--color-mist);
      border: 1px solid var(--color-border-subtle);
      text-decoration: none;
      transition: all var(--transition-fast);
      display: flex;
      flex-direction: column;
    }
    .mega-cat-card:hover {
      background: var(--color-teal-surface);
      border-color: var(--color-teal-light);
      transform: translateY(-2px);
    }
    .cat-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }
    .cat-name {
      font-weight: 700;
      font-size: 13.5px;
      color: var(--color-navy);
    }
    .cat-count {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--color-amber);
      font-weight: 600;
    }
    .cat-desc {
      font-size: 11.5px;
      color: var(--color-steel);
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .cat-bullets {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 11px;
      color: var(--color-steel-dark);
    }
    .cat-bullets li {
      padding: 2px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .mega-sidebar {
      border-left: 1px solid var(--color-border);
      padding-left: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .sidebar-card {
      background: linear-gradient(135deg, #102a43 0%, #0b1e33 100%);
      color: #ffffff;
      padding: 20px;
      border-radius: var(--radius-lg);
    }
    .sidebar-card h4 {
      color: #ffffff;
      font-size: 15px;
      margin: 10px 0 8px;
    }
    .sidebar-card p {
      font-size: 12px;
      color: #b9c9d3;
      margin-bottom: 16px;
      line-height: 1.5;
    }
    .all-products-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 700;
      color: var(--color-teal);
      text-decoration: none;
      margin-top: 16px;
    }
    .all-products-link:hover {
      color: var(--color-amber);
    }
    @media (max-width: 1200px) {
      .categories-grid { grid-template-columns: repeat(2, 1fr); }
    }
  `]
})
export class MegaMenuComponent {
  @Output() close = new EventEmitter<void>();
  categories: ProductCategory[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }
}
