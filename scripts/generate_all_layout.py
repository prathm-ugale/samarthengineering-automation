# -*- coding: utf-8 -*-
import os

def save(path, content):
    abs_path = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    with open(abs_path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


# 1. MEGA MENU
save('src/app/core/layout/mega-menu/mega-menu.component.ts', '''import { Component, Output, EventEmitter } from '@angular/core';
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
''')


# 2. HEADER
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
        <a routerLink="/" class="brand-logo" aria-label="Samarth Engineering Home">
          <img src="assets/images/logo.svg" alt="Samarth Engineering - Industrial Automation & Components" class="brand-logo-img" />
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
      background: white;
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
      text-decoration: none;
    }
    .brand-logo-img {
      height: 46px;
      width: auto;
      display: block;
    }
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 24px;
    }
    .nav-link {
      font-size: 14px;
      font-weight: 600;
      color: var(--color-navy);
      text-decoration: none;
      padding: 8px 0;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: color 0.2s;
    }
    .nav-link:hover, .nav-link.active {
      color: var(--color-teal);
    }
    .header-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .header-search {
      position: relative;
      display: flex;
      align-items: center;
    }
    .header-search input {
      width: 180px;
      height: 36px;
      padding: 0 32px 0 12px;
      font-size: 13px;
      border: 1px solid var(--color-border);
      border-radius: 6px;
      background: var(--color-mist);
      transition: width 0.2s ease;
    }
    .header-search input:focus {
      width: 220px;
      background: white;
      border-color: var(--color-teal);
      outline: none;
    }
    .search-icon-btn {
      position: absolute;
      right: 8px;
      background: none;
      border: none;
      color: var(--color-steel);
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--color-navy);
      cursor: pointer;
    }
    @media (max-width: 1024px) {
      .desktop-nav, .header-search { display: none; }
      .mobile-toggle { display: flex; }
    }
  `]
})
export class HeaderComponent {
  showMegaMenu = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);
  searchQuery = '';

  constructor(
    private quoteService: QuoteModalService,
    private router: Router
  ) {}

  openQuote(): void {
    this.quoteService.open({ source: 'Header RFQ Button' });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/products'], { queryParams: { q: this.searchQuery.trim() } });
      this.searchQuery = '';
    }
  }
}
''')


# 3. FOOTER
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
          <!-- Col 1: Brand Info -->
          <div class="footer-col brand-col">
            <a routerLink="/" class="footer-logo">
              <img src="assets/images/logo-light.svg" alt="Samarth Engineering" class="footer-logo-img" />
            </a>
            <p class="brand-desc">
              Premier Indian distributor & automation solution provider for high-precision linear guides, ball screws, pneumatics, workholding clamps, and custom SPM machinery.
            </p>
            <div class="iso-seal">
              <span class="seal-icon">🎖️</span>
              <div>
                <strong>ISO 9001:2015</strong>
                <span>Certified Quality Management</span>
              </div>
            </div>
          </div>

          <!-- Col 2: Product Categories -->
          <div class="footer-col">
            <h4>Product Universe</h4>
            <ul class="footer-links">
              <li *ngFor="let cat of categories.slice(0, 6)">
                <a [routerLink]="['/products', cat.slug]">{{ cat.name }}</a>
              </li>
              <li><a routerLink="/products" class="all-link">Browse Full Catalogue &rarr;</a></li>
            </ul>
          </div>

          <!-- Col 3: Solutions & Applications -->
          <div class="footer-col">
            <h4>Solutions & Focus</h4>
            <ul class="footer-links">
              <li><a routerLink="/solutions">Custom SPM Automation</a></li>
              <li><a routerLink="/solutions">Robotic Automation Cells</a></li>
              <li><a routerLink="/solutions">Automated Conveyor Lines</a></li>
              <li><a routerLink="/industries">Automotive & EV Manufacturing</a></li>
              <li><a routerLink="/projects">Featured Case Studies</a></li>
              <li><a routerLink="/resources">Technical Guides & Calculations</a></li>
            </ul>
          </div>

          <!-- Col 4: Works & Contact -->
          <div class="footer-col">
            <h4>Pune Works & HQ</h4>
            <p class="contact-text">
              <strong>Samarth Engineering Works Pvt. Ltd.</strong><br>
              Plot No. A-45/2, MIDC Industrial Area,<br>
              Bhosari, Pune - 411026,<br>
              Maharashtra, India
            </p>
            <div class="contact-links">
              <a href="tel:+912027128890" class="c-link">+91 (020) 2712-8890</a>
              <a href="mailto:sales@samarthengineering-automation.com" class="c-link">sales@samarthengineering-automation.com</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            &copy; 2026 Samarth Engineering Works Pvt. Ltd. All rights reserved.
          </div>
          <div class="footer-legal">
            <a routerLink="/privacy-policy">Privacy Policy</a>
            <a routerLink="/terms-of-use">Terms of Use</a>
            <a routerLink="/contact">Plant Tour & Consultation</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #071524;
      color: #9fb3c8;
      padding: 64px 0 24px;
      border-top: 3px solid var(--color-teal);
    }
    .footer-top {
      display: grid;
      grid-template-columns: 1.4fr 1.1fr 1.1fr 1.2fr;
      gap: 40px;
      padding-bottom: 48px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .footer-logo {
      display: inline-block;
      margin-bottom: 16px;
    }
    .footer-logo-img {
      height: 48px;
      width: auto;
    }
    .brand-desc {
      font-size: 13.5px;
      line-height: 1.6;
      color: #9fb3c8;
      margin-bottom: 20px;
    }
    .iso-seal {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 8px 14px;
      border-radius: var(--radius-md);
    }
    .seal-icon {
      font-size: 1.4rem;
    }
    .iso-seal strong {
      display: block;
      color: #ffffff;
      font-size: 12px;
    }
    .iso-seal span {
      font-size: 11px;
      color: var(--color-amber-light);
    }
    .footer-col h4 {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-links li {
      margin-bottom: 10px;
    }
    .footer-links a {
      color: #9fb3c8;
      text-decoration: none;
      font-size: 13.5px;
      transition: color 0.2s;
    }
    .footer-links a:hover {
      color: var(--color-amber-light);
    }
    .all-link {
      color: var(--color-teal-light) !important;
      font-weight: 600;
    }
    .contact-text {
      font-size: 13px;
      line-height: 1.6;
      color: #9fb3c8;
      margin-bottom: 16px;
    }
    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .c-link {
      color: var(--color-teal-light);
      font-size: 13px;
      text-decoration: none;
    }
    .c-link:hover {
      color: var(--color-amber-light);
    }
    .footer-bottom {
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12.5px;
      color: #627d98;
    }
    .footer-legal {
      display: flex;
      gap: 20px;
    }
    .footer-legal a {
      color: #627d98;
      text-decoration: none;
    }
    .footer-legal a:hover {
      color: #ffffff;
    }
    @media (max-width: 1024px) {
      .footer-top { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 640px) {
      .footer-top { grid-template-columns: 1fr; gap: 32px; }
      .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
    }
  `]
})
export class FooterComponent {
  categories: ProductCategory[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }
}
''')


# 4. STICKY ACTIONS
save('src/app/core/layout/sticky-actions/sticky-actions.component.ts', '''import { Component } from '@angular/core';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-sticky-actions',
  standalone: true,
  template: `
    <div class="sticky-actions">
      <a href="https://wa.me/918454060784?text=Hello%20Samarth%20Engineering%20Automation" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="sticky-btn whatsapp-btn" 
         aria-label="Chat with Samarth Engineering on WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.761.817 2.796.818h.005c3.179 0 5.766-2.587 5.767-5.766.001-3.182-2.585-5.769-5.766-5.769zm3.397 8.257c-.144.405-.837.774-1.17.824-.311.045-.698.073-2.12-.49-1.815-.719-2.984-2.571-3.074-2.692-.09-.122-.738-.982-.738-1.872 0-.89.467-1.328.633-1.509.166-.18.362-.225.483-.225.12 0 .241.001.346.006.111.005.259-.042.404.306.15.362.512 1.25.558 1.341.045.091.075.197.015.318-.06.121-.09.197-.18.303-.09.106-.189.237-.27.318-.09.09-.184.188-.079.369.105.18.468.772 1.004 1.249.691.614 1.274.805 1.455.895.18.09.286.076.392-.045.106-.121.451-.527.572-.708.12-.18.241-.151.405-.09.166.06 1.054.497 1.235.587.181.09.301.135.346.211.045.075.045.436-.099.841zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.174L2 22l4.981-1.309A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
        <span class="btn-label">WhatsApp</span>
      </a>

      <button (click)="openQuote()" class="sticky-btn rfq-btn" aria-label="Request Instant RFQ">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        <span class="btn-label">Quick RFQ</span>
      </button>

      <button (click)="scrollToTop()" class="sticky-btn top-btn" aria-label="Scroll to top of page">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>
    </div>
  `,
  styles: [`
    .sticky-actions {
      position: fixed;
      right: 24px;
      bottom: 24px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: flex-end;
    }
    .sticky-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 18px;
      border-radius: var(--radius-full, 9999px);
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      border: none;
      cursor: pointer;
      box-shadow: 0 6px 20px rgba(11, 30, 51, 0.22);
      transition: all 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1);
      white-space: nowrap;
      line-height: 1;
    }
    .sticky-btn:hover {
      transform: translateY(-4px) scale(1.03);
      box-shadow: 0 10px 28px rgba(11, 30, 51, 0.32);
    }
    .whatsapp-btn {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      color: #ffffff;
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
    }
    .whatsapp-btn:hover {
      background: linear-gradient(135deg, #2ae870 0%, #25D366 100%);
      color: #ffffff;
    }
    .rfq-btn {
      background: linear-gradient(135deg, #f07822 0%, #d45e10 100%);
      color: #ffffff;
      box-shadow: 0 6px 20px rgba(240, 120, 34, 0.35);
    }
    .rfq-btn:hover {
      background: linear-gradient(135deg, #ffa82e 0%, #f07822 100%);
      color: #ffffff;
    }
    .top-btn {
      background: #0b1e33;
      color: #ffffff;
      width: 44px;
      height: 44px;
      padding: 0;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    .top-btn:hover {
      background: #007c7a;
      color: #ffffff;
    }
    @media (max-width: 768px) {
      .sticky-actions {
        right: 16px;
        bottom: 16px;
        gap: 8px;
      }
      .btn-label {
        display: none;
      }
      .sticky-btn {
        padding: 12px;
        border-radius: 50%;
        width: 44px;
        height: 44px;
      }
    }
  `]
})
export class StickyActionsComponent {
  constructor(private quoteService: QuoteModalService) {}

  openQuote(): void {
    this.quoteService.open({ source: 'Sticky Actions RFQ Button' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
''')

print("All layout components updated successfully!")