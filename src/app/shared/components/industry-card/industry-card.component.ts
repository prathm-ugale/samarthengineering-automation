import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { IndustryVertical } from '../../../core/models/industry.model';

@Component({
  selector: 'app-industry-card',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="industry-card" *ngIf="industry">
      <div class="card-img-wrap">
        <img [src]="industry.imageUrl" [alt]="industry.name" class="industry-img" loading="lazy" />
        <div class="gradient-overlay"></div>
        <div class="card-title-overlay">
          <span class="industry-icon">{{ industry.icon }}</span>
          <h3 class="industry-title">{{ industry.name }}</h3>
        </div>
      </div>

      <div class="card-content">
        <p class="industry-desc">{{ industry.shortDescription }}</p>

        <div class="apps-preview" *ngIf="industry.exampleApplications && industry.exampleApplications.length > 0">
          <span class="apps-label">Key Applications:</span>
          <div class="app-tags">
            <span class="app-tag" *ngFor="let app of industry.exampleApplications.slice(0, 2)">
              {{ app.title }}
            </span>
          </div>
        </div>

        <a [routerLink]="['/industries', industry.slug]" class="card-link">
          Explore {{ industry.name }} Solutions &rarr;
        </a>
      </div>
    </div>
  `,
  styles: [`
    .industry-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: all 0.2s ease;
    }
    .industry-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-teal);
    }
    .card-img-wrap {
      position: relative;
      height: 180px;
      overflow: hidden;
    }
    .industry-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .industry-card:hover .industry-img {
      transform: scale(1.05);
    }
    .gradient-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(16, 42, 67, 0.1) 0%, rgba(16, 42, 67, 0.9) 100%);
    }
    .card-title-overlay {
      position: absolute;
      bottom: 16px;
      left: 16px;
      right: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .industry-icon {
      font-size: 24px;
    }
    .industry-title {
      color: white;
      font-size: 18px;
      font-weight: 700;
      margin: 0;
    }
    .card-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .industry-desc {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin-bottom: 16px;
      flex: 1;
    }
    .apps-preview {
      margin-bottom: 16px;
    }
    .apps-label {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-navy);
      text-transform: uppercase;
      margin-bottom: 6px;
      display: block;
    }
    .app-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .app-tag {
      background: var(--color-mist);
      color: var(--color-teal);
      font-size: 11px;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 4px;
    }
    .card-link {
      font-size: 13px;
      font-weight: 700;
      color: var(--color-teal);
      text-decoration: none;
      margin-top: auto;
    }
  `]
})
export class IndustryCardComponent {
  @Input() industry!: IndustryVertical;
}