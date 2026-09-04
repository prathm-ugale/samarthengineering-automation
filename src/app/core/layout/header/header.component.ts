import { Component, signal } from '@angular/core';
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
