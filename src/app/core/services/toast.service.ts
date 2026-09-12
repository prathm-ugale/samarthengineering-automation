import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: string;
  title?: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  durationMs?: number;
}

// Global toast notification service for alerts, confirmations, and warnings
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // Reactive list of active toast notifications
  toasts = signal<ToastMessage[]>([]);

  // Displays a new toast message and schedules automatic removal
  show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success', title?: string, durationMs: number = 4000): void {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id, title, message, type, durationMs };
    this.toasts.update(list => [...list, newToast]);

    setTimeout(() => {
      this.remove(id);
    }, durationMs);
  }

  // Dismisses a toast message by its unique ID
  remove(id: string): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
