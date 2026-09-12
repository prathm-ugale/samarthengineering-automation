import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

// Manages dynamic document title and meta tags for search engine optimization and social sharing
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultDescription = 'Samarth Engineering - Leading Indian automation services and industrial components provider based in Pune.';

  constructor(private titleService: Title, private metaService: Meta) {}

  // Sets the browser tab title with Samarth Engineering branding suffix
  setTitle(title: string): void {
    this.titleService.setTitle(`${title} | Samarth Engineering`);
  }

  // Updates description, keywords, and OpenGraph meta tags for the current route
  setMetaData(description?: string, keywords?: string): void {
    const desc = description || this.defaultDescription;
    this.metaService.updateTag({ name: 'description', content: desc });
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }
    this.metaService.updateTag({ property: 'og:description', content: desc });
  }
}
