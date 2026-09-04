import { Injectable } from '@angular/core';
import { CaseStudy } from '../models/case-study.model';
import { CASE_STUDIES_DATA } from '../data/case-studies.data';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService {
  private caseStudies: CaseStudy[] = CASE_STUDIES_DATA;

  getAllCaseStudies(): CaseStudy[] {
    return [...this.caseStudies];
  }

  getFeaturedCaseStudies(): CaseStudy[] {
    return this.caseStudies.filter(c => c.featured);
  }

  getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return this.caseStudies.find(c => c.slug === slug);
  }
}
