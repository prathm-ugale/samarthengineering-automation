import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { AutomationSolution } from '../../../core/models/solution.model';

@Component({
  selector: 'app-solution-card',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="solution-card" *ngIf="solution">
      <div class="card-img-wrap">
        <img [src]="solution.imageUrl" [alt]="solution.title" class="card-img" loading="lazy" />
        <div class="card-overlay">
          <span class="outcome-badge">{{ solution.outcomeStatement }}</span>
        </div>
      </div>

      <div class="card-body">
        <h3 class="solution-title">
          <a [routerLink]="['/solutions', solution.slug]">{{ solution.title }}</a>
        </h3>
        <p class="solution-lead">{{ solution.shortDescription }}</p>

        <div class="capabilities-list" *ngIf="solution.capabilities && solution.capabilities.length > 0">
          <div class="cap-tag" *ngFor="let cap of solution.capabilities.slice(0, 3)">
            &check; {{ cap }}
          </div>
        </div>

        <div class="card-footer">
          <a [routerLink]="['/solutions', solution.slug]" class="btn-link">
            Explore Architecture &rarr;
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .solution-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: all 0.2s ease;
    }
    .solution-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-teal);
    }
    .card-img-wrap {
      position: relative;
      height: 200px;
      overflow: hidden;
    }
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    .solution-card:hover .card-img {
      transform: scale(1.05);
    }
    .card-overlay {
      position: absolute;
      bottom: 12px;
      left: 12px;
      right: 12px;
    }
    .outcome-badge {
      background: rgba(16, 42, 67, 0.9);
      backdrop-filter: blur(4px);
      color: var(--color-amber);
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 4px;
      display: inline-block;
      border: 1px solid rgba(245, 165, 36, 0.3);
    }
    .card-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .solution-title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .solution-title a {
      color: var(--color-navy);
      text-decoration: none;
      transition: color 0.2s;
    }
    .solution-title a:hover {
      color: var(--color-teal);
    }
    .solution-lead {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin-bottom: 16px;
      flex: 1;
    }
    .capabilities-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 16px;
    }
    .cap-tag {
      font-size: 12px;
      color: var(--color-navy);
      font-weight: 600;
    }
    .card-footer {
      border-top: 1px solid var(--color-border);
      padding-top: 14px;
      margin-top: auto;
    }
    .btn-link {
      font-size: 13px;
      font-weight: 700;
      color: var(--color-teal);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
  `]
})
export class SolutionCardComponent {
  @Input() solution!: AutomationSolution;
}