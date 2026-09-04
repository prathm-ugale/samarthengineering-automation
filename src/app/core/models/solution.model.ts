export interface SolutionProcessStep {
  step?: number;
  stepNumber?: number;
  title: string;
  description: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface AutomationSolution {
  id: string;
  slug: string;
  title: string;
  heroHeadline?: string;
  shortDescription?: string;
  summary?: string;
  fullDescription?: string;
  outcomeStatement?: string;
  icon: string;
  challenges?: { title: string; description: string }[];
  howWeHelp?: { title: string; description: string }[];
  capabilities?: string[];
  keyFeatures?: string[];
  targetIndustries?: string[];
  typicalApplications?: string[];
  applications?: string[];
  deliveryProcess?: SolutionProcessStep[];
  processSteps?: SolutionProcessStep[];
  relatedCategorySlugs?: string[];
  relatedProductSlugs?: string[];
  faqs?: SolutionFaq[];
  imageUrl: string;
  heroImage?: string;
  featured?: boolean;
}
