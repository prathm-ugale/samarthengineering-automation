import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProductCategory } from '../../models/category.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-col company-col">
            <div class="footer-brand">
              <img src="assets/images/logo-light.svg" alt="Samarth Engineering" class="footer-logo-img" />
            </div>
            <p class="footer-desc">
              Pioneering Indian factory automation, precision motion control, pneumatic systems, robotics, and industrial components engineered in Bhosari MIDC, Pune.
            </p>
            <div class="iso-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D2CE" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v5c0 6 8 10 8 10z"/></svg>
              <span>ISO 9001:2015 Quality Assured Works</span>
            </div>
          </div>

          <div class="footer-col">
            <h4>Product Categories</h4>
            <ul>
              <li *ngFor="let c of categories">
                <a [routerLink]="['/products', c.slug]">{{ c.name }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Engineering Solutions</h4>
            <ul>
              <li><a routerLink="/solutions">Custom SPM Machines</a></li>
              <li><a routerLink="/solutions">Robotic Palletizing Cells</a></li>
              <li><a routerLink="/industries">Automotive & EV Automation</a></li>
              <li><a routerLink="/industries">Pharmaceutical & Medical</a></li>
              <li><a routerLink="/projects">Case Studies & ROI Metrics</a></li>
              <li><a routerLink="/resources">Technical Guides & Calculations</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Pune Works & HQ</h4>
            <p class="contact-text">
              <strong>Samarth Engineering Works Pvt. Ltd.</strong><br>
              Plot No. A-45/2, MIDC Industrial Area,<br>
              Bhosari, Pune - 411026,<br>
              Maharashtra, India
            </p>
            <div class="contact-links">
              <a href="tel:+912027128890" class="c-link">+91 (020) 2712-8890</a>
              <a href="mailto:sales@samarthengineering-automation.com" class="c-link">sales@samarthengineering-automation.com</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="copyright">
            &copy; 2026 Samarth Engineering Works Pvt. Ltd. All rights reserved.
          </div>
          <div class="footer-legal">
            <a routerLink="/privacy-policy">Privacy Policy</a>
            <a routerLink="/terms-of-use">Terms of Use</a>
            <a routerLink="/contact">Plant Tour & Consultation</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      background: #0b1d2a;
      color: #9fb3c8;
      padding: 60px 0 24px;
      border-top: 3px solid var(--color-teal);
    }
    .footer-top {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
      gap: 40px;
      margin-bottom: 48px;
    }
    .company-col {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .footer-brand {
      display: flex;
      align-items: center;
    }
    .footer-logo-img {
      height: 48px;
      width: auto;
    }
    .footer-desc {
      font-size: 13px;
      line-height: 1.6;
      color: #9fb3c8;
      margin: 0;
    }
    .iso-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(0, 210, 206, 0.1);
      border: 1px solid rgba(0, 210, 206, 0.3);
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 12px;
      color: #00D2CE;
      font-weight: 600;
      width: fit-content;
    }
    .footer-col h4 {
      color: white;
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 16px;
      letter-spacing: 0.5px;
    }
    .footer-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .footer-col a {
      color: #9fb3c8;
      text-decoration: none;
      font-size: 13px;
      transition: color 0.2s;
    }
    .footer-col a:hover {
      color: var(--color-teal);
    }
    .contact-text {
      font-size: 13px;
      line-height: 1.6;
      margin-bottom: 12px;
    }
    .contact-links {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .c-link {
      color: var(--color-amber) !important;
      font-weight: 600;
      font-size: 13px;
    }
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    }
    .footer-legal {
      display: flex;
      gap: 20px;
    }
    .footer-legal a {
      color: #9fb3c8;
      text-decoration: none;
    }
    .footer-legal a:hover {
      color: white;
    }
    @media (max-width: 992px) {
      .footer-top { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 600px) {
      .footer-top { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
    }
  `]
})
export class FooterComponent {
  categories: ProductCategory[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }
}