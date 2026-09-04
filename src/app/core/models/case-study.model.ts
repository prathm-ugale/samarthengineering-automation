export interface CaseStudyMetric {
  value: string;
  label: string;
  description?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  clientPlaceholder?: string;
  client?: string;
  location?: string;
  summary?: string;
  overview?: string;
  challenge: string;
  solution: string;
  productsUsed: string[];
  results?: CaseStudyMetric[];
  metrics?: CaseStudyMetric[];
  engineeringApproach?: string[];
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
    company: string;
  };
  imageUrl: string;
  featured?: boolean;
}
