import { Injectable } from '@angular/core';
import { AutomationSolution } from '../models/solution.model';
import { SOLUTIONS_DATA } from '../data/solutions.data';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  private solutions: AutomationSolution[] = SOLUTIONS_DATA;

  getAllSolutions(): AutomationSolution[] {
    return [...this.solutions];
  }

  getFeaturedSolutions(): AutomationSolution[] {
    return this.solutions.filter(s => s.featured);
  }

  getSolutionBySlug(slug: string): AutomationSolution | undefined {
    return this.solutions.find(s => s.slug === slug);
  }
}
