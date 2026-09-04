# -*- coding: utf-8 -*-
import os

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


save('src/app/core/layout/utility-bar/utility-bar.component.ts', '''import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-utility-bar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="utility-bar">
      <div class="container utility-content">
        <div class="utility-left">
          <span class="utility-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 12 22c5-9 7-16.75 7-13 0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            Pune Manufacturing HQ & Automation Centre, India
          </span>
          <span class="utility-item hide-mobile">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v5c0 6 8 10 8 10z"/></svg>
            ISO 9001:2015 Certified
          </span>
        </div>
        <div class="utility-right">
          <a href="mailto:sales@samarthengineering.com" class="utility-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            sales@samarthengineering.com
          </a>
          <a href="tel:+912027128890" class="utility-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +91 (020) 2712-8890
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .utility-bar {
      background-color: #0b1d2a;
      color: #9fb3c8;
      font-size: 12px;
      padding: 6px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .utility-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .utility-left, .utility-right {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .utility-item, .utility-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #9fb3c8;
      text-decoration: none;
      transition: color 0.2s;
    }
    .utility-link:hover {
      color: #62b6ff;
    }
    @media (max-width: 768px) {
      .hide-mobile { display: none; }
      .utility-left { font-size: 11px; }
      .utility-right { gap: 10px; font-size: 11px; }
    }
  `]
})
export class UtilityBarComponent {}
''')
