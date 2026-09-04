import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { ProductService } from '../../../core/services/product.service';
import { SeoService } from '../../../core/services/seo.service';
import { ProductCategory } from '../../../core/models/category.model';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    RouterLink,
    NgFor,
    NgIf,
    FormsModule,
    ProductCardComponent,
    BreadcrumbsComponent
  ],
  template: `
    <div class="page-header">
      <div class="container">
        <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        <h1 class="page-title">{{ currentCategory ? currentCategory.name : 'All Industrial Products' }}</h1>
        <p class="page-subtitle">
          {{ currentCategory ? currentCategory.description : 'High-precision linear motion, pneumatic actuators, servo motors, robotics, and sensors engineered for 24/7 industrial uptime.' }}
        </p>
      </div>
    </div>

    <div class="container page-content">
      <div class="catalogue-layout">
        <!-- SIDEBAR FILTERS -->
        <aside class="catalogue-sidebar">
          <div class="filter-box">
            <h3 class="filter-heading">Search Catalogue</h3>
            <div class="search-input-wrap">
              <input
                type="text"
                [(ngModel)]="searchQuery"
                (input)="applyFilters()"
                placeholder="Search SKU, name, specs..."
                class="filter-search"
              />
            </div>
          </div>

          <div class="filter-box">
            <h3 class="filter-heading">Product Categories</h3>
            <ul class="cat-filter-list">
              <li>
                <a
                  [routerLink]="['/products']"
                  [class.active]="!selectedCategorySlug"
                  (click)="selectCategory('')"
                >
                  <span>All Categories</span>
                  <span class="cat-pill">{{ allProductsCount }}</span>
                </a>
              </li>
              <li *ngFor="let cat of categories">
                <a
                  [routerLink]="['/products', cat.slug]"
                  [class.active]="selectedCategorySlug === cat.slug"
                  (click)="selectCategory(cat.slug)"
                >
                  <span>{{ cat.name }}</span>
                  <span class="cat-pill">{{ cat.productCount }}</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="filter-box" *ngIf="availableIndustries.length > 0">
            <h3 class="filter-heading">Filter by Application / Sector</h3>
            <div class="checkbox-group">
              <label *ngFor="let ind of availableIndustries" class="checkbox-label">
                <input
                  type="checkbox"
                  [checked]="selectedIndustries.includes(ind)"
                  (change)="toggleIndustry(ind)"
                />
                <span>{{ ind }}</span>
              </label>
            </div>
          </div>

          <div class="filter-box banner-box">
            <h4>Custom Engineering RFQ?</h4>
            <p>Need modified strokes, special coatings, or custom mounting flanges?</p>
            <a routerLink="/contact" class="btn btn-secondary btn-sm w-100">Consult Engineer</a>
          </div>
        </aside>

        <!-- PRODUCTS MAIN GRID -->
        <main class="catalogue-main">
          <!-- TOP TOOLBAR -->
          <div class="toolbar">
            <div class="results-count">
              Showing <strong>{{ filteredProducts.length }}</strong> products
              <span *ngIf="selectedCategorySlug || searchQuery || selectedIndustries.length > 0" class="active-filter-tag">
                (Filtered)
                <button (click)="resetFilters()" class="clear-btn">Clear All</button>
              </span>
            </div>

            <div class="sort-wrap">
              <label for="sortSelect">Sort By:</label>
              <select id="sortSelect" [(ngModel)]="sortBy" (change)="applySort()" class="sort-select">
                <option value="featured">Featured First</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="sku">SKU Code</option>
              </select>
            </div>
          </div>

          <!-- GRID -->
          <div class="grid grid-3" *ngIf="filteredProducts.length > 0">
            <app-product-card
              *ngFor="let p of filteredProducts"
              [product]="p"
            ></app-product-card>
          </div>

          <!-- NO RESULTS -->
          <div class="no-results" *ngIf="filteredProducts.length === 0">
            <div class="no-results-icon">&#128269;</div>
            <h3>No Products Found</h3>
            <p>No products match your current search and filter criteria. Try clearing some filters or searching for different keywords.</p>
            <button (click)="resetFilters()" class="btn btn-primary">Reset Filters</button>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .page-header {
      background: var(--color-navy);
      color: white;
      padding: 40px 0;
      margin-bottom: 40px;
    }
    .page-title {
      font-size: 36px;
      font-weight: 800;
      color: white;
      margin-bottom: 12px;
    }
    .page-subtitle {
      font-size: 16px;
      color: #d9e2ec;
      max-width: 800px;
      line-height: 1.6;
      margin: 0;
    }
    .catalogue-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 32px;
      align-items: start;
    }
    .catalogue-sidebar {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .filter-box {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 20px;
    }
    .filter-heading {
      font-size: 15px;
      font-weight: 700;
      color: var(--color-navy);
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .filter-search {
      width: 100%;
      padding: 8px 12px;
      font-size: 13px;
      border: 1px solid var(--color-border);
      border-radius: 6px;
      outline: none;
    }
    .filter-search:focus {
      border-color: var(--color-teal);
    }
    .cat-filter-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .cat-filter-list li {
      margin-bottom: 6px;
    }
    .cat-filter-list a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 10px;
      border-radius: 6px;
      font-size: 13px;
      color: var(--color-text);
      text-decoration: none;
      transition: all 0.2s;
    }
    .cat-filter-list a:hover {
      background: var(--color-mist);
      color: var(--color-teal);
    }
    .cat-filter-list a.active {
      background: rgba(0, 124, 122, 0.1);
      color: var(--color-teal);
      font-weight: 700;
    }
    .cat-pill {
      font-size: 11px;
      background: var(--color-mist);
      padding: 2px 6px;
      border-radius: 10px;
      color: var(--color-steel);
    }
    .cat-filter-list a.active .cat-pill {
      background: var(--color-teal);
      color: white;
    }
    .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--color-steel);
      cursor: pointer;
    }
    .banner-box {
      background: #f0f7ff;
      border-color: #bfdbfe;
    }
    .banner-box h4 {
      font-size: 15px;
      color: var(--color-navy);
      margin-bottom: 6px;
    }
    .banner-box p {
      font-size: 12px;
      color: var(--color-steel);
      margin-bottom: 14px;
      line-height: 1.4;
    }
    .toolbar {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      padding: 12px 20px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .results-count {
      font-size: 14px;
      color: var(--color-steel);
    }
    .results-count strong {
      color: var(--color-navy);
    }
    .active-filter-tag {
      margin-left: 8px;
      font-size: 12px;
      color: var(--color-teal);
    }
    .clear-btn {
      background: none;
      border: none;
      color: var(--color-amber);
      font-size: 12px;
      cursor: pointer;
      text-decoration: underline;
      margin-left: 4px;
    }
    .sort-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: var(--color-steel);
    }
    .sort-select {
      padding: 6px 12px;
      font-size: 13px;
      border: 1px solid var(--color-border);
      border-radius: 6px;
      outline: none;
      background: white;
    }
    .no-results {
      text-align: center;
      padding: 60px 20px;
      background: white;
      border-radius: 12px;
      border: 1px dashed var(--color-border);
    }
    .no-results-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }
    .no-results h3 {
      font-size: 20px;
      margin-bottom: 8px;
    }
    .no-results p {
      color: var(--color-steel);
      max-width: 480px;
      margin: 0 auto 20px;
      font-size: 14px;
    }
    @media (max-width: 900px) {
      .catalogue-layout {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProductListComponent implements OnInit {
  categories: ProductCategory[] = [];
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategorySlug: string = '';
  currentCategory?: ProductCategory;
  searchQuery: string = '';
  selectedIndustries: string[] = [];
  availableIndustries: string[] = ['Automotive', 'Packaging', 'Pharmaceutical', 'Robotics', 'Assembly', 'CNC'];
  sortBy: string = 'featured';
  allProductsCount: number = 0;

  breadcrumbs: CrumbItem[] = [
    { label: 'Products', url: '/products' }
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getAllProducts();
    this.allProductsCount = this.allProducts.length;

    this.route.paramMap.subscribe(params => {
      const catSlug = params.get('category');
      if (catSlug) {
        this.selectCategory(catSlug);
      } else {
        this.selectCategory('');
      }
    });
  }

  selectCategory(slug: string): void {
    this.selectedCategorySlug = slug;
    if (slug) {
      this.currentCategory = this.productService.getCategoryBySlug(slug);
      if (this.currentCategory) {
        this.seoService.setTitle(`${this.currentCategory.name}`);
        this.seoService.setMetaData(this.currentCategory.shortDescription);
        this.breadcrumbs = [
          { label: 'Products', url: '/products' },
          { label: this.currentCategory.name }
        ];
      }
    } else {
      this.currentCategory = undefined;
      this.seoService.setTitle('Industrial Product Catalogue');
      this.seoService.setMetaData('Browse our complete industrial catalogue of linear motion, pneumatic systems, servo systems, robotics, and sensors.');
      this.breadcrumbs = [
        { label: 'Products' }
      ];
    }
    this.applyFilters();
  }

  toggleIndustry(ind: string): void {
    const idx = this.selectedIndustries.indexOf(ind);
    if (idx >= 0) {
      this.selectedIndustries.splice(idx, 1);
    } else {
      this.selectedIndustries.push(ind);
    }
    this.applyFilters();
  }

  applyFilters(): void {
    let list = [...this.allProducts];

    // Filter by category
    if (this.selectedCategorySlug) {
      list = list.filter(p => p.categorySlug === this.selectedCategorySlug);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.applications.some(a => a.toLowerCase().includes(q))
      );
    }

    // Filter by application / industry tag
    if (this.selectedIndustries.length > 0) {
      list = list.filter(p =>
        this.selectedIndustries.some(sel =>
          p.tags.some(t => t.toLowerCase().includes(sel.toLowerCase())) ||
          p.applications.some(a => a.toLowerCase().includes(sel.toLowerCase()))
        )
      );
    }

    this.filteredProducts = list;
    this.applySort();
  }

  applySort(): void {
    switch (this.sortBy) {
      case 'featured':
        this.filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'name-asc':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'sku':
        this.filteredProducts.sort((a, b) => a.sku.localeCompare(b.sku));
        break;
    }
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.selectedIndustries = [];
    this.sortBy = 'featured';
    this.selectCategory('');
  }
}
