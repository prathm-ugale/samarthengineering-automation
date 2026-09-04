import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { IndustrialResource } from '../../../core/models/resource.model';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-resource-card',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="resource-card" *ngIf="resource">
      <div class="resource-header">
        <span class="resource-type">{{ resource.type }}</span>
        <span class="resource-format">{{ resource.format }} &bull; {{ resource.size }}</span>
      </div>

      <h3 class="resource-title">{{ resource.title }}</h3>
      <p class="resource-desc">{{ resource.description }}</p>

      <div class="resource-footer">
        <button (click)="downloadResource()" class="btn btn-secondary btn-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download {{ resource.format }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .resource-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-sm);
      transition: all 0.2s ease;
    }
    .resource-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-teal);
    }
    .resource-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    .resource-type {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-teal);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .resource-format {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--color-steel);
      background: var(--color-mist);
      padding: 2px 6px;
      border-radius: 4px;
    }
    .resource-title {
      font-size: 16px;
      font-weight: 700;
      color: var(--color-navy);
      margin-bottom: 8px;
      line-height: 1.35;
    }
    .resource-desc {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin-bottom: 20px;
      flex: 1;
    }
    .resource-footer {
      margin-top: auto;
    }
    .resource-footer .btn {
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  `]
})
export class ResourceCardComponent {
  @Input() resource!: IndustrialResource;

  constructor(private toastService: ToastService) {}

  downloadResource(): void {
    this.toastService.show(
      `Downloading ${this.resource.title} (${this.resource.size})...`,
      'success',
      'Download Started'
    );
  }
}