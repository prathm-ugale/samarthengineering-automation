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
    'features': ['23-bit multi-turn absolute encoder', 'Rated torque 2.39 Nm (300% peak)', 'Low cogging torque design', 'Optional 24V DC fail-safe brake'],
    'specs': [{'name': 'Rated Power', 'value': '750 W (0.75 kW)'}, {'name': 'Rated Speed', 'value': '3000 RPM'}, {'name': 'Rated Torque', 'value': '2.39 Nm'}, {'name': 'Supply Voltage', 'value': '220V AC'}, {'name': 'IP Rating', 'value': 'IP65'}, {'name': 'Flange Size', 'value': '80 mm'}],
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
    'features': ['100 Mbps EtherCAT Bus (250 µs cycle)', 'STO SIL3 / PLe certified', 'Auto-tuning with resonance suppression'],
    'specs': [{'name': 'Power Range', 'value': '400W - 1.5 kW'}, {'name': 'Fieldbus', 'value': 'EtherCAT (CoE)'}, {'name': 'Supply', 'value': '220V AC'}, {'name': 'Safety', 'value': 'STO SIL3'}],
    'applications': ['Multi-Axis Gantries', 'SMD Placement', 'Robotic Arms'],
    'brand': 'Samarth Motion', 'tags': ['EtherCAT', 'Servo Drive', 'STO'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-sd-ecat-datasheet.pdf',
    'imageUrl': 'assets/images/products/servo-drive.svg',
    'gallery': ['assets/images/products/servo-drive.svg'],
    'relatedProductIds': ['prod-mot-1'], 'featured': True
  },
  {
    'id': 'prod-mot-3', 'slug': 'precision-planetary-gearbox',
    'name': 'Precision Helical Planetary Gearbox',
    'sku': 'SAM-PG-090-L1', 'categorySlug': 'motion-and-drive-systems',
    'categoryName': 'Motion & Drive Systems',
    'shortDescription': 'Low-backlash helical planetary reducer for servo applications.',
    'fullDescription': 'High-torque helical gear planetary gearbox featuring < 3 arcmin backlash, 97% efficiency.',
    'features': ['Ultra-low backlash (< 3 arcmin)', 'Carburized and ground helical gears', 'IP65 sealed'],
    'specs': [{'name': 'Frame Size', 'value': '90 mm'}, {'name': 'Ratios', 'value': '3:1, 5:1, 10:1'}, {'name': 'Backlash', 'value': '< 3 arcmin'}, {'name': 'Efficiency', 'value': '≥ 97%'}],
    'applications': ['Rotary Tables', 'Pick & Place', 'CNC Feed Drives'],
    'brand': 'Samarth Motion', 'tags': ['Planetary', 'Low Backlash'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-pg-090-datasheet.pdf',
    'imageUrl': 'assets/images/products/planetary-gearbox.svg',
    'gallery': ['assets/images/products/planetary-gearbox.svg'],
    'relatedProductIds': ['prod-mot-1'], 'featured': False
  },

  # PNEUMATICS
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
    'id': 'prod-pneu-2', 'slug': 'solenoid-valve-manifold',
    'name': '5/2 Fieldbus Solenoid Valve Manifold',
    'sku': 'SAM-SV-520-M8', 'categorySlug': 'pneumatic-automation',
    'categoryName': 'Pneumatic Automation',
    'shortDescription': 'Multi-station pneumatic valve island with IO-Link and PROFINET.',
    'fullDescription': 'Integrated 8-station valve island enabling centralized control of pneumatic actuators.',
    'features': ['IO-Link / PROFINET bus node', 'LED status indication', 'IP65 washdown protection'],
    'specs': [{'name': 'Function', 'value': '5/2 Solenoid'}, {'name': 'Flow Rate', 'value': '700 Nl/min'}, {'name': 'Voltage', 'value': '24V DC'}],
    'applications': ['Assembly Lines', 'Pharma Blister Machines'],
    'brand': 'Samarth Pneumatics', 'tags': ['Valve Island', '5/2', 'IO-Link'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-sv-520-datasheet.pdf',
    'imageUrl': 'assets/images/products/valve-manifold.svg',
    'gallery': ['assets/images/products/valve-manifold.svg'],
    'relatedProductIds': ['prod-pneu-1'], 'featured': False
  },

  # LINEAR MOTION
  {
    'id': 'prod-lin-1', 'slug': 'high-precision-electric-linear-actuator',
    'name': 'High-Precision Electric Linear Actuator',
    'sku': 'SAM-LA-1000', 'categorySlug': 'linear-motion-and-actuators',
    'categoryName': 'Linear Motion & Actuators',
    'shortDescription': 'Compact, repeatable linear positioning for automated assembly, inspection, and material-handling applications.',
    'fullDescription': 'Compact aluminum extrusion a