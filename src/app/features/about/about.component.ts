import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent, CrumbItem } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbsComponent
  ],
  template: `
    <div class="page-header">
      <div class="container">
        <app-breadcrumbs [items]="breadcrumbs"></app-breadcrumbs>
        <h1 class="page-title">About Samarth Engineering</h1>
        <p class="page-subtitle">
          Pioneering Indian factory automation, precision motion control, and high-performance industrial components from our manufacturing hub in Pune, Maharashtra.
        </p>
      </div>
    </div>

    <div class="container page-content">
      <!-- MISSION & VISION -->
      <div class="about-intro-grid">
        <div class="intro-card">
          <span class="intro-badge">Our Purpose</span>
          <h2>Empowering Indian Manufacturing with Dependable Automation</h2>
          <p>
            Founded with a vision to deliver world-class automation systems engineered in India, Samarth Engineering has grown into a trusted technology partner for tier-1 automotive suppliers, pharmaceutical giants, and heavy engineering plants.
          </p>
          <p>
            We combine deep mechanical engineering capabilities with advanced PLC/SCADA programming and turnkey robotic integration to solve complex factory floor bottlenecks.
          </p>
        </div>
        <div class="intro-stats-box">
          <div class="stat-cell">
            <span class="num">15+</span>
            <span class="lbl">Years of Excellence</span>
          </div>
          <div class="stat-cell">
            <span class="num">250+</span>
            <span class="lbl">Automation Cells Deployed</span>
          </div>
          <div class="stat-cell">
            <span class="num">18,000</span>
            <span class="lbl">Sq. Ft. Pune Facility</span>
          </div>
          <div class="stat-cell">
            <span class="num">45+</span>
            <span class="lbl">Engineers & Specialists</span>
          </div>
        </div>
      </div>

      <!-- FACILITY & INFRASTRUCTURE -->
      <div class="section">
        <div class="section-title-wrap">
          <span class="section-badge">Infrastructure</span>
          <h2>Our Pune Engineering & Manufacturing Facility</h2>
          <p>State-of-the-art design, CNC machining, assembly, and testing bays in MIDC Bhosari, Pune.</p>
        </div>

        <div class="facility-grid">
          <div class="fac-card">
            <div class="fac-icon">&#128187;</div>
            <h3>3D Design & Simulation Center</h3>
            <p>High-end CAD workstations running SolidWorks and FEA tools for kinematics, thermal stress, and cycle-time optimization.</p>
          </div>
          <div class="fac-card">
            <div class="fac-icon">&#9881;</div>
            <h3>Precision CNC Machine Shop</h3>
            <p>In-house VMC machining, grinding, wire-EDM, and precision turning for critical tooling and custom SPM machine frames.</p>
          </div>
          <div class="fac-card">
            <div class="fac-icon">&#128300;</div>
            <h3>Quality & Metrology Lab</h3>
            <p>Coordinate Measuring Machine (CMM), surface roughness testers, and laser alignment for sub-micron validation.</p>
          </div>
          <div class="fac-card">
            <div class="fac-icon">&#9889;</div>
            <h3>FAT Assembly & Integration Bays</h3>
            <p>Dedicated bays with full 415V 3-phase and clean dry air supply for factory acceptance trials before customer dispatch.</p>
          </div>
        </div>
      </div>

      <!-- QUALITY POLICY & VALUES -->
      <div class="section quality-policy-section">
        <div class="policy-grid">
          <div class="policy-text">
            <span class="badge badge-teal">ISO 9001:2015</span>
            <h2>Our Zero-Defect Quality Policy</h2>
            <p>
              Quality at Samarth Engineering is not an inspection step—it is embedded from concept architecture to final SAT sign-off. We strictly adhere to ISO 9001:2015 processes, standard operating procedures, and traceable batch testing.
            </p>
            <div class="values-list">
              <div class="val-item">
                <strong>Precision Engineering:</strong> Every mechanism is designed with safety margins exceeding 2.5x.
              </div>
              <div class="val-item">
                <strong>Component Authenticity:</strong> 100% genuine electrical, pneumatic, and linear motion hardware with manufacturer test certificates.
              </div>
              <div class="val-item">
                <strong>On-Time Delivery:</strong> Transparent milestone tracking with weekly progress reports and video FAT updates.
              </div>
            </div>
          </div>
          <div class="cert-box">
            <h3>Certified Standards</h3>
            <ul class="cert-list">
              <li>&#10004; ISO 9001:2015 Quality Management</li>
              <li>&#10004; CE Conformity for Export Machinery</li>
              <li>&#10004; IP65/IP67 Ingress Protection Standards</li>
              <li>&#10004; Cleanroom Class 10,000 Protocols</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="facility-visit-cta">
        <h2>Visit Our Works in Pune</h2>
        <p>We welcome plant managers, technical directors, and procurement heads to tour our Bhosari facility.</p>
        <div class="actions">
          <a routerLink="/contact" class="btn btn-primary btn-lg">Schedule Facility Tour</a>
          <a routerLink="/products" class="btn btn-secondary btn-lg">Browse Components</a>
        </div>
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
    .about-intro-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 40px;
      margin-bottom: 60px;
      align-items: center;
    }
    .intro-badge {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: var(--color-teal);
      background: rgba(0, 124, 122, 0.1);
      padding: 4px 12px;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 12px;
    }
    .intro-card h2 {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-navy);
      margin-bottom: 16px;
      line-height: 1.25;
    }
    .intro-card p {
      font-size: 15px;
      line-height: 1.65;
      color: var(--color-text);
      margin-bottom: 14px;
    }
    .intro-stats-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      background: #102A43;
      padding: 32px;
      border-radius: 12px;
      color: white;
    }
    .stat-cell {
      text-align: center;
      padding: 12px;
    }
    .stat-cell .num {
      display: block;
      font-family: var(--font-mono);
      font-size: 32px;
      font-weight: 800;
      color: var(--color-amber);
      margin-bottom: 4px;
    }
    .stat-cell .lbl {
      font-size: 12px;
      color: #d9e2ec;
    }
    .section-title-wrap {
      text-align: center;
      margin-bottom: 40px;
    }
    .section-title-wrap h2 {
      font-size: 28px;
      font-weight: 800;
      color: var(--color-navy);
      margin: 8px 0;
    }
    .section-title-wrap p {
      font-size: 15px;
      color: var(--color-steel);
    }
    .facility-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
    .fac-card {
      background: white;
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
    }
    .fac-icon {
      font-size: 32px;
      margin-bottom: 14px;
    }
    .fac-card h3 {
      font-size: 16px;
      color: var(--color-navy);
      margin-bottom: 8px;
    }
    .fac-card p {
      font-size: 13px;
      color: var(--color-steel);
      line-height: 1.5;
      margin: 0;
    }
    .quality-policy-section {
      background: var(--color-mist);
      border-radius: 12px;
      border: 1px solid var(--color-border);
      padding: 48px;
      margin: 40px 0;
    }
    .policy-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr;
      gap: 40px;
      align-items: center;
    }
    .policy-text h2 {
      font-size: 26px;
      color: var(--color-navy);
      margin: 12px 0 16px;
    }
    .policy-text p {
      font-size: 15px;
      line-height: 1.6;
      color: var(--color-text);
      margin-bottom: 20px;
    }
    .values-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .val-item {
      font-size: 13px;
      color: var(--color-text);
    }
    .val-item strong {
      color: var(--color-navy);
    }
    .cert-box {
      background: white;
      padding: 32px;
      border-radius: 12px;
      border: 1px solid var(--color-border);
    }
    .cert-box h3 {
      font-size: 18px;
      color: var(--color-navy);
      margin-bottom: 16px;
    }
    .cert-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-size: 14px;
      color: var(--color-text);
    }
    .facility-visit-cta {
      background: linear-gradient(135deg, var(--color-teal) 0%, #005857 100%);
      color: white;
      padding: 48px;
      border-radius: 12px;
      text-align: center;
      margin-top: 40px;
    }
    .facility-visit-cta h2 {
      font-size: 28px;
      color: white;
      margin-bottom: 8px;
    }
    .facility-visit-cta p {
      font-size: 15px;
      color: #e0f2f1;
      margin: 0 auto 24px;
      max-width: 600px;
    }
    .actions {
      display: flex;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    @media (max-width: 900px) {
      .about-intro-grid { grid-template-columns: 1fr; }
      .facility-grid { grid-template-columns: 1fr 1fr; }
      .policy-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .facility-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent implements OnInit {
  breadcrumbs: CrumbItem[] = [
    { label: 'About Us' }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.setTitle('About Samarth Engineering');
    this.seoService.setMetaData('Learn about Samarth Engineering, our 18,000 sq.ft Pune manufacturing facility, ISO 9001:2015 quality standards, and engineering team.');
  }
}
