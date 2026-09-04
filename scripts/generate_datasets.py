# -*- coding: utf-8 -*-
import os, json

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


products = [
  {
    'id': 'prod-mot-1', 'slug': 'ac-servo-motor-750w',
    'name': 'High-Dynamic AC Servo Motor (750W)',
    'sku': 'SAM-MS-075-E2', 'categorySlug': 'motion-and-drive-systems',
    'categoryName': 'Motion & Drive Systems',
    'shortDescription': 'Compact, low-inertia AC servo motor for high-speed packaging and SPM applications.',
    'fullDescription': 'Engineered for rapid acceleration, precise angular positioning, and exceptional torque linearity. Integrates a 23-bit absolute encoder and IP65 enclosure.',
    'features': ['23-bit multi-turn absolute encoder', 'Rated torque 2.39 Nm (300% peak)', 'Low cogging torque design'],
    'specs': [{'name': 'Rated Power', 'value': '750 W (0.75 kW)'}, {'name': 'Rated Speed', 'value': '3000 RPM'}, {'name': 'Rated Torque', 'value': '2.39 Nm'}, {'name': 'Supply Voltage', 'value': '220V AC'}, {'name': 'IP Rating', 'value': 'IP65'}],
    'applications': ['Packaging Flow-Wrappers', 'CNC Router Axes', 'Pick & Place Gantries'],
    'brand': 'Samarth Motion', 'tags': ['750W', 'Servo', 'IP65', '23-Bit'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-ms-075-datasheet.pdf',
    'imageUrl': 'assets/images/products/servo-motor.svg',
    'gallery': ['assets/images/products/servo-motor.svg'],
    'relatedProductIds': ['prod-mot-2', 'prod-mot-3'], 'featured': True
  },
  {
    'id': 'prod-mot-2', 'slug': 'ethercat-ac-servo-drive',
    'name': 'EtherCAT AC Servo Drive (Pro Series)',
    'sku': 'SAM-SD-ECAT-15', 'categorySlug': 'motion-and-drive-systems',
    'categoryName': 'Motion & Drive Systems',
    'shortDescription': 'Dual-core EtherCAT servo drive with auto-tuning and STO safety.',
    'fullDescription': 'High-performance digital servo drive supporting CoE (CAN over EtherCAT), CSP positioning, and STO SIL3 safety.',
    'features': ['100 Mbps EtherCAT Bus', 'STO SIL3 / PLe certified', 'Auto-tuning with resonance suppression'],
    'specs': [{'name': 'Power Range', 'value': '400W - 1.5 kW'}, {'name': 'Fieldbus', 'value': 'EtherCAT (CoE)'}, {'name': 'Supply', 'value': '220V AC'}, {'name': 'Safety', 'value': 'STO SIL3'}],
    'applications': ['Multi-Axis Gantries', 'SMD Placement', 'Robotic Arms'],
    'brand': 'Samarth Motion', 'tags': ['EtherCAT', 'Servo Drive', 'STO'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-sd-ecat-datasheet.pdf',
    'imageUrl': 'assets/images/products/servo-drive.svg',
    'gallery': ['assets/images/products/servo-drive.svg'],
    'relatedProductIds': ['prod-mot-1'], 'featured': True
  },
  {
    'id': 'prod-pneu-1', 'slug': 'iso-15552-standard-pneumatic-cylinder',
    'name': 'ISO 15552 Standard Pneumatic Cylinder',
    'sku': 'SAM-PC-ISO63', 'categorySlug': 'pneumatic-automation',
    'categoryName': 'Pneumatic Automation',
    'shortDescription': 'Robust double-acting pneumatic cylinder with adjustable cushioning.',
    'fullDescription': 'ISO 15552 profile cylinder featuring anodized aluminum barrels and hard-chrome plated piston rods.',
    'features': ['Adjustable end-position cushioning', 'Integrated magnetic piston', 'ISO 15552 compliant'],
    'specs': [{'name': 'Bore Size', 'value': '63 mm'}, {'name': 'Stroke', 'value': '25 - 1000 mm'}, {'name': 'Pressure', 'value': '1.0 - 10.0 bar'}],
    'applications': ['Automotive Fixtures', 'Material Pushers', 'Pallet Loading'],
    'brand': 'Samarth Pneumatics', 'tags': ['ISO 15552', '63mm', 'Double Acting'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-pc-iso63-datasheet.pdf',
    'imageUrl': 'assets/images/products/pneumatic-cylinder.svg',
    'gallery': ['assets/images/products/pneumatic-cylinder.svg'],
    'relatedProductIds': ['prod-pneu-2'], 'featured': True
  },
  {
    'id': 'prod-lin-1', 'slug': 'high-precision-electric-linear-actuator',
    'name': 'High-Precision Electric Linear Actuator',
    'sku': 'SAM-LA-1000', 'categorySlug': 'linear-motion-and-actuators',
    'categoryName': 'Linear Motion & Actuators',
    'shortDescription': 'Compact, repeatable linear positioning for automated assembly and inspection.',
    'fullDescription': 'Compact aluminum extrusion actuator with integrated C5 ground ball screw, strokes up to 1000mm, and +/- 0.01 mm repeatability.',
    'features': ['C5 Ground Ball Screw drive', '+/- 0.01 mm repeatability', 'Dust-proof stainless steel strip cover'],
    'specs': [{'name': 'Stroke Range', 'value': '100 - 1000 mm'}, {'name': 'Payload (Horizontal)', 'value': 'Up to 80 kg'}, {'name': 'Repeatability', 'value': '± 0.01 mm'}],
    'applications': ['Automated Assembly Cells', 'Precision Dispensing'],
    'brand': 'Samarth Linear', 'tags': ['Actuator', 'Ball Screw', '±0.01mm'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-la-1000-datasheet.pdf',
    'imageUrl': 'assets/images/products/linear-actuator.svg',
    'gallery': ['assets/images/products/linear-actuator.svg'],
    'relatedProductIds': ['prod-mot-1'], 'featured': True
  },
  {
    'id': 'prod-sen-1', 'slug': 'industrial-2d-vision-camera-sensor',
    'name': 'Industrial 2D Machine Vision Sensor',
    'sku': 'SAM-VIS-2000', 'categorySlug': 'sensors-and-machine-vision',
    'categoryName': 'Sensors & Machine Vision',
    'shortDescription': 'All-in-one smart vision sensor for OCR, barcode reading, and defect inspection.',
    'fullDescription': 'Compact 5MP smart camera with integrated LED illumination and onboard AI inspection algorithms.',
    'features': ['5.0 MP Global Shutter', 'Built-in illumination', 'EtherNet/IP & PROFINET'],
    'specs': [{'name': 'Resolution', 'value': '2592 x 1944 (5MP)'}, {'name': 'Frame Rate', 'value': '60 FPS'}, {'name': 'IP Rating', 'value': 'IP67'}],
    'applications': ['Date Code Verification', 'Part Orientation'],
    'brand': 'Samarth Vision', 'tags': ['Vision Sensor', '5MP', 'IP67'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-vis-2000-datasheet.pdf',
    'imageUrl': 'assets/images/products/vision-sensor.svg',
    'gallery': ['assets/images/products/vision-sensor.svg'],
    'relatedProductIds': ['prod-sen-1'], 'featured': True
  },
  {
    'id': 'prod-rob-1', 'slug': '6-axis-industrial-robot-arm',
    'name': '6-Axis Articulated Industrial Robot (10kg)',
    'sku': 'SAM-ROB-6A10', 'categorySlug': 'robotics-and-end-effectors',
    'categoryName': 'Robotics & End Effectors',
    'shortDescription': 'Fast, precise 6-axis robot arm for palletizing and machine tending.',
    'fullDescription': 'High-speed 6-axis articulated robot with 1400 mm reach and 10 kg payload. Includes teach pendant and IP67 wrist.',
    'features': ['1400 mm working radius', '± 0.03 mm repeatability', 'IP67 wrist protection'],
    'specs': [{'name': 'Payload', 'value': '10 kg'}, {'name': 'Max Reach', 'value': '1400 mm'}, {'name': 'Repeatability', 'value': '± 0.03 mm'}],
    'applications': ['CNC Tending', 'Carton Palletizing', 'Automotive Welding'],
    'brand': 'Samarth Robotics', 'tags': ['6-Axis', '10kg', 'IP67'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-rob-6a10-datasheet.pdf',
    'imageUrl': 'assets/images/products/robot-arm.svg',
    'gallery': ['assets/images/products/robot-arm.svg'],
    'relatedProductIds': ['prod-rob-2'], 'featured': True
  },
  {
    'id': 'prod-mat-1', 'slug': 'automated-modular-belt-conveyor',
    'name': 'Automated Modular Belt Conveyor System',
    'sku': 'SAM-CV-MB500', 'categorySlug': 'material-handling-and-conveyors',
    'categoryName': 'Material Handling & Conveyors',
    'shortDescription': 'Heavy-duty plastic modular belt conveyor for factory transfer.',
    'fullDescription': 'Engineered plastic modular belt conveyor with anodized aluminum bed and low-friction wearstrips.',
    'features': ['FDA-approved PP belt', 'High load capacity (up to 300kg)', 'Adjustable guide rails'],
    'specs': [{'name': 'Belt Width', 'value': '500 mm'}, {'name': 'Length', 'value': '2 - 20 meters'}, {'name': 'Speed', 'value': '5 - 45 m/min'}],
    'applications': ['FMCG Packaging', 'Automotive Parts Transfer'],
    'brand': 'Samarth Conveyors', 'tags': ['Conveyor', 'Modular Belt', 'FMCG'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-cv-mb500-datasheet.pdf',
    'imageUrl': 'assets/images/products/conveyor.svg',
    'gallery': ['assets/images/products/conveyor.svg'],
    'relatedProductIds': ['prod-mat-2'], 'featured': True
  },
  {
    'id': 'prod-pnl-1', 'slug': 'custom-automation-control-panel',
    'name': 'Custom Automation & Motion Control Panel',
    'sku': 'SAM-PNL-CUSTOM', 'categorySlug': 'control-panels-and-electrical-automation',
    'categoryName': 'Control Panels & Electrical Automation',
    'shortDescription': 'Turnkey IEC-61439 compliant PLC and Servo control cabinet.',
    'fullDescription': 'Fully engineered electrical control panel with CAD schematics, European switchgear, and full FAT testing.',
    'features': ['IEC 61439 compliance', 'IP55 / IP66 enclosures', 'Dual-channel E-Stop safety'],
    'specs': [{'name': 'Supply Voltage', 'value': '415V AC (3-Phase)'}, {'name': 'Control Voltage', 'value': '24V DC'}, {'name': 'IP Rating', 'value': 'IP55 / IP66'}],
    'applications': ['SPM Automation', 'Packaging Lines', 'Robotic Cells'],
    'brand': 'Samarth Automation', 'tags': ['Control Panel', 'IEC 61439'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-pnl-custom-datasheet.pdf',
    'imageUrl': 'assets/images/products/control-panel.svg',
    'gallery': ['assets/images/products/control-panel.svg'],
    'relatedProductIds': ['prod-mot-2'], 'featured': True
  }
]

save('src/app/core/data/products.data.ts',
    'import { Product } from "../models/product.model";\n\nexport const PRODUCTS_DATA: Product[] = ' + json.dumps(products, indent=2) + ';\n')

solutions = [
  {
    'id': 'sol-1', 'slug': 'factory-automation-and-spm',
    'title': 'Factory Automation & Special Purpose Machines (SPM)',
    'shortDescription': 'Custom automated machinery and turnkey assembly systems built to your specifications.',
    'fullDescription': 'From concept to commissioning, Samarth Engineering designs and builds bespoke Special Purpose Machines (SPMs) that eliminate bottlenecks, increase throughput, and guarantee 100% quality compliance.',
    'icon': 'cogs',
    'capabilities': ['3D CAD Mechanical Design & FEA Simulation', 'PLC / HMI / SCADA Software Architecture', 'Multi-Axis High-Speed Synchronization', 'CE & IEC Safety Standards Compliance'],
    'processSteps': [
      {'step': 1, 'title': 'Requirements & URS Analysis', 'description': 'Deep dive into your part geometry, takt time, and plant constraints.'},
      {'step': 2, 'title': '3D Concept & Digital Twin', 'description': 'Full mechanical modeling with motion simulation and throughput validation.'},
      {'step': 3, 'title': 'Fabrication & Assembly', 'description': 'Precision CNC machining, wiring to IEC standards, and pneumatic plumbing.'},
      {'step': 4, 'title': 'FAT & Site Commissioning', 'description': 'Rigorous Factory Acceptance Testing followed by on-site installation and staff training.'}
    ],
    'faqs': [
      {'question': 'What is the typical lead time for a custom SPM?', 'answer': 'Typical lead times range from 8 to 16 weeks depending on complexity and component availability.'},
      {'question': 'Do you provide on-site support across India?', 'answer': 'Yes, our field engineering team provides complete on-site installation, commissioning, and AMC support.'}
    ],
    'relatedProductSlugs': ['ac-servo-motor-750w', 'ethercat-ac-servo-drive', 'custom-automation-control-panel'],
    'imageUrl': 'assets/images/solutions/spm.svg',
    'featured': True
  },
  {
    'id': 'sol-2', 'slug': 'robotic palletizing-and-material-handling',
    'title': 'Robotic Palletizing & Material Handling',
    'shortDescription': 'Autonomous end-of-line palletizing cells with smart grippers and safety fencing.',
    'fullDescription': 'High-speed robotic palletizing systems designed to handle boxes, bags, drums, and trays with quick pattern changeover.',
    'icon': 'robot',
    'capabilities': ['Multi-Infeed Pallet Pattern Generation', 'Servo & Vacuum EOAT Customization', 'Pallet Dispenser & Stretch Wrapper Integration'],
    'processSteps': [
      {'step': 1, 'title': 'Layout & Reach Study', 'description': '3D simulation of pallet patterns and robot work envelope.'},
      {'step': 2, 'title': 'EOAT Tooling Engineering', 'description': 'Custom gripper design with safety sensing.'},
      {'step': 3, 'title': 'Cell Integration', 'description': 'Safety fencing, light curtains, and PLC interlocks.'}
    ],
    'faqs': [
      {'question': 'Can the system handle different box sizes on the same line?', 'answer': 'Yes, our vision-guided systems dynamically identify box types and adapt palletizing patterns automatically.'}
    ],
    'relatedProductSlugs': ['6-axis-industrial-robot-arm', 'automated-modular-belt-conveyor'],
    'imageUrl': 'assets/images/solutions/palletizing.svg',
    'featured': True
  }
]

save('src/app/core/data/solutions.data.ts',
    'import { AutomationSolution } from "../models/solution.model";\n\nexport const SOLUTIONS_DATA: AutomationSolution[] = ' + json.dumps(solutions, indent=2) + ';\n')

industries = [
  {
    'id': 'ind-1', 'slug': 'automotive-and-ev',
    'name': 'Automotive & EV Manufacturing',
    'shortDescription': 'High-throughput assembly, battery pack automation, and quality testing.',
    'fullDescription': 'We deliver robust automation for Tier-1 automotive suppliers and EV manufacturers across India.',
    'icon': 'car',
    'applications': [
      {'title': 'EV Battery Module Assembly', 'description': 'Precision cell stacking, busbar laser welding, and EOL testing.'},
      {'title': 'Automotive Powertrain Assembly', 'description': 'Clutch, gearbox, and brake caliper automated pressfit and torque auditing.'}
    ],
    'relatedProductSlugs': ['ac-servo-motor-750w', '6-axis-industrial-robot-arm'],
    'relatedSolutionSlugs': ['factory-automation-and-spm'],
    'imageUrl': 'assets/images/industries/automotive.svg',
    'featured': True
  },
  {
    'id': 'ind-2', 'slug': 'pharmaceuticals-and-life-sciences',
    'name': 'Pharmaceuticals & Life Sciences',
    'shortDescription': '21 CFR Part 11 compliant vision inspection and sterile packaging.',
    'fullDescription': 'Hygienic, washdown-rated automation systems for pharmaceutical blister packing, vial filling, and serialization.',
    'icon': 'pharma',
    'applications': [
      {'title': 'Blister Pack Inspection', 'description': 'High-speed 2D vision checking missing tablets, color defects, and foil seals.'}
    ],
    'relatedProductSlugs': ['industrial-2d-vision-camera-sensor'],
    'relatedSolutionSlugs': ['factory-automation-and-spm'],
    'imageUrl': 'assets/images/industries/pharma.svg',
    'featured': True
  }
]

save('src/app/core/data/industries.data.ts',
    'import { IndustryVertical } from "../models/industry.model";\n\nexport const INDUSTRIES_DATA: IndustryVertical[] = ' + json.dumps(industries, indent=2) + ';\n')

case_studies = [
  {
    'id': 'cs-1', 'slug': 'automotive-battery-pack-assembly-line',
    'title': 'Automated EV Battery Module Assembly Line',
    'client': 'Leading EV OEM (Pune)', 'industry': 'Automotive & EV',
    'summary': 'Engineered an end-to-end automated battery module assembly and testing line, increasing throughput by 340%.',
    'challenge': 'Manual cell placement and welding suffered from high variance and lengthy cycle times.',
    'solution': 'Deployed a multi-robot cell with 2D vision guidance, high-speed actuators, and automated busbar screwing.',
    'metrics': [
      {'label': 'Throughput Increase', 'value': '+340%'},
      {'label': 'Cycle Time Reduction', 'value': '65%'},
      {'label': 'Defect Rate', 'value': '0.02%'}
    ],
    'productsUsed': ['6-Axis Articulated Robot', 'High-Precision Linear Actuator', 'EtherCAT Servo Drive'],
    'imageUrl': 'assets/images/projects/battery-line.svg',
    'featured': True
  }
]

save('src/app/core/data/case-studies.data.ts',
    'import { CaseStudy } from "../models/case-study.model";\n\nexport const CASE_STUDIES_DATA: CaseStudy[] = ' + json.dumps(case_studies, indent=2) + ';\n')

resources = [
  {
    'id': 'res-1', 'slug': 'servo-sizing-guide', 'title': 'Servo Motor Sizing & Inertia Matching Guide',
    'type': 'engineering-guide', 'fileFormat': 'PDF', 'fileSize': '2.4 MB',
    'description': 'A step-by-step engineering guide to sizing AC servo motors for direct-drive and geared applications.',
    'downloadUrl': 'assets/resources/servo-sizing-guide.pdf',
    'tags': ['Servo', 'Engineering', 'Sizing'], 'publishDate': '2026-01-15'
  },
  {
    'id': 'res-2', 'slug': 'machine-vision-lighting-whitepaper', 'title': 'Industrial Machine Vision Lighting Techniques',
    'type': 'whitepaper', 'fileFormat': 'PDF', 'fileSize': '3.8 MB',
    'description': 'Comprehensive whitepaper on darkfield, brightfield, and dome lighting for inspection.',
    'downloadUrl': 'assets/resources/machine-vision-lighting.pdf',
    'tags': ['Vision', 'Lighting', 'Quality'], 'publishDate': '2026-02-10'
  }
]

save('src/app/core/data/resources.data.ts',
    'import { IndustrialResource } from "../models/resource.model";\n\nexport const RESOURCES_DATA: IndustrialResource[] = ' + json.dumps(resources, indent=2) + ';\n')

print('All datasets successfully generated!')
