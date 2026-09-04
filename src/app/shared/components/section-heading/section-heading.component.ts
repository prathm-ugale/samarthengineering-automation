import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="section-heading-wrap" [class.text-center]="centered">
      <div *ngIf="badge" class="section-badge">{{ badge }}</div>
      <h2 class="section-title">{{ title }}</h2>
      <p *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</p>
    </div>
  `,
  styles: [`
    .section-heading-wrap {
      margin-bottom: 40px;
    }
    .text-center {
      text-align: center;
    }
    .section-badge {
      display: inline-block;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--color-teal);
      background: rgba(0, 124, 122, 0.1);
      padding: 4px 12px;
      border-radius: 4px;
      margin-bottom: 12px;
    }
    .section-title {
      font-size: 32px;
      font-weight: 800;
      color: var(--color-navy);
      line-height: 1.25;
      margin-bottom: 12px;
    }
    .section-subtitle {
      font-size: 16px;
      color: var(--color-steel);
      max-width: 680px;
      margin: 0;
      line-height: 1.6;
    }
    .text-center .section-subtitle {
      margin: 0 auto;
    }
    @media (max-width: 768px) {
      .section-title { font-size: 26px; }
      .section-subtitle { font-size: 14px; }
    }
  `]
})
export class SectionHeadingComponent {
  @Input() badge?: string;
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() centered: boolean = false;
}
