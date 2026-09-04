import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/category.model';
import { Product } from '../models/product.model';
import { CATEGORIES_DATA } from '../data/categories.data';
import { PRODUCTS_DATA } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: ProductCategory[] = CATEGORIES_DATA;
  private products: Product[] = PRODUCTS_DATA;

  getCategories(): ProductCategory[] {
    return this.categories.map(c => {
      const count = this.products.filter(p => p.categorySlug === c.slug).length;
      return {
        ...c,
        productCount: count > 0 ? count : c.productCount
      };
    });
  }

  getCategoryBySlug(slug: string): ProductCategory | undefined {
    const cat = this.categories.find(c => c.slug === slug);
    if (cat) {
      const count = this.products.filter(p => p.categorySlug === cat.slug).length;
      return {
        ...cat,
        productCount: count > 0 ? count : cat.productCount
      };
    }
    return undefined;
  }

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(p => p.featured);
  }

  getProductsByCategory(categorySlug: string): Product[] {
    return this.products.filter(p => p.categorySlug === categorySlug);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(query: string, categorySlug?: string, tag?: string): Product[] {
    let results = this.products;
    if (categorySlug && categorySlug !== 'all') {
      results = results.filter(p => p.categorySlug === categorySlug);
    }
    if (tag) {
      results = results.filter(p => p.tags.includes(tag));
    }
    if (query && query.trim().length > 0) {
      const q = query.toLowerCase().trim();
      results = results.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return results;
  }
}
