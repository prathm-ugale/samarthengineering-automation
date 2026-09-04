import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { BreadcrumbsComponent, CrumbItem } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ContactFormComponent,
    BreadcrumbsComponent
  ],
  template: `
    <div class="page-header">
      <div class="container">
        <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        <h1 class="page-title">Contact Our Engineering Team</h1>
        <p class="page-subtitle">
          Connect directly with our automation consultants, application engineers, and sales support in Bhosari MIDC, Pune.
        </p>
      </div>
    </div>

    <div class="container page-content">
      <div class="contact-layout">
        <!-- CONTACT INFORMATION & LOCATIONS -->
        <div class="contact-info-col">
          <!-- HQ CARD -->
          <div class="info-card">
            <div class="card-tag">Headquarters & Works</div>
            <h2>Samarth Engineering Works Pvt. Ltd.</h2>
            <p class="hq-addr">
              <strong>Plot No. A-45/2, MIDC Industrial Area</strong><br />
              Bhosari, Pune &ndash; 411026<br />
              Maharashtra, India
            </p>

            <div class="contact-channels">
              <div class="channel-row">
                <span class="c-icon">&#128222;</span>
                <div>
                  <strong>Phone / Sales Desk:</strong>
                  <a href="tel:+912027128890">+91 (020) 2712-8890</a> / <a href="tel:+919822044551">+91 98220 44551</a>
                </div>
              </div>

              <div class="channel-row">
                <span class="c-icon">&#9993;</span>
                <div>
                  <strong>Direct Inquiries:</strong>
                  <a href="mailto:sales@samarthengineering-automation.com">sales@samarthengineering-automation.com</a>
                </div>
              </div>

              <div class="channel-row">
                <span class="c-icon">&#128337;</span>
                <div>
                  <strong>Plant Hours:</strong>
                  <span>Monday &ndash; Saturday: 8:30 AM &ndash; 6:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          <!-- REGIONAL HUBS -->
          <div class="info-card regional-card">
            <h3>Pan-India Technical Field Support</h3>
            <p class="reg-sub">On-site installation, commissioning, and AMC service support across India:</p>

            <div class="hubs-grid">
              <div class="hub-item">
                <strong>Pune (HQ)</strong>
                <span>Maharashtra & Goa</span>
              </div>
              <div class="hub-item">
                <strong>Ahmedabad</strong>
                <span>Gujarat Region</span>
              </div>
              <div class="hub-item">
                <strong>Bengaluru</strong>
                <span>Karnataka & AP</span>
              </div>
              <div class="hub-item">
                <strong>Chennai</strong>
                <span>Tamil Nadu Region</span>
              </div>
              <div class="hub-item">
                <strong>Delhi NCR</strong>
                <span>North India Hub</span>
              </div>
              <div class="hub-item">
                <strong>Hyderabad</strong>
                <span>Telangana & East</span>
              </div>
            </div>
          </div>
        </div>

        <!-- FORM COMPONENT -->
        <div class="contact-form-col">
          <app-contact-form></app-contact-form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: var(--color-navy);
      color: white;
      padding: 40px 0;
      margin-bottom: 40px;
    }
    .page-title {
      font-size: 36px;
      font-weight: 800;
      color: white;
      margin-bottom: 12px;
    }
    .page-subtitle {
      font-size: 16px;
      color: #d9e2ec;
      max-width: 800px;
      line-height: 1.6;
      margin: 0;
    }
    .contact-layout {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 40px;
      align-items: start;
    }
    .contact-info-col {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .info-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 32px;
      box-shadow: var(--shadow-sm);
    }
    .card-tag {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-teal);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
    .info-card h2 {
      font-size: 22px;
      font-weight: 800;
      color: var(--color-navy);
      margin-bottom: 14px;
    }
    .hq-addr {
      font-size: 15px;
      line-height: 1.6;
      color: var(--color-text);
      margin-bottom: 24px;
    }
    .contact-channels {
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-top: 1px solid var(--color-border);
      padding-top: 20px;
    }
    .channel-row {
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .c-icon {
      font-size: 20px;
    }
    .channel-row strong {
      display: block;
      font-size: 13px;
      color: var(--color-navy);
    }
    .channel-row a {
      color: var(--color-teal);
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
    }
    .channel-row span {
      font-size: 13px;
      color: var(--color-steel);
    }
    .regional-card h3 {
      font-size: 18px;
      color: var(--color-navy);
      margin-bottom: 6px;
    }
    .reg-sub {
      font-size: 13px;
      color: var(--color-steel);
      margin-bottom: 16px;
    }
    .hubs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .hub-item {
      background: var(--color-mist);
      padding: 10px 14px;
      border-radius: 6px;
      border-left: 3px solid var(--color-teal);
    }
    .hub-item strong {
      display: block;
      font-size: 13px;
      color: var(--color-navy);
    }
    .hub-item span {
      font-size: 11px;
      color: var(--color-steel);
    }
    @media (max-width: 900px) {
      .contact-layout { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent implements OnInit {
  breadcrumbs: CrumbItem[] = [
    { label: 'Contact Us' }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle('Contact Samarth Engineering - Pune Works & Regional Support');
    this.seoService.setMetaData('Contact our Bhosari MIDC, Pune works for special purpose machines (SPM), robotic cells, and industrial automation components.');
  }
}
