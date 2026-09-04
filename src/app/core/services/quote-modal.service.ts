import { Injectable, signal } from '@angular/core';

export interface QuoteContext {
  productName?: string;
  sku?: string;
  source?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteModalService {
  isOpen = signal<boolean>(false);
  context = signal<QuoteContext | null>(null);

  open(ctx?: QuoteContext): void {
    this.context.set(ctx || null);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    this.context.set(null);
  }
}
