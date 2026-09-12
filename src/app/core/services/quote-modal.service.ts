import { Injectable, signal } from '@angular/core';

export interface QuoteContext {
  productName?: string;
  sku?: string;
  source?: string;
}

// Service for controlling global RFQ quotation modal state and context
@Injectable({
  providedIn: 'root'
})
export class QuoteModalService {
  // Reactive signal tracking whether the modal dialog is currently open
  isOpen = signal<boolean>(false);
  // Reactive signal holding context details (e.g. pre-selected product name or SKU)
  context = signal<QuoteContext | null>(null);

  // Opens the RFQ modal, optionally passing preselected product/sku context
  open(ctx?: QuoteContext): void {
    this.context.set(ctx || null);
    this.isOpen.set(true);
  }

  // Closes the RFQ modal and resets context data
  close(): void {
    this.isOpen.set(false);
    this.context.set(null);
  }
}
