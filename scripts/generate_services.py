# -*- coding: utf-8 -*-
import os

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


save('src/app/core/services/product.service.ts', '''import { Injectable } from '@angular/core';
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
    return [...this.categories];
  }

  getCategoryBySlug(slug: string): ProductCategory | undefined {
    return this.categories.find(c => c.slug === slug);
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
''')

save('src/app/core/services/solution.service.ts', '''import { Injectable } from '@angular/core';
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
''')

save('src/app/core/services/industry.service.ts', '''import { Injectable } from '@angular/core';
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
''')

save('src/app/core/services/case-study.service.ts', '''import { Injectable } from '@angular/core';
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
''')

save('src/app/core/services/resource.service.ts', '''import { Injectable } from '@angular/core';
import { IndustrialResource } from '../models/resource.model';
import { RESOURCES_DATA } from '../data/resources.data';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: IndustrialResource[] = RESOURCES_DATA;

  getAllResources(): IndustrialResource[] {
    return [...this.resources];
  }

  getResourcesByType(type: string): IndustrialResource[] {
    if (!type || type === 'all') return this.getAllResources();
    return this.resources.filter(r => r.type === type);
  }
}
''')

save('src/app/core/services/quote-modal.service.ts', '''import { Injectable, signal } from '@angular/core';

export interface QuoteContext {
  productName?: string;
  sku?: string;
  source?: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteModalService {
  isOpen = signal<boolean>(false);
  context = signal<QuoteContext | null>(null);

  open(ctx?: QuoteContext): void {
    this.context.set(ctx || null);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    this.context.set(null);
  }
}
''')

save('src/app/core/services/toast.service.ts', '''import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: string;
  title?: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  durationMs?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts = signal<ToastMessage[]>([]);

  show(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success', title?: string, durationMs: number = 4000): void {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id, title, message, type, durationMs };
    this.toasts.update(list => [...list, newToast]);

    setTimeout(() => {
      this.remove(id);
    }, durationMs);
  }

  remove(id: string): void {
    this.toasts.update(list => list.filter(t => t.id !== id));
  }
}
''')

save('src/app/core/services/seo.service.ts', '''import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  setTitle(title: string): void {
    this.titleService.setTitle(`${title} | Samarth Engineering`);
  }

  setMetaData(description: string, keywords?: string): void {
    this.metaService.updateTag({ name: 'description', content: description });
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }
    this.metaService.updateTag({ property: 'og:description', content: description });
  }
}
''')

print('All services successfully generated!')
