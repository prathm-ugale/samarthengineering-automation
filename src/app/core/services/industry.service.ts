import { Injectable } from '@angular/core';
import { IndustryVertical } from '../models/industry.model';
import { INDUSTRIES_DATA } from '../data/industries.data';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  private industries: IndustryVertical[] = INDUSTRIES_DATA;

  getAllIndustries(): IndustryVertical[] {
    return [...this.industries];
  }

  getFeaturedIndustries(): IndustryVertical[] {
    return this.industries.filter(i => i.featured);
  }

  getIndustryBySlug(slug: string): IndustryVertical | undefined {
    return this.industries.find(i => i.slug === slug);
  }
}
