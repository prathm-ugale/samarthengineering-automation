# -*- coding: utf-8 -*-
import os

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


save('src/app/core/layout/mega-menu/mega-menu.component.ts', '''import { Component, Input, Output, Emitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ProductCategory } from '../../models/category.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
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
              <li *ngFor="let b of cat.highlightBullets">{{ b }}</li>
            </ul>
          </a>
        </div>
        <div class="mega-sidebar">
          <div class="sidebar-card">
            <span class="badge badge-amber">Engineering Focus</span>
            <h4>Custom Automation Solutions</h4>
            <p>From SPM machines to robotic palletizing, our engineers design turnkey systems.</p>
            <a routerLink="/solutions" (click)="close.emit()" class="btn btn-secondary btn-sm">Explore Solutions</a>
          </div>
          <div class="sidebar-links">
            <a routerLink="/products" (click)="close.emit()" class="all-products-link">
              View Full Product Catalogue →
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
      background: #white;
      border-top: 2px solid var(--color-teal);
      box-shadow: var(--shadow-lg);
      padding: 32px 0;
      z-index: 900;
      animation: fadeDown 0.2s ease-out;
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
      padding: 14px;
      border-radius: 8px;
      background: var(--color-mist);
      text-decoration: none;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }
    .mega-cat-card:hover {
      background: #e0f2f1;
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
      font-size: 14px;
      color: var(--color-navy);
    }
    .cat-count {
      font-size: 11px;
      color: var(--color-steel);
    }
    .cat-desc {
      font-size: 12px;
      color: var(--color-steel);
      margin-bottom: 8px;
      line-height: 1.4;
    }
    .cat-bullets {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 11px;
      color: #627d98;
    }
    .cat-bullets li {
      padding: 2px 0;
    }
    .mega-sidebar {
      border-left: 1px solid var(--color-border);
      padding-left: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .sidebar-card {
      background: var(--color-mist);
      padding: 20px;
      border-radius: 8px;
    }
    .sidebar-card h4 {
      font-size: 16px;
      margin: 10px 0 6px;
    }
    .sidebar-card p {
      font-size: 13px;
      color: var(--color-steel);
      margin-bottom: 16px;
    }
    .all-products-link {
      font-weight: 600;
      font-size: 14px;
      color: var(--color-teal);
      text-decoration: none;
    }
  `]
})
export class MegaMenuComponent {
  @Output() close = new Emitter<void>();
  categories: ProductCategory[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }
}
''')

save('src/app/core/layout/header/header.component.ts', '''import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { QuoteModalService } from '../../services/quote-modal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, MegaMenuComponent, MobileNavComponent, FormsModule],
  template: `
    <header class="site-header">
      <div class="container header-inner">
        <a routerLink="/" class="brand-logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#007C7A"/>
            <path d="M16 6L24 11V21L16 26L8 21V11L16 6Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <circle cx="16" cy="16" r="3" fill="#F5A524"/>
          </svg>
          <div class="brand-text">
            <span class="brand-name">SAMARTH</span>
            <span class="brand-sub">ENGINEERING</span>
          </div>
        </a>

        <nav class="desktop-nav">
          <div class="nav-item has-mega" (mouseenter)="showMegaMenu.set(true)">
            <a routerLink="/products" routerLinkActive="active" class="nav-link">
              Products
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </a>
          </div>
          <a routerLink="/solutions" routerLinkActive="active" class="nav-link">Solutions</a>
          <a routerLink="/industries" routerLinkActive="active" class="nav-link">Industries</a>
          <a routerLink="/projects" routerLinkActive="active" class="nav-link">Projects</a>
          <a routerLink="/about" routerLinkActive="active" class="nav-link">About Us</a>
          <a routerLink="/resources" routerLinkActive="active" class="nav-link">Resources</a>
          <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
        </nav>

        <div class="header-actions">
          <div class="header-search">
            <input type="text" placeholder="Search SKU, part..." [(ngModel)]="searchQuery" (keyup.enter)="onSearch()" />
            <button (click)="onSearch()" aria-label="Search" class="search-icon-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
          </div>
          <button (click)="openQuote()" class="btn btn-primary btn-sm">
            Request RFQ
          </button>
          <button (click)="mobileMenuOpen.set(!mobileMenuOpen())" class="mobile-toggle" aria-label="Toggle Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>

      <app-mega-menu *ngIf="showMegaMenu()" (close)="showMegaMenu.set(false)"></app-mega-menu>
      <app-mobile-nav [isOpen]="mobileMenuOpen()" (close)="mobileMenuOpen.set(false)"></app-mobile-nav>
    </header>
  `,
  styles: [`
    .site-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: #white;
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--shadow-sm);
    }
    .header-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 72px;
    }
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }
    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    .brand-name {
      font-family: var(--font-heading);
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 1px;
      color: var(--color-navy);
    }
    
save('src/app/core/layout/footer/footer.component.ts', '''import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProductCategory } from '../../models/category.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-col company-col">
            <div class="footer-brand">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#007C7A"/>
                <path d="M16 6L24 11V21L16 26L8 21V11L16 6Z" stroke="white" stroke-width="2"/>
                <circle cx="16" cy="16" r="3" fill="#F5A524"/>
              </svg>
              <span class="footer-title">SAMARTH ENGINEERING</span>
            </div>
            <p class="footer-desc">
              Premium industrial automation, motion control, pneumatic systems, and robotics solutions for manufacturing excellence.
            </p>
            <div class="iso-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007C7A" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v5c0 6 8 10 8 10z"/></svg>
              <span>ISO 9001:2015 Quality Assured</span>
            </div>
          </div>

          <div class="footer-col">
            <h4>Product Categories</h4>
            <ul>
              <li *ngFor="let c of categories">
                <a [routerLink]="['/products', c.slug]">{{ c.name }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Engineering Solutions</h4>
            <ul>
              <li><a routerLink="/solutions">SPM Machines</a></li>
              <li><a routerLink="/solutions">Robotic Palletizing</a></li>
              <li><a routerLink="/industries">Automotive & EV</a></li>
              <li><a routerLink="/industries">Pharmaceuticals</a></li>
              <li><a routerLink="/projects">Case Studies</a></li>
              <li><a routerLink="/resources">Technical Guides</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Pune Headquarters</h4>
            <p class="contact-text">
              Plot No. A-45/2, MIDC Industrial Area,<br>
              Bhosari, Pune - 411026,<br>
              Maharashtra, India
            </p>
            <p class="contact-links">
              <a href="tel:+912027128890">+91 (020) 2712-8890</a><br>
              <a href="mailto:sales@samarthengineering.com">sales@samarthengineering.com</a>
            </p>
            <a routerLink="/contact" class="btn btn-secondary btn-sm">Get Directions & Contact</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>� 2026 Samarth Engineering. All rights reserved.</p>
          <div class="legal-links">
            <a routerLink="/privacy-policy">Privacy Policy</a>
            <a routerLink="/terms-of-use">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #0b1d2a;
      color: #d9e2ec;
      padding: 64px 0 24px;
      border-top: 4px solid var(--color-teal);
    }
    .footer-top {
      display: grid;
      grid-template-columns: 1.5fr 1.2fr 1.2fr 1.2fr;
      gap: 40px;
      padding-bottom: 48px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    