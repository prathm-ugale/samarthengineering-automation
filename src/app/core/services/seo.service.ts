import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultDescription = 'Samarth Engineering - Leading Indian automation services and industrial components provider based in Pune.';

  constructor(private titleService: Title, private metaService: Meta) {}

  setTitle(title: string): void {
    this.titleService.setTitle(`${title} | Samarth Engineering`);
  }

  setMetaData(description?: string, keywords?: string): void {
    const desc = description || this.defaultDescription;
    this.metaService.updateTag({ name: 'description', content: desc });
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }
    this.metaService.updateTag({ property: 'og:description', content: desc });
  }
}
