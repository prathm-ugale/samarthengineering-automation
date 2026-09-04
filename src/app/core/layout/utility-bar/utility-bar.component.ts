import { Component } from '@angular/core';

@Component({
  selector: 'app-utility-bar',
  standalone: true,
  template: `
    <div class="utility-bar">
      <div class="container utility-inner">
        <div class="utility-left">
          <span class="utility-badge">ISO 9001:2015 Certified Works &bull; Pune, India</span>
        </div>
        <div class="utility-right">
          <a href="tel:+912027128890" class="utility-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+91 (020) 2712-8890</span>
          </a>
          <span class="divider">|</span>
          <a href="mailto:sales@samarthengineering-automation.com" class="utility-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>sales@samarthengineering-automation.com</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .utility-bar {
      background: #0b1d2a;
      color: #9fb3c8;
      font-size: 12px;
      padding: 6px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .utility-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .utility-badge {
      color: var(--color-amber);
      font-weight: 600;
    }
    .utility-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .utility-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #9fb3c8;
      text-decoration: none;
      transition: color 0.2s;
    }
    .utility-link:hover {
      color: white;
    }
    .divider {
      color: rgba(255, 255, 255, 0.2);
    }
    @media (max-width: 768px) {
      .utility-left { display: none; }
      .utility-right { width: 100%; justify-content: space-between; }
    }
  `]
})
export class UtilityBarComponent {}
