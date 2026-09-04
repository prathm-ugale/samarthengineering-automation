import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface CrumbItem {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol class="crumb-list">
        <li class="crumb-item">
          <a routerLink="/">Home</a>
          <span class="separator">/</span>
        </li>
        <li *ngFor="let item of items; let last = last" class="crumb-item" [class.active]="last">
          <a *ngIf="!last && item.url" [routerLink]="item.url">{{ item.label }}</a>
          <span *ngIf="last || !item.url" aria-current="page">{{ item.label }}</span>
          <span *ngIf="!last" class="separator">/</span>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumbs {
      font-size: 13px;
      margin-bottom: 12px;
    }
    .crumb-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
    }
    .crumb-item {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #9fb3c8;
    }
    .crumb-item a {
      color: #9fb3c8;
      text-decoration: none;
      transition: color 0.2s;
    }
    .crumb-item a:hover {
      color: var(--color-teal);
    }
    .crumb-item.active span {
      color: var(--color-steel);
      font-weight: 600;
    }
    .separator {
      color: rgba(255, 255, 255, 0.4);
    }
  `]
})
export class BreadcrumbsComponent {
  @Input() items: CrumbItem[] = [];
}