import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  template: `
    <div class="container section">
      <h1>Terms of Use</h1>
      <p>Effective Date: January 1, 2026</p>
      <div class="legal-content">
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.</p>

        <h3>2. Engineering Specifications & Sizing Disclaimer</h3>
        <p>Product dimensions, load curves, stroke tolerances, and technical datasheets provided on this website are for engineering reference. Final sizing calculations should be verified with our application engineering team prior to production procurement.</p>

        <h3>3. Jurisdiction</h3>
        <p>Any disputes arising out of the use of this website or engineering quotations issued shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.</p>
      </div>
    </div>
  `,
  styles: [`
    .legal-content { margin-top: 24px; line-height: 1.7; color: var(--color-text); }
    .legal-content h3 { color: var(--color-navy); margin-top: 24px; margin-bottom: 8px; }
  `]
})
export class TermsOfUseComponent {}
