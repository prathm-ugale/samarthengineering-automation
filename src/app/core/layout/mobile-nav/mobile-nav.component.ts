import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { QuoteModalService } from '../../services/quote-modal.service';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <div *ngIf="isOpen" class="mobile-nav-overlay" (click)="close.emit()">
      <div class="mobile-drawer" (click)="$event.stopPropagation()">
        <div class="drawer-header">
          <div class="drawer-brand">
            <img src="assets/images/logo.svg" alt="Samarth Engineering" class="drawer-logo-img" />
          </div>
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
      width: 320px;
      height: 100%;
      background: white;
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
    .drawer-logo-img {
      height: 38px;
      width: auto;
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
      font-size: 15px;
      font-weight: 600;
      color: var(--color-navy);
      text-decoration: none;
      transition: color 0.2s;
    }
    .drawer-link:hover {
      color: var(--color-teal);
    }
    .w-100 { width: 100%; }
  `]
})
export class MobileNavComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  constructor(private quoteService: QuoteModalService) {}

  openQuote(): void {
    this.close.emit();
    this.quoteService.open({ source: 'Mobile Nav' });
  }
}
