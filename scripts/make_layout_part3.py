# -*- coding: utf-8 -*-
import os

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)

save('src/app/core/layout/quote-modal/quote-modal.component.ts', '''import { Component, effect } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuoteModalService } from '../../services/quote-modal.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-quote-modal',
  standalone: true,
  imports: [NgIf, FormsModule],
  template: `
    <div *ngIf="quoteService.isOpen()" class="modal-backdrop" (click)="close()">
      <div class="modal-dialog" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div>
            <span class="badge badge-teal">B2B Procurement</span>
            <h3>Request a Quotation (RFQ)</h3>
            <p class="modal-sub">Our application engineers will review your specs and respond within 24 hours.</p>
          </div>
          <button (click)="close()" class="close-btn" aria-label="Close">&times;</button>
        </div>

        <form (ngSubmit)="onSubmit()" class="modal-form">
          <div class="form-row">
            <div class="form-group">
              <label>Full Name *</label>
              <input type="text" required [(ngModel)]="formData.name" name="name" placeholder="e.g. Rajesh Sharma" />
            </div>
            <div class="form-group">
              <label>Company Name *</label>
              <input type="text" required [(ngModel)]="formData.company" name="company" placeholder="e.g. Tata Motors Ltd" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Business Email *</label>
              <input type="email" required [(ngModel)]="formData.email" name="email" placeholder="rajesh@company.com" />
            </div>
            <div class="form-group">
              <label>Phone / WhatsApp *</label>
              <input type="tel" required [(ngModel)]="formData.phone" name="phone" placeholder="+91 98765 43210" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Product / Part Interest</label>
              <input type="text" [(ngModel)]="formData.product" name="product" placeholder="E.g. High-Dynamic AC Servo Motor" />
            </div>
            <div class="form-group">
              <label>SKU / Part Number</label>
              <input type="text" [(ngModel)]="formData.sku" name="sku" placeholder="SAM-MS-075-E2" />
            </div>
          </div>

          <div class="form-group">
            <label>Application / Project Requirements *</label>
            <textarea rows="3" required [(ngModel)]="formData.message" name="message" placeholder="Describe your load, speed, quantity, and automation needs..."></textarea>
          </div>

          <div class="modal-actions">
            <button type="button" (click)="close()" class="btn btn-secondary">Cancel</button>
            <button type="submit" class="btn btn-primary">Submit RFQ</button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(16, 42, 67, 0.7);
      backdrop-filter: blur(4px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-dialog {
      background: #white;
      border-radius: 12px;
      width: 100%;
      max-width: 600px;
      padding: 32px;
      box-shadow: var(--shadow-lg);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
    }
    .modal-header h3 {
      margin: 8px 0 4px;
      font-size: 22px;
    }
    .modal-sub {
      font-size: 13px;
      color: var(--color-steel);
      margin: 0;
    }
    .close-btn {
      background: none;
      border: none;
      font-size: 28px;
      line-height: 1;
      color: var(--color-steel);
      cursor: pointer;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 20px;
    }
    @media (max-width: 600px) {
      .form-row { grid-template-columns: 1fr; gap: 0; }
      .modal-dialog { padding: 20px; }
    }
  `]
})
export class QuoteModalComponent {
  formData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    sku: '',
    message: ''
  };

  constructor(
    public quoteService: QuoteModalService,
    private toastService: ToastService
  ) {
    effect(() => {
      const ctx = this.quoteService.context();
      if (ctx) {
        this.formData.product = ctx.productName || '';
        this.formData.sku = ctx.sku || '';
      }
    });
  }

  close(): void {
    this.quoteService.close();
  }

  onSubmit(): void {
    this.toastService.show(
      `Thank you, ${this.formData.name}! Your RFQ has been submitted. A sales engineer will contact you shortly.`,
      'success',
      'RFQ Received'
    );
    this.close();
    this.formData = { name: '', company: '', email: '', phone: '', product: '', sku: '', message: '' };
  }
}
''')

save('src/app/core/layout/toast-container/toast-container.component.ts', '''import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  template: `
    <div class="toast-container">
      <div *ngFor="let t of toastService.toasts()" class="toast-item" [ngClass]="'toast-' + t.type">
        <div class="toast-body">
          <strong *ngIf="t.title" class="toast-title">{{ t.title }}</strong>
          <p class="toast-msg">{{ t.message }}</p>
        </div>
        <button (click)="toastService.remove(t.id)" class="toast-close" aria-label="Close">&times;</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 3000;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 380px;
    }
    .toast-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 14px 18px;
      border-radius: 8px;
      box-shadow: var(--shadow-md);
      background: #white;
    }
    .toast-success { border-left: 4px solid #007C7A; }
    .toast-error { border-left: 4px solid #e53e3e; }
    .toast-warning { border-left: 4px solid #F5A524; }
    .toast-body { flex: 1; }
    .toast-title { display: block; font-size: 14px; margin-bottom: 20px; }
    .toast-msg { font-size: 13px; color: var(--color-steel); margin: 0; line-height: 1.4; }
    .toast-close {
      background: none;
      border: none;
      font-size: 18px;
      line-height: 1;
      color: var(--color-steel);
      cursor: pointer;
      padding: 0 0 0 8px;
    }
  `]
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}
}
''')

print('Part 3 successful!')
