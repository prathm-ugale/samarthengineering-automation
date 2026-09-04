import { Component } from '@angular/core';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  template: `
    <div class="toast-container">
      <div *ngFor="let t of toastService.toasts()" class="toast-item" [ngClass]="'toast-' + t.type">
        <div class="toast-body">
          <strong *ngIf="t.title" class="toast-title">{{ t.title }}</strong>
          <p class="toast-msg">{{ t.message }}</p>
        </div>
        <button (click)="toastService.remove(t.id)" class="toast-close" aria-label="Close">&times;</button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 3000;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 380px;
    }
    .toast-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 14px 18px;
      border-radius: 8px;
      box-shadow: var(--shadow-md);
      background: #white;
    }
    .toast-success { border-left: 4px solid #007C7A; }
    .toast-error { border-left: 4px solid #e53e3e; }
    .toast-warning { border-left: 4px solid #F5A524; }
    .toast-body { flex: 1; }
    .toast-title { display: block; font-size: 14px; margin-bottom: 20px; }
    .toast-msg { font-size: 13px; color: var(--color-steel); margin: 0; line-height: 1.4; }
    .toast-close {
      background: none;
      border: none;
      font-size: 18px;
      line-height: 1;
      color: var(--color-steel);
      cursor: pointer;
      padding: 0 0 0 8px;
    }
  `]
})
export class ToastContainerComponent {
  constructor(public toastService: ToastService) {}
}
