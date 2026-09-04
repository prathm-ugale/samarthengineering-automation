export interface IndustryApplication {
  title: string;
  description: string;
  impactMetric?: string;
  benefits?: string[];
}

export interface IndustryVertical {
  id: string;
  slug: string;
  name: string;
  icon: string;
  summary?: string;
  shortDescription?: string;
  fullDescription?: string;
  heroHeadline?: string;
  heroDescription?: string;
  challenges?: { title: string; description: string }[];
  solutions?: { title: string; description: string }[];
  standards?: string[];
  recommendedCategorySlugs?: string[];
  relatedProductSlugs?: string[];
  relatedSolutionSlugs?: string[];
  exampleApplications?: IndustryApplication[];
  applications?: any;
  imageUrl: string;
  featured?: boolean;
}
