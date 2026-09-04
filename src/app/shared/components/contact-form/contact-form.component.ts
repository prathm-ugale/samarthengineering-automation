import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="contact-card">
      <div class="card-header">
        <span class="badge badge-teal">Direct Line</span>
        <h3>Speak to an Application Engineer</h3>
        <p>Get technical feedback, 3D CAD models, or a budgetary quotation within 24 hours.</p>
      </div>

      <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="form-grid">
        <div class="form-row">
          <div class="form-group">
            <label for="fullName">Full Name <span class="req">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              [(ngModel)]="formData.fullName"
              required
              class="form-control"
              placeholder="e.g. Rajesh Sharma"
            />
          </div>

          <div class="form-group">
            <label for="company">Company / Factory Name <span class="req">*</span></label>
            <input
              type="text"
              id="company"
              name="company"
              [(ngModel)]="formData.company"
              required
              class="form-control"
              placeholder="e.g. Pune Auto Components Ltd."
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="email">Work Email Address <span class="req">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
              required
              class="form-control"
              placeholder="name@company.com"
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone / WhatsApp Number <span class="req">*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              [(ngModel)]="formData.phone"
              required
              class="form-control"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="interest">Area of Interest <span class="req">*</span></label>
            <select
              id="interest"
              name="interest"
              [(ngModel)]="formData.interest"
              class="form-control"
            >
              <option value="Standard Components Catalogue">Standard Components Catalogue (Motion, Pneumatics)</option>
              <option value="Turnkey SPM / Automation Machine">Turnkey SPM / Automation Machine</option>
              <option value="Robotic Cell / Palletizing">Robotic Cell / Palletizing System</option>
              <option value="Machine Vision / Quality Inspection">Machine Vision / Quality Inspection</option>
              <option value="Pan-India Spares & AMC Support">Pan-India Spares & AMC Support</option>
            </select>
          </div>

          <div class="form-group">
            <label for="timeline">Target Delivery Timeline</label>
            <select
              id="timeline"
              name="timeline"
              [(ngModel)]="formData.timeline"
              class="form-control"
            >
              <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks / Stock)</option>
              <option value="1-2 Months">1-2 Months</option>
              <option value="3-6 Months">3-6 Months</option>
              <option value="Budgetary Planning">Budgetary / Feasibility Stage</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="projectDetails">Technical Requirements / Component Sizing Details <span class="req">*</span></label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            [(ngModel)]="formData.projectDetails"
            required
            rows="4"
            class="form-control"
            placeholder="Specify stroke, payload, cycle time, operating environment, or part drawings..."
          ></textarea>
        </div>

        <button
          type="submit"
          [disabled]="!contactForm.form.valid || isSubmitting"
          class="btn btn-primary btn-lg w-100 submit-btn"
        >
          {{ isSubmitting ? 'Transmitting Request...' : 'Send Engineering Inquiry' }}
        </button>

        <p class="privacy-note">
          Your technical drawings and specifications are protected under strict NDA confidentiality.
        </p>
      </form>
    </div>
  `,
  styles: [`
    .contact-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
      box-shadow: var(--shadow-md);
    }
    .card-header {
      margin-bottom: 24px;
    }
    .card-header h3 {
      font-size: 22px;
      color: var(--color-navy);
      margin: 10px 0 6px;
    }
    .card-header p {
      font-size: 14px;
      color: var(--color-steel);
      margin: 0;
    }
    .form-grid {
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
      font-size: 13px;
      font-weight: 600;
      color: var(--color-navy);
    }
    .req {
      color: #e53e3e;
    }
    .form-control {
      padding: 10px 14px;
      font-size: 14px;
      border: 1px solid var(--color-border);
      border-radius: 6px;
      background: white;
      color: var(--color-text);
      outline: none;
      transition: border-color 0.2s;
    }
    .form-control:focus {
      border-color: var(--color-teal);
      box-shadow: 0 0 0 3px rgba(0, 124, 122, 0.1);
    }
    .submit-btn {
      margin-top: 8px;
      padding: 14px;
      font-size: 16px;
    }
    .privacy-note {
      font-size: 12px;
      color: var(--color-steel);
      text-align: center;
      margin: 8px 0 0;
    }
    @media (max-width: 600px) {
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactFormComponent {
  isSubmitting = false;
  formData = {
    fullName: '',
    company: '',
    email: '',
    phone: '',
    interest: 'Turnkey SPM / Automation Machine',
    timeline: 'Immediate (1-2 Weeks)',
    projectDetails: ''
  };

  constructor(private toastService: ToastService) {}

  onSubmit(): void {
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.toastService.show(
        `Thank you, ${this.formData.fullName}. An application engineer will contact you at ${this.formData.email} within 24 hours.`,
        'success',
        'Inquiry Submitted'
      );
      this.formData = {
        fullName: '',
        company: '',
        email: '',
        phone: '',
        interest: 'Turnkey SPM / Automation Machine',
        timeline: 'Immediate (1-2 Weeks)',
        projectDetails: ''
      };
    }, 800);
  }
}