export interface ProductSpec {
  name: string;
  value: string;
  category?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  sku: string;
  categorySlug: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: ProductSpec[];
  applications: string[];
  brand: string;
  tags: string[];
  inStock: boolean;
  datasheetUrl?: string;
  imageUrl: string;
  gallery: string[];
  relatedProductIds: string[];
  featured?: boolean;
}
