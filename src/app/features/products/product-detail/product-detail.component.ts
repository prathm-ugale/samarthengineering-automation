import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { BreadcrumbsComponent, CrumbItem } from '../../../shared/components/breadcrumbs/breadcrumbs.component';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductService } from '../../../core/services/product.service';
import { QuoteModalService } from '../../../core/services/quote-modal.service';
import { ToastService } from '../../../core/services/toast.service';
import { SeoService } from '../../../core/services/seo.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    NgIf,
    BreadcrumbsComponent,
    ProductCardComponent
  ],
  template: `
    <div class="product-detail-page" *ngIf="product">
      <!-- BREADCRUMBS BAR -->
      <div class="breadcrumbs-bar">
        <div class="container">
          <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        </div>
      </div>

      <!-- MAIN PRODUCT HERO -->
      <div class="container main-hero-grid">
        <!-- PRODUCT IMAGE GALLERY -->
        <div class="product-gallery">
          <div class="main-image-wrap">
            <img [src]="selectedImage || product.imageUrl" [alt]="product.name" class="main-img" />
            <span *ngIf="product.featured" class="badge badge-amber main-badge">Premium Engineering</span>
            <span *ngIf="product.inStock" class="badge badge-teal stock-badge">In Stock / Dispatch Ready</span>
          </div>

          <div class="thumb-list" *ngIf="product.gallery && product.gallery.length > 1">
            <button
              *ngFor="let img of product.gallery"
              (click)="selectedImage = img"
              [class.active]="(selectedImage || product.imageUrl) === img"
              class="thumb-btn"
            >
              <img [src]="img" [alt]="product.name" class="thumb-img" />
            </button>
          </div>
        </div>

        <!-- PRODUCT SUMMARY & RFQ ACTION -->
        <div class="product-info-panel">
          <div class="category-meta">
            <a [routerLink]="['/products', product.categorySlug]" class="cat-badge">
              {{ product.categoryName }}
            </a>
            <span class="stock-status in-stock">&#10003; Standard Production Item</span>
          </div>

          <h1 class="product-title">{{ product.name }}</h1>

          <div class="sku-strip">
            <span class="sku-lbl">Model / SKU:</span>
            <span class="sku-val">{{ product.sku }}</span>
            <span class="brand-tag">Brand: {{ product.brand }}</span>
          </div>

          <p class="product-desc">{{ product.fullDescription }}</p>

          <!-- HIGHLIGHT SPECS -->
          <div class="key-specs-box" *ngIf="product.specs && product.specs.length > 0">
            <h4>Quick Technical Summary</h4>
            <div class="specs-grid">
              <div class="spec-tile" *ngFor="let spec of product.specs.slice(0, 4)">
                <span class="tile-k">{{ spec.name }}</span>
                <span class="tile-v">{{ spec.value }}</span>
              </div>
            </div>
          </div>

          <!-- PRIMARY ACTION BUTTONS -->
          <div class="action-buttons">
            <button (click)="openRfqModal()" class="btn btn-primary btn-lg flex-1">
              Request Quotation & Technical Datasheet
            </button>
            <button (click)="downloadCad()" class="btn btn-secondary btn-lg">
              Download 3D STEP / CAD
            </button>
          </div>

          <div class="trust-strip">
            <div class="trust-item">
              <strong>12 Months</strong>
              <span>Standard Warranty</span>
            </div>
            <div class="trust-item">
              <strong>Pune, MH</strong>
              <span>Dispatch Works</span>
            </div>
            <div class="trust-item">
              <strong>ISO 9001</strong>
              <span>Tested & Certified</span>
            </div>
          </div>
        </div>
      </div>

      <!-- TABBED DEEP SPECIFICATIONS & DOCUMENTATION -->
      <div class="container section">
        <div class="tabs-container">
          <div class="tabs-header">
            <button
              (click)="activeTab = 'specs'"
              [class.active]="activeTab === 'specs'"
              class="tab-nav-btn"
            >
              Technical Specifications
            </button>
            <button
              (click)="activeTab = 'features'"
              [class.active]="activeTab === 'features'"
              class="tab-nav-btn"
            >
              Features & Highlights
            </button>
            <button
              (click)="activeTab = 'applications'"
              [class.active]="activeTab === 'applications'"
              class="tab-nav-btn"
            >
              Applications & Tags
            </button>
            <button
              (click)="activeTab = 'cad'"
              [class.active]="activeTab === 'cad'"
              class="tab-nav-btn"
            >
              CAD Models & Datasheets
            </button>
          </div>

          <div class="tab-body">
            <!-- TAB 1: SPECS TABLE -->
            <div *ngIf="activeTab === 'specs'" class="tab-panel">
              <table class="specs-table">
                <thead>
                  <tr>
                    <th>Parameter Name</th>
                    <th>Specification Value</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let spec of product.specs">
                    <td class="spec-param">{{ spec.name }}</td>
                    <td class="spec-value">{{ spec.value }}</td>
                    <td class="spec-unit">{{ spec.category || 'General' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- TAB 2: FEATURES -->
            <div *ngIf="activeTab === 'features'" class="tab-panel">
              <ul class="features-checklist">
                <li *ngFor="let f of product.features">
                  <span class="feat-icon">&#10004;</span>
                  <span class="feat-text">{{ f }}</span>
                </li>
              </ul>
            </div>

            <!-- TAB 3: APPLICATIONS -->
            <div *ngIf="activeTab === 'applications'" class="tab-panel">
              <div class="apps-wrap">
                <h4>Recommended Industrial Applications:</h4>
                <div class="tags-cloud">
                  <span *ngFor="let app of product.applications" class="tag-pill">{{ app }}</span>
                </div>

                <h4 style="margin-top: 24px;">Keywords & Tags:</h4>
                <div class="tags-cloud">
                  <span *ngFor="let tag of product.tags" class="tag-pill tag-teal">{{ tag }}</span>
                </div>
              </div>
            </div>

            <!-- TAB 4: CAD & DOWNLOADS -->
            <div *ngIf="activeTab === 'cad'" class="tab-panel">
              <div class="downloads-grid">
                <div class="download-item">
                  <div class="dl-icon">&#128196;</div>
                  <div class="dl-info">
                    <strong>Technical Product Datasheet (PDF)</strong>
                    <span>Complete dimensional drawings, curves, and load charts (2.4 MB)</span>
                  </div>
                  <button (click)="downloadFile('Technical Datasheet PDF')" class="btn btn-secondary btn-sm">Download PDF</button>
                </div>

                <div class="download-item">
                  <div class="dl-icon">&#128295;</div>
                  <div class="dl-info">
                    <strong>3D CAD Solid Model (STEP / IGES)</strong>
                    <span>Parametric 3D solid model for assembly design (5.8 MB)</span>
                  </div>
                  <button (click)="downloadFile('3D STEP Model')" class="btn btn-secondary btn-sm">Download STEP</button>
                </div>

                <div class="download-item">
                  <div class="dl-icon">&#128208;</div>
                  <div class="dl-info">
                    <strong>2D Installation Drawings (DXF)</strong>
                    <span>Mounting hole patterns and clearance layouts (1.2 MB)</span>
                  </div>
                  <button (click)="downloadFile('2D DXF Drawing')" class="btn btn-secondary btn-sm">Download DXF</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- RELATED PRODUCTS -->
      <div class="container section" *ngIf="relatedProducts.length > 0">
        <h2 class="section-title">Related Engineering Products</h2>
        <div class="grid grid-4" style="margin-top: 24px;">
          <app-product-card *ngFor="let rel of relatedProducts" [product]="rel"></app-product-card>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .breadcrumbs-bar {
      background: var(--color-mist);
      border-bottom: 1px solid var(--color-border);
      padding: 12px 0;
      margin-bottom: 36px;
    }
    .main-hero-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 48px;
      align-items: start;
      margin-bottom: 60px;
    }
    .main-image-wrap {
      position: relative;
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
      height: 380px;
    }
    .main-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .main-badge {
      position: absolute;
      top: 16px;
      left: 16px;
    }
    .stock-badge {
      position: absolute;
      top: 16px;
      right: 16px;
    }
    .thumb-list {
      display: flex;
      gap: 12px;
      margin-top: 14px;
    }
    .thumb-btn {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      border: 2px solid var(--color-border);
      background: white;
      padding: 0;
      cursor: pointer;
      overflow: hidden;
      transition: border-color 0.2s;
    }
    .thumb-btn.active {
      border-color: var(--color-teal);
    }
    .thumb-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .category-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }
    .cat-badge {
      font-size: 11px;
      font-weight: 700;
      color: var(--color-teal);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-decoration: none;
    }
    .stock-status {
      font-size: 12px;
      font-weight: 600;
      color: var(--color-teal);
    }
    .product-title {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-navy);
      line-height: 1.25;
      margin-bottom: 12px;
    }
    .sku-strip {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .sku-lbl {
      font-size: 13px;
      color: var(--color-steel);
    }
    .sku-val {
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 700;
      color: var(--color-navy);
      background: var(--color-mist);
      padding: 3px 8px;
      border-radius: 4px;
    }
    .brand-tag {
      font-size: 12px;
      color: var(--color-steel);
      font-weight: 600;
    }
    .product-desc {
      font-size: 15px;
      color: var(--color-text);
      line-height: 1.6;
      margin-bottom: 24px;
    }
    .key-specs-box {
      background: var(--color-mist);
      border: 1px solid var(--color-border);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 24px;
    }
    .key-specs-box h4 {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--color-navy);
      margin-bottom: 12px;
    }
    .specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .spec-tile {
      display: flex;
      flex-direction: column;
      background: white;
      padding: 8px 12px;
      border-radius: 6px;
      border: 1px solid var(--color-border);
    }
    .tile-k {
      font-size: 11px;
      color: var(--color-steel);
    }
    .tile-v {
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 700;
      color: var(--color-navy);
    }
    .action-buttons {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
    }
    .trust-strip {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      border-top: 1px solid var(--color-border);
      padding-top: 16px;
    }
    .trust-item {
      text-align: center;
    }
    .trust-item strong {
      display: block;
      font-size: 14px;
      color: var(--color-navy);
    }
    .trust-item span {
      font-size: 11px;
      color: var(--color-steel);
    }
    .tabs-container {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      overflow: hidden;
    }
    .tabs-header {
      display: flex;
      background: var(--color-mist);
      border-bottom: 1px solid var(--color-border);
      overflow-x: auto;
    }
    .tab-nav-btn {
      padding: 16px 24px;
      font-size: 14px;
      font-weight: 700;
      color: var(--color-steel);
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .tab-nav-btn:hover {
      color: var(--color-navy);
    }
    .tab-nav-btn.active {
      color: var(--color-teal);
      border-bottom-color: var(--color-teal);
      background: white;
    }
    .tab-body {
      padding: 32px;
    }
    .specs-table {
      width: 100%;
      border-collapse: collapse;
    }
    .specs-table th {
      text-align: left;
      padding: 12px 16px;
      background: var(--color-mist);
      font-size: 13px;
      color: var(--color-navy);
      border-bottom: 2px solid var(--color-border);
    }
    .specs-table td {
      padding: 12px 16px;
      border-bottom: 1px solid var(--color-border);
      font-size: 13px;
    }
    .spec-param {
      font-weight: 600;
      color: var(--color-navy);
    }
    .spec-value {
      font-family: var(--font-mono);
      font-weight: 600;
      color: var(--color-text);
    }
    .spec-unit {
      color: var(--color-steel);
      font-size: 12px;
    }
    .features-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .features-checklist li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 14px;
      color: var(--color-text);
      line-height: 1.5;
    }
    .feat-icon {
      color: var(--color-teal);
      font-weight: bold;
    }
    .tags-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 8px;
    }
    .tag-pill {
      background: var(--color-mist);
      border: 1px solid var(--color-border);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      color: var(--color-navy);
    }
    .tag-teal {
      background: rgba(0, 124, 122, 0.1);
      border-color: rgba(0, 124, 122, 0.3);
      color: var(--color-teal);
    }
    .downloads-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .download-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      background: var(--color-mist);
      border: 1px solid var(--color-border);
      border-radius: 8px;
    }
    .dl-icon {
      font-size: 28px;
    }
    .dl-info {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .dl-info strong {
      font-size: 14px;
      color: var(--color-navy);
    }
    .dl-info span {
      font-size: 12px;
      color: var(--color-steel);
    }
    @media (max-width: 900px) {
      .main-hero-grid {
        grid-template-columns: 1fr;
      }
      .action-buttons {
        flex-direction: column;
      }
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  relatedProducts: Product[] = [];
  selectedImage: string = '';
  activeTab: 'specs' | 'features' | 'applications' | 'cad' = 'specs';

  breadcrumbs: CrumbItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private quoteService: QuoteModalService,
    private toastService: ToastService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productSlug = params.get('product-slug');
      if (productSlug) {
        this.loadProduct(productSlug);
      }
    });
  }

  loadProduct(slug: string): void {
    const p = this.productService.getProductBySlug(slug);
    if (!p) {
      this.router.navigate(['/products']);
      return;
    }

    this.product = p;
    this.selectedImage = p.imageUrl;

    this.seoService.setTitle(`${p.name} (${p.sku})`);
    this.seoService.setMetaData(p.shortDescription);

    this.breadcrumbs = [
      { label: 'Products', url: '/products' },
      { label: p.categoryName, url: `/products/${p.categorySlug}` },
      { label: p.name }
    ];

    if (p.relatedProductIds && p.relatedProductIds.length > 0) {
      this.relatedProducts = p.relatedProductIds
        .map(id => this.productService.getProductById(id))
        .filter((item): item is Product => !!item);
    } else {
      this.relatedProducts = this.productService.getAllProducts().filter(x => x.id !== p.id).slice(0, 4);
    }
  }

  openRfqModal(): void {
    if (!this.product) return;
    this.quoteService.open({
      productName: this.product.name,
      sku: this.product.sku,
      source: 'Product Detail Page'
    });
  }

  downloadCad(): void {
    if (!this.product) return;
    this.toastService.show(
      `Downloading STEP 3D CAD model for ${this.product.name} (${this.product.sku}).`,
      'success',
      'CAD Download Ready'
    );
  }

  downloadFile(fileName: string): void {
    this.toastService.show(
      `Started download for ${fileName}.`,
      'success',
      'File Download'
    );
  }
}
