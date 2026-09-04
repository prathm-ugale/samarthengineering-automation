import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CaseStudy } from '../../../core/models/case-study.model';

@Component({
  selector: 'app-case-study-card',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="case-study-card" *ngIf="project">
      <div class="card-img-wrap">
        <img [src]="project.imageUrl" [alt]="project.title" class="case-img" loading="lazy" />
        <span class="industry-badge">{{ project.industry }}</span>
      </div>

      <div class="card-content">
        <div class="client-meta">{{ project.clientPlaceholder }}</div>

        <h3 class="project-title">
          <a [routerLink]="['/projects', project.slug]">{{ project.title }}</a>
        </h3>

        <p class="project-desc">{{ project.overview }}</p>

        <!-- RESULTS METRICS -->
        <div class="metrics-grid" *ngIf="project.results && project.results.length > 0">
          <div class="metric-pill" *ngFor="let m of project.results.slice(0, 2)">
            <span class="metric-val">{{ m.value }}</span>
            <span class="metric-lbl">{{ m.label }}</span>
          </div>
        </div>

        <div class="card-action">
          <a [routerLink]="['/projects', project.slug]" class="btn-read">
            Read Case Study &rarr;
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .case-study-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: all 0.2s ease;
    }
    .case-study-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-teal);
    }
    .card-img-wrap {
      position: relative;
      height: 180px;
      overflow: hidden;
    }
    .case-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .case-study-card:hover .case-img {
      transform: scale(1.05);
    }
    .industry-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(16, 42, 67, 0.9);
      color: white;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 4px;
    }
    .card-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .client-meta {
      font-size: 11px;
      color: var(--color-steel);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .project-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 1.35;
      margin-bottom: 10px;
    }
    .project-title a {
      color: var(--color-navy);
      text-decoration: none;
      transition: color 0.2s;
    }
    .project-title a:hover {
      color: var(--color-teal);
    }
    .project-desc {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin-bottom: 16px;
      flex: 1;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      background: var(--color-mist);
      padding: 10px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    .metric-pill {
      text-align: center;
    }
    .metric-val {
      display: block;
      font-family: var(--font-mono);
      font-size: 16px;
      font-weight: 800;
      color: var(--color-teal);
    }
    .metric-lbl {
      font-size: 10px;
      color: var(--color-steel);
      display: block;
    }
    .card-action {
      margin-top: auto;
    }
    .btn-read {
      font-size: 13px;
      font-weight: 700;
      color: var(--color-teal);
      text-decoration: none;
    }
  `]
})
export class CaseStudyCardComponent {
  @Input() project!: CaseStudy;
}