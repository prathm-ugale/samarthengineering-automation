import { Injectable } from '@angular/core';
import { ProductCategory } from '../models/category.model';
import { Product } from '../models/product.model';
import { CATEGORIES_DATA } from '../data/categories.data';
import { PRODUCTS_DATA } from '../data/products.data';

// Manages catalog data queries for product categories, items, and search filtering
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: ProductCategory[] = CATEGORIES_DATA;
  private products: Product[] = PRODUCTS_DATA;

  // Returns all product categories with dynamically calculated product counts
  getCategories(): ProductCategory[] {
    return this.categories.map(c => {
      const count = this.products.filter(p => p.categorySlug === c.slug).length;
      return {
        ...c,
        productCount: count > 0 ? count : c.productCount
      };
    });
  }

  // Finds a specific category by URL slug and attaches its product count
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

  // Returns an immutable copy of all products in the catalog
  getAllProducts(): Product[] {
    return [...this.products];
  }

  // Filters products flagged as featured for homepage showcase
  getFeaturedProducts(): Product[] {
    return this.products.filter(p => p.featured);
  }

  // Filters products belonging to a specific category slug
  getProductsByCategory(categorySlug: string): Product[] {
    return this.products.filter(p => p.categorySlug === categorySlug);
  }

  // Finds a single product by unique URL slug
  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  // Finds a single product by its unique internal ID
  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  // Performs multi-criteria search filtering by keywords, category, and tags
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
