import { Component, effect } from '@angular/core';
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
              <label>Full Name <span class="req">*</span></label>
              <input type="text" required [(ngModel)]="formData.name" name="name" placeholder="e.g. Rajesh Sharma" />
            </div>
            <div class="form-group">
              <label>Company Name <span class="req">*</span></label>
              <input type="text" required [(ngModel)]="formData.company" name="company" placeholder="e.g. Tata Motors Ltd" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Business Email <span class="req">*</span></label>
              <input type="email" required [(ngModel)]="formData.email" name="email" placeholder="rajesh@company.com" />
            </div>
            <div class="form-group">
              <label>Phone / WhatsApp <span class="req">*</span></label>
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
            <label>Application / Project Requirements <span class="req">*</span></label>
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
      background: rgba(11, 30, 51, 0.72);
      backdrop-filter: blur(8px);
      z-index: 100000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: modalFadeIn 0.2s ease-out;
    }
    .modal-dialog {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      width: 100%;
      max-width: 620px;
      padding: 32px;
      box-shadow: 0 25px 60px -15px rgba(11, 30, 51, 0.4), 0 0 0 1px rgba(11, 30, 51, 0.06);
      position: relative;
      max-height: 90vh;
      overflow-y: auto;
      box-sizing: border-box;
      animation: modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #edf2f7;
    }
    .badge-teal {
      display: inline-block;
      font-size: 0.72rem;
      font-weight: 700;
      color: #007c7a;
      background: rgba(0, 124, 122, 0.1);
      padding: 4px 10px;
      border-radius: 9999px;
      margin-bottom: 8px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .modal-header h3 {
      margin: 4px 0 6px;
      font-size: 1.45rem;
      font-weight: 800;
      color: #0b1e33;
      letter-spacing: -0.01em;
    }
    .modal-sub {
      font-size: 0.88rem;
      color: #64748b;
      margin: 0;
      line-height: 1.4;
    }
    .close-btn {
      background: #f1f5f9;
      border: none;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      line-height: 1;
      color: #64748b;
      cursor: pointer;
      transition: all 0.2s ease;
      flex-shrink: 0;
      margin-left: 12px;
    }
    .close-btn:hover {
      background: #e2e8f0;
      color: #0b1e33;
      transform: scale(1.06);
    }
    .modal-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .form-group label {
      font-size: 0.8rem;
      font-weight: 700;
      color: #1e293b;
      letter-spacing: 0.03em;
      text-transform: uppercase;
    }
    .req {
      color: #f07822;
      font-weight: 800;
    }
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 11px 14px;
      font-size: 0.92rem;
      color: #0b1e33;
      background: #f8fafc;
      border: 1.5px solid #cbd5e1;
      border-radius: 8px;
      transition: all 0.2s ease;
      font-family: inherit;
      box-sizing: border-box;
    }
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      background: #ffffff;
      border-color: #007c7a;
      box-shadow: 0 0 0 3.5px rgba(0, 124, 122, 0.15);
    }
    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #94a3b8;
    }
    .form-group textarea {
      resize: vertical;
      min-height: 85px;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 8px;
      padding-top: 18px;
      border-top: 1px solid #edf2f7;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.92rem;
      font-weight: 700;
      padding: 11px 24px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }
    .btn-secondary {
      background: #f1f5f9;
      color: #475569;
      border: 1.5px solid #cbd5e1;
    }
    .btn-secondary:hover {
      background: #e2e8f0;
      color: #0f172a;
    }
    .btn-primary {
      background: linear-gradient(135deg, #f07822 0%, #d45e10 100%);
      color: #ffffff;
      box-shadow: 0 4px 14px rgba(240, 120, 34, 0.35);
    }
    .btn-primary:hover {
      background: linear-gradient(135deg, #ffa82e 0%, #f07822 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(240, 120, 34, 0.45);
    }
    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes modalSlideUp {
      from { opacity: 0; transform: translateY(16px) scale(0.98); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @media (max-width: 600px) {
      .form-row { grid-template-columns: 1fr; gap: 16px; }
      .modal-dialog { padding: 20px; }
    }
  `]
})
export class QuoteModalComponent {
  // RFQ inquiry form data model captured from user inputs
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
    // Quote modal state and contextual prefill service
    public quoteService: QuoteModalService,
    // Toast notification service to display user feedback alerts
    private toastService: ToastService
  ) {
    // Synchronize form fields whenever a product/sku context is passed to the quote service
    effect(() => {
      const ctx = this.quoteService.context();
      if (ctx) {
        this.formData.product = ctx.productName || '';
        this.formData.sku = ctx.sku || '';
      }
    });
  }

  // Closes the RFQ modal overlay
  close(): void {
    this.quoteService.close();
  }

  // Submits the RFQ inquiry, shows confirmation toast, and resets the form state
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
