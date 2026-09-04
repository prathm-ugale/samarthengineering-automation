import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
    <div class="container section">
      <h1>Privacy Policy</h1>
      <p>Effective Date: January 1, 2026</p>
      <div class="legal-content">
        <h3>1. Information We Collect</h3>
        <p>Samarth Engineering collects information you provide directly to us through Request for Quotation (RFQ) forms, catalogue download requests, and direct communication.</p>
        
        <h3>2. Confidentiality of Engineering Drawings & CAD Data</h3>
        <p>All CAD models, part specifications, line diagrams, and operational parameters submitted to Samarth Engineering are treated with strict confidentiality under non-disclosure terms and used solely for system feasibility analysis.</p>

        <h3>3. Contact Us</h3>
        <p>If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:sales@samarthengineering.com">sales@samarthengineering.com</a>.</p>
      </div>
    </div>
  `,
  styles: [`
    .legal-content { margin-top: 24px; line-height: 1.7; color: var(--color-text); }
    .legal-content h3 { color: var(--color-navy); margin-top: 24px; margin-bottom: 8px; }
  `]
})
export class PrivacyPolicyComponent {}
