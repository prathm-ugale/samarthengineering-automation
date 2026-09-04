import { Component } from '@angular/core';
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
