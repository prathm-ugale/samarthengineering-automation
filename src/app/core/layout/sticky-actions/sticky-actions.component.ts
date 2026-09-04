import { Component } from '@angular/core';
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
