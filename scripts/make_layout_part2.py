# -*- coding: utf-8 -*-
import os

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


save('src/app/core/layout/sticky-actions/sticky-actions.component.ts', '''import { Component } from '@angular/core';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-sticky-actions',
  standalone: true,
  template: `
    <div class="sticky-actions">
      <a href="https://wa.me/919876543210?text=Hello%20Samarth%20Engineering" target="_blank" rel="noopener" class="sticky-btn whatsapp-btn" aria-label="Chat on WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.82.49 3.53 1.34 5.03L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10z"/></svg>
        <span class="btn-label">WhatsApp</span>
      </a>
      <button (click)="openQuote()" class="sticky-btn rfq-btn" aria-label="Quick RFQ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        <span class="btn-label">Quick RFQ</span>
      </button>
      <button (click)="scrollToTop()" class="sticky-btn top-btn" aria-label="Scroll to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
    </div>
  `,
  styles: [`
    .sticky-actions {
      position: fixed;
      right: 20px;
      bottom: 24px;
      z-index: 999;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .sticky-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 50px;
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
      transition: all 0.2s ease;
    }
    .sticky-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }
    .whatsapp-btn { background: #25D366; color: white; }
    .rfq-btn { background: var(--color-teal); color: white; }
    .top-btn { background: var(--color-navy); color: white; width: 40px; height: 40px; padding: 0; border-radius: 50%; align-self: flex-end; }
    @media (max-width: 640px) {
      .btn-label { display: none; }
      .sticky-btn { padding: 10px; border-radius: 50%; }
    }
  `]
})
export class StickyActionsComponent {
  constructor(private quoteService: QuoteModalService) {}

  openQuote(): void {
    this.quoteService.open({ source: 'Sticky Actions' });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
''')

save('src/app/core/layout/mobile-nav/mobile-nav.component.ts', '''import { Component, Input, Output, Emitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { ProductCategory } from '../../models/category.model';
import { ProductService } from '../../services/product.service';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div *ngIf="isOpen" class="mobile-nav-overlay" (click)="close.emit()">
      <div class="mobile-drawer" (click)="$event.stopPropagation()">
        <div class="drawer-header">
          <span class="drawer-title">Navigation</span>
          <button (click)="close.emit()" class="drawer-close" aria-label="Close menu">&times;</button>
        </div>
        <nav class="drawer-links">
          <a routerLink="/" (click)="close.emit()" class="drawer-link">Home</a>
          <a routerLink="/products" (click)="close.emit()" class="drawer-link">Products Catalogue</a>
          <a routerLink="/solutions" (click)="close.emit()" class="drawer-link">Engineering Solutions</a>
          <a routerLink="/industries" (click)="close.emit()" class="drawer-link">Industries</a>
          <a routerLink="/projects" (click)="close.emit()" class="drawer-link">Case Studies</a>
          <a routerLink="/about" (click)="close.emit()" class="drawer-link">About Us</a>
          <a routerLink="/resources" (click)="close.emit()" class="drawer-link">Resources & Downloads</a>
          <a routerLink="/contact" (click)="close.emit()" class="drawer-link">Contact Us</a>
        </nav>
        <div class="drawer-footer">
          <button (click)="openQuote()" class="btn btn-primary w-100">Request RFQ</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mobile-nav-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2500;
      display: flex;
      justify-content: flex-end;
    }
    .mobile-drawer {
      width: 300px;
      height: 100%;
      background: #white;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      animation: drawerSlide 0.25s ease-out;
    }
    @keyframes drawerSlide {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--color-border);
    }
    .drawer-title {
      font-size: 18px;
      font-weight: 700;
      color: var(--color-navy);
    }
    .drawer-close {
      background: none;
      border: none;
      font-size: 24px;
      color: var(--color-steel);
      cursor: pointer;
    }
    .drawer-links {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px 0;
    }
    .drawer-link {
      font-size: 16px;
      font-weight: 600;
      color: var(--color-navy);
      text-decoration: none;
    }
    .w-100 { width: 100%; }
  `]
})
export class MobileNavComponent {
  @Input() isOpen = false;
  @Output() close = new Emitter<void>();

  constructor(private quoteService: QuoteModalService) {}

  openQuote(): void {
    this.close.emit();
    this.quoteService.open({ source: 'Mobile Nav' });
  }
}
''')

print('Layout part 2 successful!')
