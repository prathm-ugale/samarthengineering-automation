import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SolutionCardComponent } from '../../shared/components/solution-card/solution-card.component';
import { ProductService } from '../../core/services/product.service';
import { SolutionService } from '../../core/services/solution.service';
import { QuoteModalService } from '../../core/services/quote-modal.service';
import { SeoService } from '../../core/services/seo.service';
import { ProductCategory } from '../../core/models/category.model';
import { Product } from '../../core/models/product.model';
import { AutomationSolution } from '../../core/models/solution.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgFor,
    FormsModule,
    SectionHeadingComponent,
    ProductCardComponent,
    SolutionCardComponent
  ],
  template: `
    <!-- ==========================================
         1. KINEMATIC HERO SECTION (Aximotion Style)
         ========================================== -->
    <section class="hero-section">
      <div class="hero-bg-overlay"></div>
      
      <div class="container hero-container">
        <!-- Left Hero Content -->
        <div class="hero-left">
          <div class="hero-badge">
            <span class="pulse-dot"></span>
            <span>INTELLIGENT AUTOMATION & ABSOLUTE PRECISION</span>
          </div>

          <h1 class="hero-title">
            <em>Precision Motion</em><br>
            <span class="hero-outline">& Intelligent</span> Automation
          </h1>

          <p class="hero-sub">
            Your trusted engineering partner for Linear Motion Guides, Precision Ball Screws, Pneumatics, Gears & Rack, Toggle Clamps, Levelling Pads, Couplings, and Turnkey SPM Machines.
          </p>

          <div class="hero-actions">
            <a routerLink="/products" class="btn btn-primary btn-lg">
              <span>Explore Products</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button (click)="openGeneralRfq()" class="btn btn-ghost btn-lg">
              <span>Request RFQ / Quote</span>
            </button>
          </div>
        </div>

        <!-- Right Kinematic Graphic & Stat Panels -->
        <div class="hero-right">
          <div class="kinematic-circle-wrap">
            <div class="kinematic-circle">
              <div class="orbit-dot"></div>
            </div>
            <div class="kinematic-center-glow"></div>
          </div>

          <div class="hero-stat-panel">
            <div class="stat-card">
              <span class="stat-num">15+</span>
              <span class="stat-label">Years Engineering Expertise</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">50k+</span>
              <span class="stat-label">Components Supplied</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">250+</span>
              <span class="stat-label">Custom SPM Systems</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">99.4%</span>
              <span class="stat-label">On-Time Commissioning</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         2. INTERACTIVE PRODUCT UNIVERSE (Aximotion Style)
         ========================================== -->
    <section class="section bg-mist" id="portfolio">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Precision Portfolio</span>
          <h2 class="section-title">Our <em>Product Universe</em></h2>
          <p class="section-lead">
            World-class mechanical motion elements, workholding fixtures, pneumatics, and robotics engineered for demanding 24/7 manufacturing.
          </p>
        </div>

        <!-- Category Filter Pills -->
        <div class="product-tabs-scroll">
          <div class="product-tabs">
            <button 
              class="tab-pill" 
              [class.active]="selectedTab === 'all'"
              (click)="selectTab('all')">
              All Products ({{ allProducts.length }})
            </button>
            <button 
              *ngFor="let cat of categories" 
              class="tab-pill"
              [class.active]="selectedTab === cat.slug"
              (click)="selectTab(cat.slug)">
              {{ cat.name }} ({{ cat.productCount }})
            </button>
          </div>
        </div>

        <!-- Filtered Product Grid -->
        <div class="grid grid-4" style="margin-top: 32px;">
          <app-product-card 
            *ngFor="let p of displayedProducts" 
            [product]="p">
          </app-product-card>
        </div>

        <div class="section-footer-cta">
          <a routerLink="/products" class="btn btn-secondary btn-lg">
            <span>View Full Product Catalogue ({{ allProducts.length }}+ Items)</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ==========================================
         3. INTERACTIVE 3D FLIP CARDS ("Why Choose Us")
         ========================================== -->
    <section class="why-section-flip">
      <div class="container">
        <div class="section-header">
          <span class="section-badge" style="background: rgba(240, 120, 34, 0.15); color: #ffa82e; border-color: rgba(240, 120, 34, 0.3);">
            Why Choose Us
          </span>
          <h2 class="section-title" style="color: #ffffff;">
            Your Trusted Partner for <em>Precision Solutions</em>
          </h2>
          <p class="section-lead" style="color: #b9c9d3;">
            Engineered dependability from component sourcing to turnkey automation delivery.
          </p>
        </div>

        <div class="features-flip-grid">
          <!-- Flip Card 1 -->
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-front">
                  <div class="flip-icon">🌐</div>
                  <h3>Global Brands at Your Doorstep</h3>
                  <p class="flip-front-sub">Authorized sourcing & technical partnership</p>
                  <div class="flip-hint"><span>↻ Flip for details</span></div>
                </div>
                <div class="flip-back">
                  <div class="flip-back-icon">🌐</div>
                  <h4>World-Class Partners</h4>
                  <p>THK, Festo, Airtac, CKD, Korta, Steel Smith, Miki Pulley, Hiwin & Panasonic. 100% genuine components with factory warranty.</p>
                  <span class="flip-badge">100% Genuine Guaranteed</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Flip Card 2 -->
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-front">
                  <div class="flip-icon">⚡</div>
                  <h3>Fastest Industry Lead Time</h3>
                  <p class="flip-front-sub">High local stock & dispatch readiness</p>
                  <div class="flip-hint"><span>↻ Flip for details</span></div>
                </div>
                <div class="flip-back">
                  <div class="flip-back-icon">⚡</div>
                  <h4>Lightning Fast Dispatch</h4>
                  <p>Standard inventory ships within 24 hours from Bhosari MIDC Pune. Custom machined ball screws & rails delivered in 7-14 days.</p>
                  <span class="flip-badge">24h Dispatch Ready</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Flip Card 3 -->
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-front">
                  <div class="flip-icon">⚙️</div>
                  <h3>Custom Solution Provider</h3>
                  <p class="flip-front-sub">Tailored CAD-to-part engineering</p>
                  <div class="flip-hint"><span>↻ Flip for details</span></div>
                </div>
                <div class="flip-back">
                  <div class="flip-back-icon">⚙️</div>
                  <h4>Turnkey Engineering</h4>
                  <p>From SolidWorks 3D CAD design to CNC end-machining, custom stroke lengths, special coatings, and full SPM automation integration.</p>
                  <span class="flip-badge">End-to-End Engineering</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Flip Card 4 -->
          <div class="flip-card-container">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-front">
                  <div class="flip-icon">🎖️</div>
                  <h3>ISO 9001:2015 Quality</h3>
                  <p class="flip-front-sub">3-stage inspection & zero defects</p>
                  <div class="flip-hint"><span>↻ Flip for details</span></div>
                </div>
                <div class="flip-back">
                  <div class="flip-back-icon">🎖️</div>
                  <h4>Uncompromising Quality</h4>
                  <p>Rigorous 3-stage metrology inspection, runout verification, dynamic load testing, and FAT/SAT protocol documentation.</p>
                  <span class="flip-badge">Rejection Rate &lt; 0.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         4. TURNKEY AUTOMATION SOLUTIONS
         ========================================== -->
    <section class="section">
      <div class="container">
        <app-section-heading
          badge="Systems & Automation Cells"
          title="Engineered Turnkey Solutions"
          subtitle="From custom SPM machines to robotic palletizing, we design high-yield production lines."
          [centered]="true">
        </app-section-heading>

        <div class="grid grid-3">
          <app-solution-card *ngFor="let s of solutions" [solution]="s"></app-solution-card>
        </div>
      </div>
    </section>

    <!-- ==========================================
         5. GLOBAL PARTNER BRANDS GRID
         ========================================== -->
    <section class="section bg-mist">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">Global Sourcing Network</span>
          <h2 class="section-title">World-Class <em>Partner Brands</em></h2>
          <p class="section-lead">
            Direct partnerships with premier global manufacturers ensuring authentic industrial quality.
          </p>
        </div>

        <div class="partners-grid">
          <div class="partner-card">
            <div class="partner-brand-logo">THK</div>
            <h4>THK Motion</h4>
            <span>LM Guides & Ball Screws</span>
          </div>
          <div class="partner-card">
            <div class="partner-brand-logo">KORTA</div>
            <h4>Korta</h4>
            <span>Precision Ground Ball Screws</span>
          </div>
          <div class="partner-card">
            <div class="partner-brand-logo">STEEL SMITH</div>
            <h4>Steel Smith</h4>
            <span>Toggle Clamps & Leveling Pads</span>
          </div>
          <div class="partner-card">
            <div class="partner-brand-logo">AIRTAC</div>
            <h4>Airtac</h4>
            <span>Pneumatic Actuators & Valves</span>
          </div>
          <div class="partner-card">
            <div class="partner-brand-logo">FESTO</div>
            <h4>Festo</h4>
            <span>Pneumatic & Electric Automation</span>
          </div>
          <div class="partner-card">
            <div class="partner-brand-logo">CKD</div>
            <h4>CKD</h4>
            <span>Pneumatic Components & FRL</span>
          </div>
          <div class="partner-card">
            <div class="partner-brand-logo">KTPPL</div>
            <h4>KTPPL</h4>
            <span>Zero-Backlash Couplings</span>
          </div>
          <div class="partner-card">
            <div class="partner-brand-logo">HIWIN</div>
            <h4>Hiwin</h4>
            <span>Linear Guideways & Stages</span>
          </div>
        </div>

        <div class="partners-trust-strip">
          <div class="trust-pill"><span>✓</span> 100% Genuine Sourcing</div>
          <div class="trust-pill"><span>✓</span> Factory Warranty Backed</div>
          <div class="trust-pill"><span>✓</span> Rapid Pune MIDC Stock Dispatch</div>
          <div class="trust-pill"><span>✓</span> Full Engineering CAD Support</div>
        </div>
      </div>
    </section>

    <!-- ==========================================
         6. DIRECT RFQ & INQUIRY SECTION
         ========================================== -->
    <section class="section" id="contact-rfq">
      <div class="container">
        <div class="rfq-split-box">
          <div class="rfq-info">
            <span class="section-badge">Fast Engineering Support</span>
            <h2>Let's Discuss Your <em>Technical Requirements</em></h2>
            <p>
              Whether you need standard replacement components, bulk project quotations, or a custom SPM automation machine, our Pune engineering team is ready to assist.
            </p>

            <div class="rfq-contacts">
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <strong>Works & Headquarters:</strong>
                  <p>Plot No. A-45/2, MIDC Industrial Area, Bhosari, Pune - 411026, Maharashtra, India</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <strong>Direct Engineering Sales:</strong>
                  <p><a href="tel:+912027128890">+91 (020) 2712-8890</a> / <a href="tel:+918454060784">+91 98765 43210</a></p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div>
                  <strong>Technical Drawings & RFQ:</strong>
                  <p><a href="mailto:sales@samarthengineering-automation.com">sales&#64;samarthengineering-automation.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div class="rfq-form-card">
            <h3>Quick RFQ & Consultation</h3>
            <p class="form-sub">Guaranteed response within 2 business hours.</p>

            <form (submit)="submitQuickRfq($event)">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Your Name *</label>
                  <input type="text" [(ngModel)]="quickRfq.name" name="name" class="form-control" required placeholder="e.g. Rajesh Patil" />
                </div>
                <div class="form-group">
                  <label class="form-label">Company Name *</label>
                  <input type="text" [(ngModel)]="quickRfq.company" name="company" class="form-control" required placeholder="e.g. Tata Motors / SPM Tech" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Work Email *</label>
                  <input type="email" [(ngModel)]="quickRfq.email" name="email" class="form-control" required placeholder="name@company.com" />
                </div>
                <div class="form-group">
                  <label class="form-label">Phone / WhatsApp *</label>
                  <input type="tel" [(ngModel)]="quickRfq.phone" name="phone" class="form-control" required placeholder="+91 98765 43210" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Product / Solution Interest</label>
                <select [(ngModel)]="quickRfq.productCategory" name="productCategory" class="form-select">
                  <option value="Linear Guides & Ball Screws">Linear Guides & Ball Screws</option>
                  <option value="Toggle Clamps & Leveling Pads">Toggle Clamps & Leveling Pads</option>
                  <option value="Gears, Rack & Pinion">Gears, Rack & Pinion</option>
                  <option value="Pneumatic Cylinders & Valves">Pneumatic Cylinders & Valves</option>
                  <option value="Couplings & Shaft Transmission">Couplings & Shaft Transmission</option>
                  <option value="AGV Caster Wheels">AGV Caster Wheels</option>
                  <option value="Custom SPM Machine">Custom SPM Machine / Turnkey Automation</option>
                  <option value="Servo Motors & Drives">Servo Motors & Drives</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Application Details / SKU / Quantities</label>
                <textarea [(ngModel)]="quickRfq.notes" name="notes" class="form-control" placeholder="Describe required stroke length, load capacity, model numbers, or project timeline..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg w-100">
                <span>Submit Technical RFQ &rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ==========================================================================
       HERO SECTION (Aximotion Style Dual-Tone & Kinematics)
       ========================================================================== */
    .hero-section {
      position: relative;
      background: linear-gradient(135deg, #0b1e33 0%, #101722 55%, #14314a 100%);
      color: #ffffff;
      padding: 100px 0 80px;
      overflow: hidden;
    }
    .hero-bg-overlay {
      position: absolute;
      inset: 0;
      background-image: 
        radial-gradient(circle at 18% 25%, rgba(240, 120, 34, 0.16) 0%, transparent 40%),
        radial-gradient(circle at 85% 65%, rgba(0, 124, 122, 0.18) 0%, transparent 45%),
        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 60px),
        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 60px);
      pointer-events: none;
    }
    .hero-container {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1.2fr 0.9fr;
      gap: 48px;
      align-items: center;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(240, 120, 34, 0.15);
      border: 1px solid rgba(240, 120, 34, 0.35);
      padding: 6px 16px;
      border-radius: var(--radius-full);
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      color: #ffa82e;
      margin-bottom: 24px;
    }
    .pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #f07822;
      box-shadow: 0 0 10px #f07822;
      animation: pulseGlow 2s infinite;
    }
    .hero-title {
      font-size: clamp(2.6rem, 4.5vw, 4.2rem);
      font-weight: 800;
      color: #ffffff;
      line-height: 1.08;
      letter-spacing: -0.02em;
      margin-bottom: 24px;
    }
    .hero-title em {
      font-style: normal;
      color: #ffa82e;
    }
    .hero-outline {
      -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.85);
      color: transparent;
    }
    .hero-sub {
      font-size: 1.12rem;
      color: #b9c9d3;
      line-height: 1.7;
      max-width: 580px;
      margin-bottom: 36px;
    }
    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    /* Kinematic Hero Graphic */
    .hero-right {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .kinematic-circle-wrap {
      position: relative;
      width: 360px;
      height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .kinematic-circle {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1.5px dashed rgba(240, 120, 34, 0.35);
      animation: rotateKinematic 24s linear infinite;
    }
    .kinematic-circle::before {
      content: '';
      position: absolute;
      inset: 30px;
      border-radius: 50%;
      border: 1px solid rgba(0, 210, 206, 0.25);
    }
    .kinematic-circle::after {
      content: '';
      position: absolute;
      inset: 65px;
      border-radius: 50%;
      border: 1.5px solid rgba(255, 255, 255, 0.12);
    }
    .orbit-dot {
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 14px;
      height: 14px;
      background: #f07822;
      border-radius: 50%;
      box-shadow: 0 0 16px #f07822, 0 0 30px #ffa82e;
    }
    .kinematic-center-glow {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(240, 120, 34, 0.3) 0%, transparent 70%);
      filter: blur(10px);
    }

    /* Hero Stat Panel */
    .hero-stat-panel {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      width: 100%;
      margin-top: 24px;
    }
    .stat-card {
      background: rgba(11, 30, 51, 0.75);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(240, 120, 34, 0.2);
      border-radius: 12px;
      padding: 14px 18px;
      display: flex;
      flex-direction: column;
    }
    .stat-num {
      font-family: var(--font-display);
      font-size: 1.8rem;
      font-weight: 800;
      color: #ffa82e;
      line-height: 1;
      margin-bottom: 4px;
    }
    .stat-label {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      color: #b9c9d3;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    /* ==========================================================================
       PRODUCT UNIVERSE TABS
       ========================================================================== */
    .product-tabs-scroll {
      overflow-x: auto;
      padding-bottom: 8px;
      margin-bottom: 16px;
    }
    .product-tabs {
      display: flex;
      gap: 8px;
      width: max-content;
      margin: 0 auto;
    }
    .tab-pill {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      padding: 8px 18px;
      border-radius: var(--radius-full);
      background: #ffffff;
      border: 1px solid var(--color-border);
      color: var(--color-navy);
      cursor: pointer;
      transition: all var(--transition-fast);
      white-space: nowrap;
    }
    .tab-pill:hover, .tab-pill.active {
      background: var(--color-navy);
      color: #ffffff;
      border-color: var(--color-navy);
    }
    .tab-pill.active {
      background: linear-gradient(135deg, var(--color-amber) 0%, var(--color-amber-dark) 100%);
      border-color: var(--color-amber);
      color: #ffffff;
      box-shadow: 0 4px 12px rgba(240, 120, 34, 0.3);
    }
    .section-footer-cta {
      text-align: center;
      margin-top: 48px;
    }

    /* ==========================================================================
       3D FLIP CARDS ("Why Choose Us")
       ========================================================================== */
    .why-section-flip {
      background: linear-gradient(135deg, #102a43 0%, #0b1e33 100%);
      padding: 90px 0;
      position: relative;
    }
    .features-flip-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
      perspective: 1200px;
    }
    .flip-card-container {
      background: transparent;
      height: 290px;
      perspective: 1200px;
      cursor: pointer;
    }
    .flip-card {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s cubic-bezier(0.2, 0.9, 0.3, 1);
      transform-style: preserve-3d;
      border-radius: 20px;
    }
    .flip-card-container:hover .flip-card {
      transform: rotateY(180deg);
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }
    .flip-front, .flip-back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
      text-align: center;
    }
    .flip-front {
      background: #ffffff;
      border: 1px solid rgba(240, 120, 34, 0.2);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    }
    .flip-icon {
      font-size: 2.4rem;
      margin-bottom: 12px;
    }
    .flip-front h3 {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--color-navy);
      margin-bottom: 8px;
    }
    .flip-front-sub {
      font-size: 0.8rem;
      color: var(--color-steel);
    }
    .flip-hint {
      margin-top: auto;
      font-family: var(--font-mono);
      font-size: 0.68rem;
      color: var(--color-amber);
      font-weight: 600;
    }
    .flip-back {
      background: linear-gradient(135deg, #14314a 0%, #071524 100%);
      border: 1.5px solid var(--color-amber);
      transform: rotateY(180deg);
      color: #ffffff;
    }
    .flip-back-icon {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }
    .flip-back h4 {
      font-size: 1.1rem;
      color: #ffa82e;
      margin-bottom: 10px;
    }
    .flip-back p {
      font-size: 0.82rem;
      color: #d1dde8;
      line-height: 1.55;
      margin-bottom: 14px;
    }
    .flip-badge {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: #ffa82e;
      background: rgba(240, 120, 34, 0.15);
      border: 1px solid rgba(240, 120, 34, 0.3);
      padding: 4px 10px;
      border-radius: var(--radius-full);
    }

    /* ==========================================================================
       PARTNER BRANDS GRID
       ========================================================================== */
    .partners-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 32px;
    }
    .partner-card {
      background: #ffffff;
      border: 1px solid var(--color-border);
      border-radius: 16px;
      padding: 24px 16px;
      text-align: center;
      box-shadow: var(--shadow-xs);
      transition: all var(--transition-fast);
    }
    .partner-card:hover {
      transform: translateY(-4px);
      border-color: var(--color-amber);
      box-shadow: var(--shadow-md);
    }
    .partner-brand-logo {
      font-family: var(--font-display);
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--color-navy);
      letter-spacing: 0.08em;
      margin-bottom: 8px;
    }
    .partner-card h4 {
      font-size: 0.95rem;
      color: var(--color-steel-dark);
      margin-bottom: 4px;
    }
    .partner-card span {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: var(--color-steel-light);
    }
    .partners-trust-strip {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .trust-pill {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--color-navy);
      background: #ffffff;
      border: 1px solid var(--color-border);
      padding: 8px 18px;
      border-radius: var(--radius-full);
      box-shadow: var(--shadow-xs);
    }
    .trust-pill span {
      color: var(--color-teal);
      font-weight: 800;
    }

    /* ==========================================================================
       RFQ & INQUIRY SECTION
       ========================================================================== */
    .rfq-split-box {
      display: grid;
      grid-template-columns: 1fr 1.15fr;
      gap: 48px;
      background: #ffffff;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: 48px;
      box-shadow: var(--shadow-md);
    }
    .rfq-info h2 {
      font-size: 2.2rem;
      margin: 12px 0 16px;
      line-height: 1.2;
    }
    .rfq-info p {
      color: var(--color-steel);
      line-height: 1.65;
      margin-bottom: 28px;
    }
    .rfq-contacts {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .contact-item {
      display: flex;
      gap: 14px;
      align-items: flex-start;
    }
    .contact-icon {
      font-size: 1.4rem;
      line-height: 1;
    }
    .contact-item strong {
      display: block;
      font-size: 0.92rem;
      color: var(--color-navy);
      margin-bottom: 2px;
    }
    .contact-item p {
      font-size: 0.88rem;
      margin: 0;
      color: var(--color-steel);
    }
    .rfq-form-card {
      background: var(--color-mist);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 32px;
    }
    .rfq-form-card h3 {
      font-size: 1.4rem;
      margin-bottom: 4px;
    }
    .form-sub {
      font-size: 0.84rem;
      color: var(--color-steel);
      margin-bottom: 20px;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    @media (max-width: 1024px) {
      .hero-container { grid-template-columns: 1fr; }
      .hero-right { margin-top: 32px; }
      .features-flip-grid { grid-template-columns: repeat(2, 1fr); }
      .partners-grid { grid-template-columns: repeat(2, 1fr); }
      .rfq-split-box { grid-template-columns: 1fr; padding: 32px; }
    }
    @media (max-width: 640px) {
      .features-flip-grid { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; gap: 0; }
      .hero-stat-panel { grid-template-columns: 1fr; }
    }
  `]
})
export class HomeComponent implements OnInit {
  categories: ProductCategory[] = [];
  allProducts: Product[] = [];
  displayedProducts: Product[] = [];
  solutions: AutomationSolution[] = [];

  selectedTab: string = 'all';

  quickRfq = {
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: 'Linear Guides & Ball Screws',
    notes: ''
  };

  constructor(
    private productService: ProductService,
    private solutionService: SolutionService,
    private quoteService: QuoteModalService,
    private seoService: SeoService
  ) { }

  ngOnInit(): void {
    this.seoService.setTitle('Samarth Engineering | Precision Motion, Automation & Industrial Components');
    this.seoService.setMetaData('Premier Indian distributor and manufacturer of Linear Motion Guides, Precision Ball Screws, Pneumatics, Toggle Clamps, Leveling Pads, Couplings, and SPM Automation Machines.');

    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getAllProducts();
    this.displayedProducts = this.allProducts.slice(0, 8);

    this.solutions = this.solutionService.getAllSolutions().slice(0, 3);
  }

  selectTab(slug: string): void {
    this.selectedTab = slug;
    if (slug === 'all') {
      this.displayedProducts = this.allProducts.slice(0, 8);
    } else {
      const filtered = this.productService.getProductsByCategory(slug);
      this.displayedProducts = filtered.length > 0 ? filtered : this.allProducts.slice(0, 8);
    }
  }

  openGeneralRfq(): void {
    this.quoteService.open({ source: 'Hero RFQ Button' });
  }

  submitQuickRfq(e: Event): void {
    e.preventDefault();
    this.quoteService.open({
      productName: this.quickRfq.productCategory,
      source: `Quick RFQ from ${this.quickRfq.company || this.quickRfq.name}`
    });
  }
}
