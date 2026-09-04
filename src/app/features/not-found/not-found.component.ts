import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container container">
      <div class="not-found-card">
        <span class="error-code">404</span>
        <h1>Engineering Resource Not Found</h1>
        <p>
          The page or product SKU you requested is not available, has been relocated, or may have been updated in our latest catalogue release.
        </p>
        <div class="cta-actions">
          <a routerLink="/" class="btn btn-primary btn-lg">Return to Homepage</a>
          <a routerLink="/products" class="btn btn-secondary btn-lg">Explore Catalogue</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      padding: 80px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 60vh;
    }
    .not-found-card {
      text-align: center;
      max-width: 600px;
      background: white;
      padding: 48px;
      border-radius: 12px;
      border: 1px solid var(--color-border);
      box-shadow: var(--shadow-md);
    }
    .error-code {
      display: block;
      font-family: var(--font-mono);
      font-size: 72px;
      font-weight: 800;
      color: var(--color-teal);
      line-height: 1;
      margin-bottom: 16px;
    }
    .not-found-card h1 {
      font-size: 26px;
      color: var(--color-navy);
      margin-bottom: 12px;
    }
    .not-found-card p {
      font-size: 15px;
      color: var(--color-steel);
      line-height: 1.6;
      margin-bottom: 28px;
    }
    .cta-actions {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
  `]
})
export class NotFoundComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle('404 - Page Not Found | Samarth Engineering');
  }
}
