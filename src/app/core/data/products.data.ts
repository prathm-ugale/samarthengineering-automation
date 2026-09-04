import { Product } from "../models/product.model";

export const PRODUCTS_DATA: Product[] = [
  // ==========================================
  // 1. MOTION & DRIVE SYSTEMS
  // ==========================================
  {
    id: "prod-mot-1",
    slug: "ac-servo-motor-750w",
    name: "High-Dynamic AC Servo Motor (750W)",
    sku: "SAM-MS-075-E2",
    categorySlug: "motion-and-drive-systems",
    categoryName: "Motion & Drive Systems",
    shortDescription: "Compact, low-inertia AC servo motor for high-speed packaging, robotics, and SPM applications.",
    fullDescription: "Engineered for rapid acceleration, precise angular positioning, and exceptional torque linearity across dynamic duty cycles. Integrates a 23-bit multi-turn absolute optical encoder, IP65 sealed housing, and high-temp permanent neodymium magnets.",
    features: [
      "23-bit (8,388,608 pulses/rev) multi-turn absolute optical encoder",
      "Rated torque 2.39 Nm with 300% (7.17 Nm) instantaneous peak torque",
      "Ultra-low cogging torque design (< 1.5% rated) for ultra-smooth velocity",
      "IP65 rated moisture and dust sealed enclosure with military-spec MS connectors",
      "Compatible with direct drive gearboxes and high-speed ballscrew stages"
    ],
    specs: [
      { name: "Rated Output Power", value: "750 W (0.75 kW)", category: "Electrical" },
      { name: "Rated / Max Speed", value: "3000 / 6000 RPM", category: "Mechanical" },
      { name: "Rated Torque", value: "2.39 Nm (Peak 7.17 Nm)", category: "Mechanical" },
      { name: "Rotor Inertia", value: "1.45 x 10⁻⁴ kg·m²", category: "Mechanical" },
      { name: "Supply Voltage", value: "3-Phase 200-240V AC", category: "Electrical" },
      { name: "Shaft Diameter", value: "19 mm (with oil seal & key)", category: "Dimensional" },
      { name: "Flange Size", value: "80 mm Square", category: "Dimensional" },
      { name: "Protection Class", value: "IP65 (IP67 optional)", category: "Environmental" }
    ],
    applications: [
      "High-Speed Packaging Flow-Wrappers",
      "Multi-Axis CNC Milling & Router Feeds",
      "Pick & Place Robotic Workcells",
      "Automated Screwdriving & Insertion SPM"
    ],
    brand: "Samarth Motion",
    tags: ["Servo Motor", "750W", "23-Bit Absolute", "IP65", "Motion Control", "Bhosari"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-ms-075-datasheet.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    ],
    relatedProductIds: ["prod-mot-2", "prod-mot-3", "prod-lin-1"],
    featured: true
  },
  {
    id: "prod-mot-2",
    slug: "ethercat-ac-servo-drive",
    name: "EtherCAT High-Response AC Servo Drive (1.5kW)",
    sku: "SAM-SD-ECAT-15",
    categorySlug: "motion-and-drive-systems",
    categoryName: "Motion & Drive Systems",
    shortDescription: "Dual-core DSP EtherCAT servo drive with adaptive resonance auto-tuning and STO SIL3 safety.",
    fullDescription: "High-performance digital AC servo drive featuring native 100 Mbps EtherCAT (CoE / CiA 402) fieldbus connectivity. Provides real-time synchronized motion (CSP, CSV, CST), 3.2 kHz velocity loop response bandwidth, notch filters, and Safe Torque Off (STO).",
    features: [
      "EtherCAT CoE protocol with 250 µs sync cycle time",
      "Integrated Safe Torque Off (STO SIL3 / PLe compliant)",
      "Real-time adaptive vibration suppression & friction compensation",
      "Supports 23-bit Nikon, Tamagawa, and EnDat 2.2 absolute encoders",
      "USB tuning interface with PC-based oscilloscope & FFT frequency analysis"
    ],
    specs: [
      { name: "Continuous Current", value: "7.5 A RMS (24 A Peak)", category: "Electrical" },
      { name: "Fieldbus Protocol", value: "EtherCAT (CiA 402 Device Profile)", category: "Communication" },
      { name: "Velocity Loop Bandwidth", value: "3.2 kHz", category: "Performance" },
      { name: "Safety Function", value: "STO (Safe Torque Off) SIL3 Cat.4", category: "Safety" },
      { name: "Control Modes", value: "CSP, CSV, CST, Homing, Profile Position", category: "Software" },
      { name: "Dimensions (H x W x D)", value: "185 x 65 x 165 mm", category: "Dimensional" }
    ],
    applications: [
      "Semiconductor Wafer Handling",
      "Electronic Assembly & Surface Mount Systems",
      "Synchronized Multi-Axis Cartesian Gantries",
      "Rotary Indexing Tables"
    ],
    brand: "Samarth Motion",
    tags: ["Servo Drive", "EtherCAT", "CiA 402", "STO SIL3", "Auto-Tuning"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-sd-ecat-15.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-mot-1", "prod-mot-3"],
    featured: true
  },
  {
    id: "prod-mot-3",
    slug: "precision-helical-planetary-gearbox",
    name: "Ultra-Precision Inline Planetary Gearbox (< 3 arcmin)",
    sku: "SAM-PG-090-L1-10",
    categorySlug: "motion-and-drive-systems",
    categoryName: "Motion & Drive Systems",
    shortDescription: "Helical-ground planetary gearbox with ultra-low backlash under 3 arcmin for dynamic servo systems.",
    fullDescription: "Built with hardened carbon alloy steel gears, vacuum carburized and precision ground to AGMA 12 standards. Delivers continuous torsional rigidity, smooth torque transmission, and high radial load capacity for servo motor integration.",
    features: [
      "Precision backlash: Stage 1 ≤ 3 arcmin, Stage 2 ≤ 5 arcmin",
      "Crowning helical gearing for ultra-quiet operation (< 65 dB)",
      "High output torque density up to 220 Nm nominal",
      "Synthetic lifetime lubrication with IP65 Viton seal design",
      "Universal clamping motor adapter flange for all major servo brands"
    ],
    specs: [
      { name: "Frame Size", value: "90 mm Square", category: "Dimensional" },
      { name: "Gear Ratio", value: "10:1 (Single Stage)", category: "Mechanical" },
      { name: "Torsional Backlash", value: "≤ 3 arc-min", category: "Precision" },
      { name: "Nominal Output Torque", value: "160 Nm", category: "Mechanical" },
      { name: "Max Radial Load (Fr)", value: "3200 N", category: "Mechanical" },
      { name: "Efficiency", value: "≥ 97%", category: "Performance" }
    ],
    applications: [
      "Laser Cutting Head Positioners",
      "High-Accuracy Gantry Pinion Drives",
      "Robotic Indexers & Turrets",
      "Printing and Converting Machinery"
    ],
    brand: "Samarth Precision",
    tags: ["Planetary Gearbox", "Helical Gears", "Low Backlash", "Servo Gearhead"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-pg-090.pdf",
    imageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800&q=80"],
    relatedProductIds: ["prod-mot-1", "prod-mec-1"],
    featured: true
  },
  {
    id: "prod-mot-4",
    slug: "high-torque-vector-vfd-inverter",
    name: "Heavy-Duty Sensorless Vector VFD Inverter (5.5 kW)",
    sku: "SAM-VFD-055-T4",
    categorySlug: "motion-and-drive-systems",
    categoryName: "Motion & Drive Systems",
    shortDescription: "Rugged 415V variable frequency drive with 200% starting torque and built-in Modbus/PROFINET.",
    fullDescription: "High-performance vector inverter engineered for harsh industrial ambient conditions (up to 50°C). Provides closed-loop and open-loop field-oriented control (FOC) for induction and permanent magnet synchronous motors.",
    features: [
      "200% starting torque at 0.5 Hz in open-loop vector mode",
      "Built-in dynamic braking chopper and DC choke",
      "Dual rating: Normal Duty (heavy pump/fan) and Heavy Duty (extruder/hoist)",
      "Conformal coated PCBs (3C3 standard) for chemical and dust resistance"
    ],
    specs: [
      { name: "Rated Power", value: "5.5 kW (7.5 HP)", category: "Electrical" },
      { name: "Input Voltage", value: "3-Phase 380V - 480V AC (±15%)", category: "Electrical" },
      { name: "Rated Output Current", value: "13.0 A", category: "Electrical" },
      { name: "Output Frequency", value: "0 - 600 Hz", category: "Performance" },
      { name: "Communication", value: "RS-485 Modbus RTU & Optional PROFINET", category: "Communication" }
    ],
    applications: [
      "Industrial Conveyor Header Drives",
      "CNC Spindle Motor Control",
      "Hydraulic Power Unit Pumps",
      "Automated Overhead Cranes & Hoists"
    ],
    brand: "Samarth Motion",
    tags: ["VFD", "Inverter", "5.5kW", "415V", "Vector Control"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-vfd-055.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80"],
    relatedProductIds: ["prod-mot-1", "prod-pnl-1"],
    featured: false
  },

  // ==========================================
  // 2. LINEAR MOTION & ACTUATORS (Aximotion / THK / Korta Reference)
  // ==========================================
  {
    id: "prod-lin-1",
    slug: "heavy-duty-linear-guide-rail-assembly",
    name: "Heavy-Duty 4-Row Linear Motion Guide (Size 25, THK/Hiwin Style)",
    sku: "SAM-LMG-25-H-C",
    categorySlug: "linear-motion-and-actuators",
    categoryName: "Linear Motion & Actuators",
    shortDescription: "High-rigidity 4-row circular arc groove linear guideway with equal 4-direction load capacity.",
    fullDescription: "Manufactured from high-carbon chromium bearing steel (GCr15/SUJ2) through deep case hardening and ultra-precision rail surface grinding. Delivers sub-micron motion accuracy, low friction coefficient (µ = 0.002 - 0.003), and long maintenance-free service life with 4-way equal load ratings.",
    features: [
      "Equal 4-way load capacity (radial, reverse radial, and lateral directions)",
      "Self-aligning circular arc groove geometry compensates for minor mounting surface misalignment",
      "Integrated end seals, bottom seals, and lubricant inner reservoirs",
      "Interchangeable rail and block design for swift field servicing and customization",
      "Available with Raydent / Armoloy anti-corrosion chrome coating"
    ],
    specs: [
      { name: "Nominal Rail Width", value: "23 mm (Size 25 Standard)", category: "Dimensional" },
      { name: "Dynamic Load Rating (C)", value: "32.7 kN", category: "Load Capacity" },
      { name: "Static Load Rating (C0)", value: "54.8 kN", category: "Load Capacity" },
      { name: "Running Accuracy", value: "High (H Grade) / Precision (P Grade)", category: "Precision" },
      { name: "Preload Class", value: "ZA (Medium Preload 0.02C)", category: "Precision" },
      { name: "Max Velocity", value: "5.0 m/s", category: "Performance" }
    ],
    applications: [
      "Machining Center Axes (VMC/HMC)",
      "High-Cadence Pick & Place Transfer Beams",
      "Automated Stamping & Press Feeder Lines",
      "Heavy Robotic Gantry Tracks"
    ],
    brand: "Samarth Linear",
    tags: ["Linear Guide", "LM Guide", "Size 25", "High Rigidity", "THK Style", "Interchangeable"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-lmg-25-datasheet.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=80"],
    relatedProductIds: ["prod-lin-2", "prod-lin-3", "prod-mot-1"],
    featured: true
  },
  {
    id: "prod-lin-2",
    slug: "ground-precision-ballscrew-c5",
    name: "Ground High-Precision Ball Screw Assembly (C5 Grade, Korta/THK Style)",
    sku: "SAM-BS-2510-C5-G",
    categorySlug: "linear-motion-and-actuators",
    categoryName: "Linear Motion & Actuators",
    shortDescription: "C5 precision ground ball screw with preloaded double-nut for zero backlash and 98% efficiency.",
    fullDescription: "High-precision ball screw ground to ISO/DIN Grade C5 tolerance (travel variation < 0.018 mm per 300 mm). Features gothic arch raceway profile, internal circulation steel deflector balls, preloaded double-nut design for zero axial backlash, and custom induction-hardened end machining for standard BK/BF bearing supports.",
    features: [
      "C5 ground thread lead accuracy (±0.018 mm / 300 mm travel)",
      "Preloaded double-nut configuration guaranteeing zero axial play and maximum rigidity",
      "Up to 98% mechanical transmission efficiency",
      "Induction hardened raceway surface 58 - 62 HRC for extended lifecycle",
      "Custom end-journal machining according to customer CAD specifications"
    ],
    specs: [
      { name: "Nominal Diameter", value: "25 mm", category: "Dimensional" },
      { name: "Lead / Pitch", value: "10 mm", category: "Dimensional" },
      { name: "Accuracy Grade", value: "C5 Precision Ground (Rolled C7 optional)", category: "Precision" },
      { name: "Dynamic Load (Ca)", value: "28.5 kN", category: "Load Capacity" },
      { name: "Static Load (C0a)", value: "62.3 kN", category: "Load Capacity" },
      { name: "Efficiency", value: "Up to 98%", category: "Performance" },
      { name: "Standard Screw Length", value: "Up to 3000 mm", category: "Dimensional" }
    ],
    applications: [
      "CNC Machine Tool Linear Feeds",
      "Precision Semiconductor Positioning Stages",
      "Electric Injection Molding Clamp Axes",
      "Optical Testing & Metrology Stages"
    ],
    brand: "Samarth Linear",
    tags: ["Ball Screw", "C5 Ground", "25mm", "Zero Backlash", "Korta Style", "Preloaded"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-bs-2510.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-lin-1", "prod-lin-4", "prod-brg-2"],
    featured: true
  },
  {
    id: "prod-lin-3",
    slug: "enclosed-belt-driven-linear-actuator",
    name: "Enclosed Belt-Driven Linear Actuator Module (1200mm Stroke)",
    sku: "SAM-ACT-BLT-1200",
    categorySlug: "linear-motion-and-actuators",
    categoryName: "Linear Motion & Actuators",
    shortDescription: "High-speed extruded aluminum Cartesian actuator with steel-reinforced polyurethane timing belt.",
    fullDescription: "Fully enclosed extruded anodized aluminum body equipped with internal heavy-duty recirculating linear guide rails and an HTD steel-cord reinforced timing belt. Capable of high-speed linear transport up to 3.5 m/s with ±0.05 mm repeatability.",
    features: [
      "Stainless steel sealing strip keeps out swarf, dust, and chips",
      "High acceleration up to 20 m/s² for high-throughput pick & place",
      "Direct motor mounting flange for servo or stepper motor",
      "T-slot profile on bottom and sides for modular Cartesian bracket assembly"
    ],
    specs: [
      { name: "Effective Stroke Length", value: "1200 mm (Custom up to 4000 mm)", category: "Dimensional" },
      { name: "Max Speed", value: "3.5 m/s", category: "Performance" },
      { name: "Repeatability", value: "±0.05 mm", category: "Precision" },
      { name: "Max Payload (Horizontal)", value: "65 kg", category: "Load Capacity" },
      { name: "Belt Profile", value: "HTD 5M (50 mm wide, steel cord)", category: "Mechanical" }
    ],
    applications: [
      "Palletizing & Case Packing Gantries",
      "Laser Engraving & Dispensing Systems",
      "Automated Battery Cell Transfer",
      "Warehouse Sorting Shuttles"
    ],
    brand: "Samarth Actuation",
    tags: ["Linear Actuator", "Belt Driven", "1200mm", "High Speed", "Cartesian"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-act-blt.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80"],
    relatedProductIds: ["prod-mot-1", "prod-lin-1"],
    featured: true
  },
  {
    id: "prod-lin-4",
    slug: "ballscrew-support-bearing-units",
    name: "Fixed & Supported Ball Screw Support Units (BK20 / BF20 Set)",
    sku: "SAM-BKBF-20-SET",
    categorySlug: "linear-motion-and-actuators",
    categoryName: "Linear Motion & Actuators",
    shortDescription: "Preloaded matched angular contact bearing support blocks for ball screw ends.",
    fullDescription: "Precision CNC-machined steel block housing preloaded high-grade P4 angular contact ball bearings on the fixed end (BK) and deep groove radial bearings on the floating supported end (BF). Includes oil seals and locknuts.",
    features: [
      "Preloaded paired angular contact ball bearings for high axial rigidity",
      "Nitrided surface finish with anti-rust black oxide treatment",
      "Supplied with precision ground locknut and inner seal rings"
    ],
    specs: [
      { name: "Shaft Diameter Bore", value: "20 mm", category: "Dimensional" },
      { name: "Bearing Configuration", value: "DF (Back-to-Back Preloaded)", category: "Mechanical" },
      { name: "Housing Material", value: "S45C Carbon Steel (Black Oxide)", category: "Material" }
    ],
    applications: ["Ball Screw Mounting", "CNC Lathe Leadscrews", "Precision Stages"],
    brand: "Samarth Linear",
    tags: ["BK20", "BF20", "Support Unit", "Ball Screw Mount"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-bkbf-20.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-lin-2", "prod-brg-2"],
    featured: false
  },

  // ==========================================
  // 3. PNEUMATIC AUTOMATION (Aximotion / Airtac / Festo / CKD Reference)
  // ==========================================
  {
    id: "prod-pne-1",
    slug: "iso-15552-pneumatic-profile-cylinder",
    name: "ISO 15552 Heavy-Duty Pneumatic Profile Cylinder (Ø50 x 200mm)",
    sku: "SAM-PNC-15552-050",
    categorySlug: "pneumatic-automation",
    categoryName: "Pneumatic Automation",
    shortDescription: "Anodized aluminum profile cylinder with adjustable pneumatic cushioning and magnetic sensor slots.",
    fullDescription: "Conforming strictly to ISO 15552 / VDMA 24562 standards (compatible with Airtac, Festo, CKD series). Constructed with a hard anodized aluminum barrel, precision ground hard chrome plated piston rod, polyurethane (PU) long-life seals, and adjustable end-position air cushioning.",
    features: [
      "Clean profile design with integrated slots for flush-mount magnetic reed/solid-state sensors",
      "Adjustable air cushioning at both stroke ends to absorb high kinetic energy",
      "Self-lubricating sintered bronze rod bearing bush for extended seal life",
      "Operates dry without supplementary airline lubrication"
    ],
    specs: [
      { name: "Bore Size", value: "50 mm", category: "Dimensional" },
      { name: "Stroke Length", value: "200 mm (Standard 25-1000 mm)", category: "Dimensional" },
      { name: "Operating Pressure", value: "1.0 to 10.0 bar (145 psi)", category: "Pneumatic" },
      { name: "Theoretical Force (at 6 bar)", value: "1178 N (Push) / 990 N (Pull)", category: "Pneumatic" },
      { name: "Operating Temperature", value: "-10°C to +80°C (NBR/PU)", category: "Environmental" },
      { name: "Port Size", value: "G 1/4\" BSPP", category: "Pneumatic" }
    ],
    applications: [
      "Automated Clamping & Pressing Stations",
      "Conveyor Diverters & Pushers",
      "Packaging Flap Folding Mechanisms",
      "Assembly Line Workpiece Lift Fixtures"
    ],
    brand: "Samarth Pneumatics",
    tags: ["Pneumatic Cylinder", "ISO 15552", "50mm Bore", "Profile Cylinder", "Airtac Style", "Festo Style"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-pnc-15552.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-pne-2", "prod-pne-3", "prod-pne-4"],
    featured: true
  },
  {
    id: "prod-pne-2",
    slug: "compact-guided-twin-rod-slide-cylinder",
    name: "Compact Guided Twin-Rod Slide Cylinder (Ø20 x 100mm)",
    sku: "SAM-CXS-20-100",
    categorySlug: "pneumatic-automation",
    categoryName: "Pneumatic Automation",
    shortDescription: "Non-rotating dual piston slide unit with ball bushings for high-precision guiding and side load support.",
    fullDescription: "Dual-cylinder architecture generates double output force in an ultra-compact footprint. Twin stainless steel guide rods running inside linear ball bearings provide high non-rotating accuracy and superior bending moment resistance.",
    features: [
      "Double the thrust of a standard single cylinder with 2x piston design",
      "High non-rotating precision ±0.1°",
      "Rubber bumper cushioning with optional hydraulic shock absorbers",
      "Mounting surfaces on 3 sides with precision dowel locator holes"
    ],
    specs: [
      { name: "Bore Size", value: "20 mm x 2 Pistons", category: "Dimensional" },
      { name: "Stroke", value: "100 mm", category: "Dimensional" },
      { name: "Non-Rotating Accuracy", value: "±0.1°", category: "Precision" },
      { name: "Output Thrust (at 6 bar)", value: "377 N (Double Force)", category: "Pneumatic" }
    ],
    applications: [
      "Precision Pick & Place Heads",
      "Multi-Station Part Escapements",
      "Electronics Testing Fixtures"
    ],
    brand: "Samarth Pneumatics",
    tags: ["Guided Cylinder", "Twin Rod", "Slide Table", "Pick and Place"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-cxs-20.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-pne-1", "prod-rob-3"],
    featured: true
  },
  {
    id: "prod-pne-3",
    slug: "multi-station-io-link-valve-manifold",
    name: "Multi-Station IO-Link / Fieldbus Solenoid Valve Manifold (8-Station)",
    sku: "SAM-VM-IOL-08",
    categorySlug: "pneumatic-automation",
    categoryName: "Pneumatic Automation",
    shortDescription: "High-flow modular solenoid valve island with IO-Link digital diagnostic bus communication.",
    fullDescription: "Modular pneumatic valve island integrating up to 16 double-solenoid 5/2 or 5/3 directional control valves onto a unified manifold. Features IO-Link class B communication, single-cable M12 connection, LED channel diagnostics, and manual overrides.",
    features: [
      "Single M12 connector handles all 16 solenoid coils and power distribution",
      "High flow rate of 800 Nl/min per station with compact 10 mm valve width",
      "Built-in cycle counter and coil short-circuit diagnostic telemetry",
      "IP65 protection with integrated exhaust air silencing"
    ],
    specs: [
      { name: "Valve Width", value: "10 mm Slim Profile", category: "Dimensional" },
      { name: "Nominal Flow Rate", value: "800 Nl/min (Cv = 0.81)", category: "Pneumatic" },
      { name: "Response Time", value: "12 ms (Energize) / 15 ms (De-energize)", category: "Performance" },
      { name: "Bus Interface", value: "IO-Link V1.1 / EtherNet/IP / PROFINET", category: "Communication" },
      { name: "Enclosure Protection", value: "IP65 Waterproof", category: "Environmental" }
    ],
    applications: [
      "Robotic End-of-Arm Valve Control",
      "Automotive Assembly Fixture Manifolds",
      "Pharma Packaging Automation"
    ],
    brand: "Samarth Pneumatics",
    tags: ["Valve Manifold", "IO-Link", "Solenoid Valve", "Fieldbus", "IP65", "CKD Style"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-vm-iol-08.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-pne-1", "prod-pne-4"],
    featured: true
  },
  {
    id: "prod-pne-4",
    slug: "modular-air-preparation-frl-unit",
    name: "Modular Air Preparation Unit (Filter-Regulator-Lubricator 1/2\")",
    sku: "SAM-FRL-400-04",
    categorySlug: "pneumatic-automation",
    categoryName: "Pneumatic Automation",
    shortDescription: "Triple-stage air filter, locking precision pressure regulator, and micro-fog mist lubricator.",
    fullDescription: "Ensures clean, dry, pressure-stabilized compressed air supply for sensitive pneumatic automation equipment. Includes 5-micron coalescing filter element, automatic condensate drain, precision pressure gauge, and safety lockout valve.",
    features: [
      "5-micron filtration efficiency removes 99.9% of liquid water and particles",
      "Push-to-lock rotary pressure regulating knob with tamper-proof lock hole",
      "Auto-drain valve dumps condensate automatically when pressure drops",
      "High flow capacity up to 4000 Nl/min"
    ],
    specs: [
      { name: "Port Size", value: "G 1/2\" BSPP", category: "Pneumatic" },
      { name: "Flow Capacity", value: "4000 Nl/min at 6 bar", category: "Pneumatic" },
      { name: "Filtration Rating", value: "5 µm (Optional 0.01 µm micro-filter)", category: "Filtration" },
      { name: "Regulating Range", value: "0.5 to 8.5 bar (7 to 125 psi)", category: "Pneumatic" }
    ],
    applications: [
      "Factory Main Machine Air Inlets",
      "CNC Machine Tool Pneumatic Packs",
      "Cleanroom Pneumatic Cabinets"
    ],
    brand: "Samarth Pneumatics",
    tags: ["FRL", "Air Preparation", "Filter Regulator", "1/2 Inch"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-frl-400.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-pne-1", "prod-pne-3"],
    featured: false
  },

  // ==========================================
  // 4. INDUSTRIAL MECHANICAL ELEMENTS & CLAMPING (Aximotion Reference: Toggle Clamps, Leveling Pads, Latches, Casters)
  // ==========================================
  {
    id: "prod-clm-1",
    slug: "heavy-duty-vertical-toggle-clamp",
    name: "Heavy-Duty Vertical Hold-Down Toggle Clamp (250kg Capacity, Steel Smith Style)",
    sku: "SAM-TC-V250-FL",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "Industrial toggle clamp with ergonomic vinyl handle, flanged base, and self-locking linkage.",
    fullDescription: "Manufactured from heavy-gauge high-tensile steel with corrosion-resistant zinc plating and stainless steel pivot rivets. Provides rapid, reliable workpiece clamping with automatic over-center mechanical locking, preventing accidental release under high vibration.",
    features: [
      "Self-locking over-center linkage holds firmly even with pressure fluctuations",
      "Supplied with adjustable neoprene-tipped spindle assembly to prevent part scratching",
      "Hardened steel pivot bushings for extended lifecycle over 250,000 clamping cycles",
      "Ergonomic oil-resistant red vinyl grip handle for operator comfort and safety"
    ],
    specs: [
      { name: "Holding Capacity", value: "250 kgf (2450 N)", category: "Mechanical" },
      { name: "Handle Opens", value: "60°", category: "Mechanical" },
      { name: "Clamping Arm Opens", value: "100°", category: "Mechanical" },
      { name: "Base Type", value: "Flanged Base with 4 Mounting Holes", category: "Dimensional" },
      { name: "Material & Finish", value: "Zinc-Plated Steel (Stainless Steel 304 optional)", category: "Material" }
    ],
    applications: [
      "Welding and Fabrication Fixtures",
      "CNC Machining & Routing Hold-Downs",
      "Automotive Check Gauges & Assembly Jigs",
      "Woodworking Clamping Tables"
    ],
    brand: "Samarth Precision",
    tags: ["Toggle Clamp", "Steel Smith Style", "Vertical Clamp", "Welding Fixture", "Workholding"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-tc-v250.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-clm-2", "prod-clm-3", "prod-mec-1"],
    featured: true
  },
  {
    id: "prod-clm-2",
    slug: "stainless-steel-precision-levelling-pads",
    name: "Precision Swivel Levelling Pads with Anti-Vibration Base (M20 x 100mm)",
    sku: "SAM-LP-M20-100-SS",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "Self-aligning ball-joint machine leveling pad with vulcanized NBR anti-slip damping pad.",
    fullDescription: "High-grade stainless steel (SUS304) or zinc-plated steel leveling pad designed for precision machinery mounting and height compensation on uneven factory floors. Swivel ball joint accommodates up to 20° surface angular deviation while absorbing operational vibration.",
    features: [
      "20° omni-directional swivel ball joint compensates for unlevel industrial flooring",
      "Integrated vulcanized non-slip NBR rubber pad provides anti-vibration damping",
      "Precision-machined M20 threaded spindle with hexagon flats for easy spanner adjustment",
      "Washdown and chemical resistant for pharmaceutical and cleanroom environments"
    ],
    specs: [
      { name: "Thread Size (d)", value: "M20 x 2.5 Pitch", category: "Dimensional" },
      { name: "Thread Length (L)", value: "100 mm (Options 50 - 200 mm)", category: "Dimensional" },
      { name: "Base Diameter (D)", value: "Ø80 mm Heavy-Duty Base", category: "Dimensional" },
      { name: "Max Static Load", value: "2,500 kgf (24.5 kN) per mount", category: "Load Capacity" },
      { name: "Material", value: "AISI 304 Stainless Steel / Zinc Plated Carbon Steel", category: "Material" }
    ],
    applications: [
      "Special Purpose Machines (SPM) Base Leveling",
      "Industrial Conveyor System Legs",
      "Automated Workstation & Enclosure Bases",
      "Pharmaceutical Packaging Lines"
    ],
    brand: "Samarth Precision",
    tags: ["Levelling Pad", "Machine Mount", "Anti-Vibration", "Steel Smith Style", "Swivel Pad"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-lp-m20.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-clm-1", "prod-clm-3", "prod-clm-4"],
    featured: true
  },
  {
    id: "prod-clm-3",
    slug: "vibration-resistant-adjustable-draw-latch",
    name: "Industrial Vibration-Resistant Adjustable Draw Latch (SUS316)",
    sku: "SAM-LTC-ADJ-316",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "Adjustable tension draw latch with secondary safety catch to prevent accidental opening.",
    fullDescription: "Constructed from marine-grade 316 stainless steel with an adjustable threaded draw hook. Provides secure, vibration-proof panel clamping for machine enclosures, electrical cabinets, acoustic hoods, and inspection hatches with padlock eyelet for security.",
    features: [
      "Threaded U-bolt hook allows precise tension adjustment to compensate for gasket wear",
      "Integrated secondary release trigger prevents opening under severe machine vibration",
      "Padlockable loop for lockout/tagout (LOTO) plant compliance",
      "Corrosion-resistant electropolished 316 stainless steel construction"
    ],
    specs: [
      { name: "Ultimate Tensile Load", value: "500 kgf (4900 N)", category: "Mechanical" },
      { name: "Adjustment Range", value: "15 mm Threaded Adjustment", category: "Dimensional" },
      { name: "Material", value: "AISI 316 Stainless Steel", category: "Material" },
      { name: "Mounting", value: "M4 / M5 Countersunk Screws", category: "Dimensional" }
    ],
    applications: [
      "Machine Safety Enclosure Doors",
      "Generator & Compressor Soundproof Hoods",
      "Industrial Control Panel Cabinets",
      "Material Handling Shuttles & Totes"
    ],
    brand: "Samarth Precision",
    tags: ["Industrial Latch", "Toggle Latch", "Adjustable Latch", "Steel Smith Style", "Enclosure Lock"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-ltc-adj.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-clm-1", "prod-clm-2"],
    featured: false
  },
  {
    id: "prod-clm-4",
    slug: "heavy-duty-agv-caster-wheels",
    name: "Heavy-Duty AGV / AMR Polyurethane Caster Wheel (Ø150mm / 800kg)",
    sku: "SAM-CST-AGV-150-PU",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "Ultra-low rolling resistance polyurethane on cast iron core caster with precision swivel bearings.",
    fullDescription: "Engineered specifically for Automated Guided Vehicles (AGV), Autonomous Mobile Robots (AMR), and heavy material handling carts. Features precision double ball raceway with hardened bearing track, premium 95 Shore A polyurethane tread, and optional directional lock brake.",
    features: [
      "Precision sealed deep-groove ball bearings in wheel hub and swivel head",
      "High-grade polyurethane tread (95° Shore A) offers ultra-low rolling resistance and floor protection",
      "Heavy forged steel top plate and yoke withstand high dynamic shock loads up to 800 kg",
      "Total-lock foot brake locks both swivel rotation and wheel rolling simultaneously"
    ],
    specs: [
      { name: "Wheel Diameter", value: "Ø150 mm (6 Inch)", category: "Dimensional" },
      { name: "Tread Width", value: "50 mm", category: "Dimensional" },
      { name: "Overall Height", value: "195 mm", category: "Dimensional" },
      { name: "Dynamic Load Capacity", value: "800 kg per caster (3200 kg on 4 wheels)", category: "Load Capacity" },
      { name: "Tread Material", value: "High-Elastic Polyurethane on Cast Iron Core", category: "Material" },
      { name: "Top Plate Size", value: "115 x 100 mm (Bolt Hole 85 x 73 mm)", category: "Dimensional" }
    ],
    applications: [
      "Automated Guided Vehicles (AGV)",
      "Autonomous Mobile Robots (AMR)",
      "Heavy Factory Material Handling Trolleys",
      "Automotive Assembly Line Kit Carts"
    ],
    brand: "Samarth Handling",
    tags: ["Caster Wheel", "AGV Caster", "Heavy Duty Caster", "Polyurethane Wheel", "AMR Wheels"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-cst-agv.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-cnv-1", "prod-clm-2"],
    featured: true
  },
  {
    id: "prod-mec-1",
    slug: "hardened-precision-helical-gear-rack",
    name: "Hardened & Ground Precision Helical Gear Rack (Module 2, DIN 6)",
    sku: "SAM-RCK-M2-H1000",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "Case-hardened and all-sides ground helical gear rack for ultra-smooth gantry drive motion.",
    fullDescription: "Manufactured from premium 16MnCr5 alloy steel with tooth surfaces induction hardened to 58-62 HRC and completely ground across all faces to DIN 6 accuracy. Helical 19°31'42\" tooth profile guarantees high continuous contact ratio and quiet high-speed travel.",
    features: [
      "DIN 6 total pitch error ≤ 0.035 mm per 1000 mm length",
      "Right-hand helical angle 19°31'42\" for seamless tooth engagement",
      "Case hardened tooth flank (58-62 HRC) for multi-year abrasive resistance",
      "End-machined for continuous end-to-end butt jointing on long gantry axes"
    ],
    specs: [
      { name: "Module", value: "Module 2.0 (Helical)", category: "Gear Geometry" },
      { name: "Length", value: "1000 mm (1005.31 mm pitch length)", category: "Dimensional" },
      { name: "Cross Section", value: "24 mm x 24 mm", category: "Dimensional" },
      { name: "Accuracy Grade", value: "DIN 6 Ground", category: "Precision" },
      { name: "Max Tangential Force", value: "14.2 kN", category: "Mechanical" }
    ],
    applications: [
      "Fiber Laser Cutting Gantry Drives",
      "7th Axis Robot Linear Transfer Tracks",
      "CNC Heavy Gantry Machining Centers",
      "Automated Storage & Retrieval (ASRS) Cranes"
    ],
    brand: "Samarth Precision",
    tags: ["Gear Rack", "Helical Rack", "Module 2", "DIN 6", "Ground Gears", "Aximotion Style"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-rck-m2.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-mot-3", "prod-lin-1"],
    featured: true
  },
  {
    id: "prod-mec-2",
    slug: "zero-backlash-disc-servo-coupling",
    name: "Zero-Backlash Stainless Steel Disc Servo Coupling (Ø40mm, KTPPL/Miki Pulley Style)",
    sku: "SAM-CPL-DSC-40-14",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "High-torsional stiffness disc pack coupling designed for servo motor to ballscrew direct connection.",
    fullDescription: "Constructed with anodized high-strength aluminum hubs and a multi-layer SUS304 stainless steel spring disc pack. Delivers infinite fatigue life, zero torsional backlash, and accommodates parallel, angular, and axial shaft misalignments.",
    features: [
      "Zero backlash with extremely high torsional rigidity (3200 Nm/rad)",
      "Identical clockwise and counter-clockwise rotational characteristics",
      "Clamping hub design with precision balanced hex socket cap screws",
      "Insensitive to oil, lubricants, and operating temperatures up to 120°C"
    ],
    specs: [
      { name: "Outer Diameter", value: "40 mm", category: "Dimensional" },
      { name: "Overall Length", value: "50 mm", category: "Dimensional" },
      { name: "Bore Diameters (d1 / d2)", value: "14 mm to 19 mm (Custom bore & keyway)", category: "Dimensional" },
      { name: "Rated Torque", value: "25.0 Nm (Peak 50.0 Nm)", category: "Mechanical" },
      { name: "Max Rotational Speed", value: "10,000 RPM", category: "Performance" }
    ],
    applications: [
      "Servo Motor to Ball Screw Direct Coupling",
      "High-Resolution Rotary Encoders",
      "Actuator Drive Spindles"
    ],
    brand: "Samarth Precision",
    tags: ["Coupling", "Disc Coupling", "Zero Backlash", "Servo Shaft Coupling", "KTPPL Style"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-cpl-dsc.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-mot-1", "prod-lin-2"],
    featured: false
  },
  {
    id: "prod-mec-3",
    slug: "worm-gear-screw-jack-25kn",
    name: "Translating Worm Gear Screw Jack (25 kN Lifting Capacity)",
    sku: "SAM-SJK-025-TL",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "Heavy-duty mechanical screw jack for synchronized multi-point lifting and tilting tables.",
    fullDescription: "Precision worm gear mechanical actuator housed in a rugged ductile cast iron housing. Features alloy bronze worm wheel and hardened alloy worm shaft, delivering smooth, self-locking mechanical linear lifting for heavy tooling and furnace platforms.",
    features: [
      "Self-locking trapezoidal screw (safe against power failure back-drive)",
      "Can be mechanically synchronized via bevel gearboxes and cross-shafts",
      "Available with top plate, clevis end, or threaded rod end",
      "Dust protection bellow boot and limit switch mounting bracket"
    ],
    specs: [
      { name: "Max Lifting Capacity", value: "25 kN (2.5 Tons)", category: "Load Capacity" },
      { name: "Worm Gear Ratio", value: "6:1 (Fast) or 24:1 (Slow)", category: "Mechanical" },
      { name: "Lifting Screw Diameter", value: "Tr 30 x 6", category: "Dimensional" },
      { name: "Max Stroke", value: "1500 mm", category: "Dimensional" }
    ],
    applications: [
      "Industrial Scissor Lift Tables",
      "Solar Panel Elevation Actuation",
      "Steel Mill Roller Height Adjustment",
      "Test Rig Load Simulators"
    ],
    brand: "Samarth Precision",
    tags: ["Screw Jack", "Worm Jack", "2.5 Ton", "Mechanical Lift"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-sjk-025.pdf",
    imageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1618042164219-62c820f10723?w=800&q=80"],
    relatedProductIds: ["prod-mot-4", "prod-mec-2"],
    featured: false
  },

  // ==========================================
  // 5. ROBOTICS & END EFFECTORS
  // ==========================================
  {
    id: "prod-rob-1",
    slug: "6-axis-articulated-industrial-robot-arm",
    name: "6-Axis Articulated Industrial Robot Arm (7kg Payload)",
    sku: "SAM-ROB-6AX-07",
    categorySlug: "robotics-and-end-effectors",
    categoryName: "Robotics & End Effectors",
    shortDescription: "High-precision 6-axis industrial robot arm with 910mm reach and ±0.02mm repeatability.",
    fullDescription: "Engineered for high-cadence assembly, machine tending, polishing, and screwdriving. Features high-rigidity RV cycloidal and harmonic reducers on all 6 axes, IP67 wrist protection, and an open ROS/EtherCAT teach pendant controller.",
    features: [
      "Ultra-high repeatability ±0.02 mm for micro-assembly operations",
      "IP67 protection on wrist for wet CNC machine tending and coolants",
      "Integrated air lines and 24V signal cabling routed through hollow wrist",
      "Intuitive graphical touchscreen teach pendant with offline 3D simulation"
    ],
    specs: [
      { name: "Payload Capacity", value: "7 kg", category: "Load Capacity" },
      { name: "Max Reach Radius", value: "910 mm", category: "Dimensional" },
      { name: "Repeatability", value: "±0.02 mm", category: "Precision" },
      { name: "Total Weight", value: "54 kg", category: "Mechanical" },
      { name: "Axis 1-6 Speed", value: "Up to 450 °/s", category: "Performance" },
      { name: "Controller", value: "Samarth RC-100 Industrial Controller", category: "Control" }
    ],
    applications: [
      "CNC Machine Loading & Unloading",
      "Automotive Component Assembly & Inspection",
      "Dispensing & Glue Application",
      "Palletizing & Case Packing Cells"
    ],
    brand: "Samarth Robotics",
    tags: ["Robotics", "6-Axis", "Robot Arm", "7kg", "Machine Tending", "Pune"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-rob-6ax-07.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"],
    relatedProductIds: ["prod-rob-3", "prod-rob-4", "prod-vis-1"],
    featured: true
  },
  {
    id: "prod-rob-2",
    slug: "high-speed-scara-assembly-robot",
    name: "High-Speed 4-Axis SCARA Assembly Robot (500mm Arm)",
    sku: "SAM-SCARA-500-03",
    categorySlug: "robotics-and-end-effectors",
    categoryName: "Robotics & End Effectors",
    shortDescription: "Ultra-fast SCARA robot with 0.38s standard cycle time for electronics and pharma packaging.",
    fullDescription: "Built for lightning-fast pick-and-place, sorting, and precision insertion tasks. Features high-rigidity hollow ball screw spline (Z-axis + Theta-axis) and direct-drive servo motors for continuous high-cadence production lines.",
    features: [
      "Standard cycle time: 0.38 seconds (25mm up - 300mm across - 25mm down)",
      "Repeatability: ±0.015 mm (X-Y plane), ±0.01 mm (Z axis)",
      "Compact tabletop base mounting footprint",
      "Direct interface with machine vision guidance cameras"
    ],
    specs: [
      { name: "Max Payload", value: "3.0 kg (Peak 5.0 kg)", category: "Load Capacity" },
      { name: "Arm Reach Radius", value: "500 mm (J1 250mm + J2 250mm)", category: "Dimensional" },
      { name: "Z-Axis Stroke", value: "150 mm", category: "Dimensional" },
      { name: "Cycle Time", value: "0.38 s", category: "Performance" }
    ],
    applications: [
      "Smartphone & PCB Component Placement",
      "Pharmaceutical Blister Pack Secondary Packaging",
      "Screw Fastening & Gasket Insetting"
    ],
    brand: "Samarth Robotics",
    tags: ["SCARA Robot", "4-Axis", "Fast Pick and Place", "Electronics Assembly"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-scara-500.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"],
    relatedProductIds: ["prod-rob-1", "prod-rob-3", "prod-vis-1"],
    featured: true
  },
  {
    id: "prod-rob-3",
    slug: "precision-pneumatic-parallel-gripper",
    name: "Precision 2-Jaw Pneumatic Parallel Gripper (Size 25)",
    sku: "SAM-GRP-2JP-025",
    categorySlug: "robotics-and-end-effectors",
    categoryName: "Robotics & End Effectors",
    shortDescription: "High-gripping force parallel gripper with cross-roller guideway for zero-play finger holding.",
    fullDescription: "Constructed with hard-anodized aluminum body and hardened steel wedge-cam drive mechanism. High-precision cross-roller guideways eliminate jaw play and ensure gripping repeatability of ±0.01 mm over millions of operational cycles.",
    features: [
      "Repeatability of ±0.01 mm for precision part alignment",
      "High gripping force (450 N total) with low overall gripper weight",
      "Slots for magnetic proximity switches on both sides",
      "Integral dust wiper seals for dirty machining environments"
    ],
    specs: [
      { name: "Stroke per Jaw", value: "6 mm (12 mm total opening)", category: "Dimensional" },
      { name: "Gripping Force at 6 bar", value: "225 N per jaw (450 N total)", category: "Mechanical" },
      { name: "Repeatability", value: "±0.01 mm", category: "Precision" },
      { name: "Weight", value: "0.42 kg", category: "Mechanical" }
    ],
    applications: [
      "Robot Arm End-of-Arm Tooling (EOAT)",
      "Gantry Part Loaders",
      "Automated Assembly Fixture Clamping"
    ],
    brand: "Samarth Robotics",
    tags: ["Gripper", "2-Jaw Gripper", "EOAT", "Pneumatic Gripper"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-grp-2jp.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-rob-1", "prod-pne-3"],
    featured: false
  },

  // ==========================================
  // 6. SENSORS & MACHINE VISION
  // ==========================================
  {
    id: "prod-vis-1",
    slug: "industrial-machine-vision-camera-5mp",
    name: "GigE Industrial Machine Vision Camera (5.0 MP Global Shutter)",
    sku: "SAM-VIS-CAM-5MP",
    categorySlug: "sensors-and-machine-vision",
    categoryName: "Sensors & Machine Vision",
    shortDescription: "High-resolution GigE Vision CMOS camera with Sony Pregius global shutter sensor for inline inspection.",
    fullDescription: "Engineered for high-speed automated optical inspection (AOI), defect detection, dimensional metrology, and robot guidance. Equipped with Sony Pregius IMX264 global shutter sensor, hardware opto-isolated I/Os, and C-mount lens interface.",
    features: [
      "Sony Pregius 2/3\" 5.0 Megapixel Global Shutter CMOS (2448 x 2048)",
      "High frame rate of 36 fps at full resolution over GigE Vision interface",
      "GenICam and GigE Vision compliant with comprehensive SDK (C++, Python, LabVIEW)",
      "Rugged metal housing with screw-locking RJ45 and Hirose 12-pin connectors"
    ],
    specs: [
      { name: "Resolution", value: "5.0 MP (2448 x 2048 pixels)", category: "Sensor" },
      { name: "Pixel Size", value: "3.45 µm x 3.45 µm", category: "Sensor" },
      { name: "Frame Rate", value: "36 fps (Full Resolution)", category: "Performance" },
      { name: "Shutter Type", value: "Global Shutter (Zero Motion Blur)", category: "Sensor" },
      { name: "Lens Mount", value: "C-Mount", category: "Optical" },
      { name: "Interface", value: "GigE (1000 Mbps) with PoE Support", category: "Communication" }
    ],
    applications: [
      "Automotive Part Dimensional Gauging",
      "Pharmaceutical Blister Pack Fill Verification",
      "PCB Solder Joint AOI Inspection",
      "Robot 2D Pick-and-Place Guidance"
    ],
    brand: "Samarth Vision",
    tags: ["Machine Vision", "GigE Camera", "5MP", "Global Shutter", "AOI"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-vis-cam.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-vis-2", "prod-sns-1", "prod-rob-1"],
    featured: true
  },
  {
    id: "prod-vis-2",
    slug: "industrial-fixed-mount-2d-code-reader",
    name: "Industrial 2D DPM Barcode Reader with Liquid Lens",
    sku: "SAM-VIS-RDR-2D",
    categorySlug: "sensors-and-machine-vision",
    categoryName: "Sensors & Machine Vision",
    shortDescription: "Ultra-fast direct part marking (DPM) reader with autofocus liquid lens and multi-angle LED illumination.",
    fullDescription: "Decodes challenging dot-peen, laser-etched, and low-contrast 1D/2D DataMatrix and QR codes on metallic, curved, and shiny reflective surfaces. Features embedded AI neural decoding algorithms and PROFINET/EtherNet/IP output.",
    features: [
      "Autofocus liquid lens adjusts focal distance dynamically (50mm to 1000mm)",
      "Multi-quadrant polarized red, white, and blue LED illumination rings",
      "Reads up to 60 codes/second on moving conveyor lines",
      "Direct industrial fieldbus interface to Siemens, Rockwell, and Omron PLCs"
    ],
    specs: [
      { name: "Sensor Resolution", value: "1280 x 1024 Pixels (1.3 MP)", category: "Sensor" },
      { name: "Decoding Speed", value: "Up to 60 decodes/sec", category: "Performance" },
      { name: "Symbologies", value: "DataMatrix (ECC200), QR, Code 128, PDF417", category: "Software" },
      { name: "Communication", value: "PROFINET, EtherNet/IP, TCP/IP, RS-232", category: "Communication" },
      { name: "Protection Class", value: "IP67 Industrial Enclosure", category: "Environmental" }
    ],
    applications: [
      "Automotive Engine Block Traceability",
      "PCB Serialization & Traceability",
      "Pharma Serialization Track & Trace"
    ],
    brand: "Samarth Vision",
    tags: ["Barcode Reader", "2D DPM", "Traceability", "DataMatrix", "Liquid Lens"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-vis-rdr.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-vis-1", "prod-pnl-2"],
    featured: false
  },
  {
    id: "prod-sns-1",
    slug: "stainless-steel-inductive-proximity-sensor-m12",
    name: "Full-Metal Stainless Steel Inductive Sensor (M12 Flush)",
    sku: "SAM-SNS-IND-M12-F",
    categorySlug: "sensors-and-machine-vision",
    categoryName: "Sensors & Machine Vision",
    shortDescription: "IP68/IP69K one-piece stainless steel face inductive sensor for machining and washdown lines.",
    fullDescription: "Constructed from a single piece of machined AISI 316L stainless steel. Resistant to high-pressure washdown (100 bar), aggressive cutting coolants, physical mechanical impacts, and metal chips.",
    features: [
      "One-piece machined 316L stainless steel housing and sensing face",
      "IP68 and IP69K waterproof washdown protection",
      "Factor 1: equal sensing distance for steel, aluminum, brass, and copper",
      "High immunity against weld-field electromagnetic interference"
    ],
    specs: [
      { name: "Mounting Type", value: "M12 x 1 Threaded (Flush Mount)", category: "Dimensional" },
      { name: "Sensing Range (Sn)", value: "4.0 mm", category: "Sensor" },
      { name: "Output Function", value: "PNP Normally Open (NO)", category: "Electrical" },
      { name: "Switching Frequency", value: "2000 Hz", category: "Performance" },
      { name: "Operating Voltage", value: "10 - 30 V DC", category: "Electrical" }
    ],
    applications: [
      "CNC Machine Tool Toolpost Verification",
      "Automotive Robotic Welding Fixtures",
      "Beverage Bottling Washdown Zones"
    ],
    brand: "Samarth Sensors",
    tags: ["Inductive Sensor", "M12", "Stainless Steel", "IP69K", "Proximity"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-sns-ind.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"],
    relatedProductIds: ["prod-pne-1", "prod-pnl-3"],
    featured: false
  },

  // ==========================================
  // 7. MATERIAL HANDLING & CONVEYORS
  // ==========================================
  {
    id: "prod-cnv-1",
    slug: "modular-plastic-slat-conveyor-system",
    name: "Modular Plastic & Slat Chain Conveyor System",
    sku: "SAM-CNV-MOD-250",
    categorySlug: "material-handling-and-conveyors",
    categoryName: "Material Handling & Conveyors",
    shortDescription: "Customizable modular slat conveyor line with low-friction acetal belt and variable speed drive.",
    fullDescription: "Engineered aluminum or stainless steel conveyor frame fitted with high-durability POM/Acetal modular plastic belt or steel slat chain. Suitable for accumulation, multi-lane merging, incline elevation, and high-speed product container transport.",
    features: [
      "Custom widths from 85 mm to 1200 mm and lengths up to 30 meters",
      "Low coefficient of friction allows gentle line accumulation without scuffing products",
      "Integrated side guides, photo-sensor brackets, and pneumatic stop gates",
      "Direct SEW/Nord hollow-shaft geared motor with VFD speed regulation"
    ],
    specs: [
      { name: "Conveyor Width", value: "250 mm (Standard)", category: "Dimensional" },
      { name: "Belt Material", value: "Food-Grade Acetal / Stainless Steel Slat", category: "Material" },
      { name: "Conveying Speed", value: "5 to 45 m/min (Variable)", category: "Performance" },
      { name: "Max Distributed Load", value: "150 kg/m", category: "Load Capacity" }
    ],
    applications: [
      "Automotive Assembly Sub-Component Transport",
      "Pharmaceutical Bottle Packaging Lines",
      "FMCG Carton & Box Infeed"
    ],
    brand: "Samarth Handling",
    tags: ["Conveyor", "Modular Conveyor", "Slat Chain", "Material Handling"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-cnv-mod.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581091226032-5bc062604871?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581091226032-5bc062604871?w=800&q=80"],
    relatedProductIds: ["prod-cnv-2", "prod-mot-4"],
    featured: true
  },
  {
    id: "prod-cnv-2",
    slug: "zero-pressure-accumulation-mdr-roller-conveyor",
    name: "24V DC Motorized Driven Roller (ZPA) Conveyor Zone",
    sku: "SAM-ZPA-MDR-500",
    categorySlug: "material-handling-and-conveyors",
    categoryName: "Material Handling & Conveyors",
    shortDescription: "Energy-efficient 24V brushless DC motorized roller for zero-collision zone accumulation.",
    fullDescription: "Smart intralogistics conveyor system utilizing 24V DC brushless Motorized Driven Rollers (MDR) combined with networked Zone Logic Controllers. Cartons and totes accumulate without touching, eliminating product damage and slashing energy consumption by up to 60%.",
    features: [
      "Run-on-demand: rollers only rotate when cartons are present in that specific zone",
      "Zero backpressure accumulation prevents tote crushing and jamming",
      "EtherNet/IP and PROFINET networked zone controllers for individual tracking",
      "High reliability with brushless DC internal planetary gearhead"
    ],
    specs: [
      { name: "Roller Diameter", value: "Ø50 mm (Galvanized Steel)", category: "Dimensional" },
      { name: "Between Frame Width (BF)", value: "500 mm (Custom 300 - 1000 mm)", category: "Dimensional" },
      { name: "Operating Voltage", value: "24V DC", category: "Electrical" },
      { name: "Zone Speed", value: "10 to 60 m/min", category: "Performance" },
      { name: "Max Weight per Zone", value: "50 kg", category: "Load Capacity" }
    ],
    applications: [
      "E-Commerce & Warehouse Fulfillment Sortation",
      "Airport Baggage Handling Sub-Lines",
      "Automated Case Packing Lines"
    ],
    brand: "Samarth Handling",
    tags: ["MDR Roller", "ZPA Conveyor", "24V DC", "Zero Pressure Accumulation"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-zpa-mdr.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581091226032-5bc062604871?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581091226032-5bc062604871?w=800&q=80"],
    relatedProductIds: ["prod-cnv-1", "prod-pnl-2"],
    featured: false
  },

  // ==========================================
  // 8. CONTROL PANELS & ELECTRICAL AUTOMATION
  // ==========================================
  {
    id: "prod-pnl-1",
    slug: "turnkey-spm-machine-control-panel",
    name: "Custom Turnkey SPM & Robotic Automation Control Panel",
    sku: "SAM-PNL-SPM-415V",
    categorySlug: "control-panels-and-electrical-automation",
    categoryName: "Control Panels & Electrical Automation",
    shortDescription: "Custom-engineered electrical panel compliant with IEC 61439 & CE for multi-axis automation lines.",
    fullDescription: "Engineered, wired, and tested in-house at our Pune facility. Integrates master PLCs, multi-axis servo drives, safety interlock controllers, clean 24V DC power distribution, and terminal block labeling according to EPLAN schematics.",
    features: [
      "Designed and manufactured in accordance with IEC 61439-1/2 standards",
      "Rittal IP55/IP66 enclosure with filtered thermoelectric cooling / industrial AC",
      "Complete EPLAN electric P8 schematics, wire ferruling, and terminal numbering",
      "100% point-to-point continuity, insulation resistance, and dielectric high-pot tested"
    ],
    specs: [
      { name: "Rated Operating Voltage", value: "415V AC 3-Phase + N + E (50 Hz)", category: "Electrical" },
      { name: "Short Circuit Rating", value: "10 kA to 50 kA Icu", category: "Electrical" },
      { name: "Enclosure Ingress", value: "IP55 (Optional IP66 Stainless Steel)", category: "Environmental" },
      { name: "Cooling", value: "Cabinet Air Conditioner (1500W to 4000W)", category: "Thermal" }
    ],
    applications: [
      "Custom Special Purpose Machines (SPM)",
      "Robotic Welding & Palletizing Workcells",
      "Automotive Assembly Lines"
    ],
    brand: "Samarth Electrical",
    tags: ["Control Panel", "IEC 61439", "SPM Panel", "Automation Cabinet", "Pune"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-pnl-spm.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80"],
    relatedProductIds: ["prod-pnl-2", "prod-pnl-3", "prod-mot-2"],
    featured: true
  },
  {
    id: "prod-pnl-2",
    slug: "modular-remote-io-fieldbus-coupler",
    name: "Modular Industrial Remote I/O System (EtherCAT / PROFINET)",
    sku: "SAM-RIO-ECAT-16",
    categorySlug: "control-panels-and-electrical-automation",
    categoryName: "Control Panels & Electrical Automation",
    shortDescription: "Ultra-compact slice-based remote I/O terminal with push-in spring terminals and high-speed bus.",
    fullDescription: "Decentralized I/O system enabling flexible machine wiring. High-density slice architecture supports 16-channel digital inputs/outputs, 16-bit analog inputs, thermocouple/RTD, and encoder counter cards on a single fieldbus node.",
    features: [
      "Ultra-compact 12 mm slice width with tool-free push-in spring cage wiring",
      "Supports EtherCAT, PROFINET, Modbus TCP, and EtherNet/IP bus couplers",
      "Channel-level LED status and diagnostic feedback",
      "Hot-swappable electronic modules without disconnecting field wiring"
    ],
    specs: [
      { name: "Bus Speed", value: "100 Mbps Full Duplex", category: "Communication" },
      { name: "Max Slices per Node", value: "Up to 32 I/O Slice Modules", category: "Capacity" },
      { name: "Terminal Type", value: "Push-in Spring Clamp (0.08 - 1.5 mm²)", category: "Electrical" },
      { name: "Operating Temp", value: "-20°C to +60°C", category: "Environmental" }
    ],
    applications: [
      "Distributed SPM Machine Wiring",
      "Robotic Toolplate I/O Multiplexing",
      "Conveyor Line Sensor Concentration"
    ],
    brand: "Samarth Electrical",
    tags: ["Remote I/O", "EtherCAT", "PROFINET", "Slice IO", "DIN Rail"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-rio-ecat.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80"],
    relatedProductIds: ["prod-pnl-1", "prod-pne-3"],
    featured: false
  },
  {
    id: "prod-pnl-3",
    slug: "high-efficiency-din-rail-smps-24v-20a",
    name: "Industrial DIN-Rail Power Supply (24V DC / 20A / 480W)",
    sku: "SAM-PS-24V-20A",
    categorySlug: "control-panels-and-electrical-automation",
    categoryName: "Control Panels & Electrical Automation",
    shortDescription: "Ultra-compact 95.2% efficiency power supply with 150% power boost for heavy capacitive loads.",
    fullDescription: "High-reliability industrial switched-mode power supply (SMPS) designed for demanding 24/7 automation cabinets. Offers 95.2% peak efficiency, 150% extra power reserve (720W for 5 seconds), and active PFC.",
    features: [
      "95.2% ultra-high energy efficiency with minimal panel heat generation",
      "150% power boost reserve for starting high-surge DC valves and solenoid locks",
      "Wide AC input range: 85 - 264V AC / 120 - 370V DC",
      "DC-OK dry relay contact for PLC power monitoring"
    ],
    specs: [
      { name: "Output Voltage", value: "24V DC (Adjustable 24 - 28V)", category: "Electrical" },
      { name: "Rated Output Current", value: "20.0 A (Continuous 480W)", category: "Electrical" },
      { name: "Peak Current (5s)", value: "30.0 A (720W Boost)", category: "Electrical" },
      { name: "Efficiency", value: "95.2%", category: "Performance" },
      { name: "Dimensions (W x H x D)", value: "65 x 124 x 127 mm", category: "Dimensional" }
    ],
    applications: [
      "Automation Control Panels",
      "Servo Drive 24V Logic Supply",
      "PLC & HMI Power Distribution"
    ],
    brand: "Samarth Electrical",
    tags: ["SMPS", "24V Power Supply", "20A", "DIN Rail", "Power Boost"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-ps-24v.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&q=80"],
    relatedProductIds: ["prod-pnl-1", "prod-pnl-2"],
    featured: false
  },

  // ==========================================
  // 9. BEARINGS & PRECISION TOOLING (Luna / Seimitsu Reference)
  // ==========================================
  {
    id: "prod-brg-1",
    slug: "precision-spindle-angular-contact-bearing",
    name: "High-Precision Spindle Angular Contact Bearings (P4 / ABEC 7)",
    sku: "SAM-BRG-7008-P4-DB",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "Matched duplex paired 15°/25° angular contact ball bearings for high-speed CNC machine tool spindles.",
    fullDescription: "Manufactured from vacuum-degassed high-purity GCr15 bearing steel or hybrid ceramic (Si3N4) balls with phenolic resin cages. Preloaded in matched pairs (DB back-to-back, DF face-to-face, or DT tandem) for high radial rigidity and rotational speeds up to 36,000 RPM.",
    features: [
      "ISO Class 4 (P4) and ABEC 7 dimensional and running accuracy",
      "15° (C) or 25° (AC) contact angle for optimal radial and axial load balance",
      "Available with silicon nitride ceramic balls for low heat generation",
      "Laser-etched V-marking on outer rings for foolproof matching installation"
    ],
    specs: [
      { name: "Bearing Series", value: "7008 (40 mm ID x 68 mm OD x 15 mm W)", category: "Dimensional" },
      { name: "Precision Class", value: "ISO Class 4 (ABEC 7)", category: "Precision" },
      { name: "Contact Angle", value: "15° (C) / 25° (AC)", category: "Mechanical" },
      { name: "Limiting Speed (Oil-Air)", value: "32,000 RPM", category: "Performance" },
      { name: "Dynamic Radial Load (Cr)", value: "18.6 kN", category: "Load Capacity" }
    ],
    applications: [
      "CNC Milling & Routing Electro-Spindles",
      "High-Speed Precision Grinding Heads",
      "Centrifuge Rotors & Turbochargers"
    ],
    brand: "Samarth Bearings",
    tags: ["Spindle Bearing", "Angular Contact", "P4", "ABEC 7", "High Speed"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-brg-7008.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-lin-2", "prod-mec-2"],
    featured: true
  },
  {
    id: "prod-brg-2",
    slug: "self-lubricating-oiles-graphite-bushings",
    name: "Self-Lubricating Oiles Bronze Graphite Bushings (40mm ID)",
    sku: "SAM-BSH-500-4050",
    categorySlug: "industrial-components",
    categoryName: "Industrial Components",
    shortDescription: "High-load embedded solid lubricant bronze bush for maintenance-free heavy oscillating pivot pins.",
    fullDescription: "Continuous cast high-tensile brass alloy (CuZn25Al5Mn4Fe3) embedded with special solid graphite lubricant plugs. Operates completely dry without oil lubrication under extreme heavy loads, high temperatures up to 300°C, and oscillatory motions.",
    features: [
      "100% maintenance-free dry operation (zero grease required)",
      "Exceptional static load capacity up to 100 N/mm²",
      "Resistant to dirt, foreign abrasive particles, and water submersion",
      "Suitable for high-load, low-speed oscillatory and reciprocating pivots"
    ],
    specs: [
      { name: "Inside Diameter (ID)", value: "40 mm", category: "Dimensional" },
      { name: "Outside Diameter (OD)", value: "50 mm", category: "Dimensional" },
      { name: "Length", value: "50 mm", category: "Dimensional" },
      { name: "Max Allowable Static Load", value: "100 N/mm² (14,500 psi)", category: "Load Capacity" },
      { name: "Operating Temp Range", value: "-40°C to +300°C", category: "Environmental" }
    ],
    applications: [
      "Heavy Stamping Die & Mold Guide Bushings",
      "Hydraulic Cylinder Pivot Eyes",
      "Foundry & Steel Mill Furnace Ladles",
      "Heavy Earthmoving & Construction Linkages"
    ],
    brand: "Samarth Bearings",
    tags: ["Oiles Bushing", "Self-Lubricating", "Bronze Bush", "Graphite Bushing"],
    inStock: true,
    datasheetUrl: "assets/datasheets/sam-bsh-500.pdf",
    imageUrl: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80",
    gallery: ["https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80"],
    relatedProductIds: ["prod-lin-1", "prod-mec-3"],
    featured: false
  }
];
