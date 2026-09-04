export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  description?: string;
  icon: string;
  productCount: number;
  highlightBullets: string[];
  highlights?: string[];
  imageUrl: string;
}
