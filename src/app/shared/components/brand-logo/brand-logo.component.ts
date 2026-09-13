import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="brand-logo-wrap" [class.theme-dark]="theme === 'dark'">
      <div class="gear-stack" title="Samarth Engineering Automation">
        <!-- Mode: Outer gear teeth wheel rotates while S stays upright -->
        <ng-container *ngIf="rotationMode === 'wheel-only'">
          <img 
            src="assets/images/samarth-gear-pure-wheel.png" 
            alt="Rotating Gear Wheel" 
            class="gear-rotating-layer" 
          />
          <img 
            src="assets/images/samarth-gear-inner-s.png" 
            alt="Samarth S Monogram" 
            class="gear-stationary-core" 
          />
        </ng-container>

        <!-- Mode: Full gear emblem rotates -->
        <ng-container *ngIf="rotationMode === 'full-gear'">
          <img 
            src="assets/images/samarth-gear-icon.png" 
            alt="Rotating Gear Logo" 
            class="gear-rotating-layer" 
          />
        </ng-container>
      </div>

      <!-- Typography Wordmark -->
      <img 
        [src]="theme === 'dark' ? 'assets/images/samarth-brand-text-light.png' : 'assets/images/samarth-brand-text.png'" 
        alt="Samarth Engineering Automation" 
        class="brand-text-img" 
      />
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }
    .brand-logo-wrap {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      height: 48px;
      user-select: none;
    }
    .gear-stack {
      position: relative;
      width: 48px;
      height: 48px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .gear-rotating-layer {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform-origin: center center;
      animation: spinGear 8s linear infinite;
      will-change: transform;
    }
    .gear-stationary-core {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: 2;
      pointer-events: none;
    }
    .brand-text-img {
      height: 44px;
      width: auto;
      object-fit: contain;
      display: block;
    }

    @keyframes spinGear {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 640px) {
      .brand-logo-wrap {
        height: 38px;
        gap: 8px;
      }
      .gear-stack {
        width: 38px;
        height: 38px;
      }
      .brand-text-img {
        height: 34px;
      }
    }
  `]
})
export class BrandLogoComponent {
  // Theme mode: 'light' for white navigation header, 'dark' for navy footer
  @Input() theme: 'light' | 'dark' = 'light';

  // Rotation mode: 'wheel-only' (outer gear turns around static S) or 'full-gear' (entire emblem spins)
  @Input() rotationMode: 'wheel-only' | 'full-gear' = 'wheel-only';
}
