# -*- coding: utf-8 -*-
import os, json

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)


products = [
  # Motion & Drive (4)
  {
    'id': 'prod-mot-1', 'slug': 'ac-servo-motor-750w',
    'name': 'High-Dynamic AC Servo Motor (750W)',
    'sku': 'SAM-MS-075-E2', 'categorySlug': 'motion-and-drive-systems',
    'categoryName': 'Motion & Drive Systems',
    'shortDescription': 'Compact, low-inertia AC servo motor for high-speed packaging and SPM applications.',
    'fullDescription': 'The SAM-MS-075-E2 is an industrial-grade 750W AC servo motor designed for rapid acceleration, precise angular positioning, and exceptional torque linearity. Integrates a 23-bit absolute optical encoder and IP65 enclosure.',
    'features': ['23-bit multi-turn absolute encoder', 'Rated torque 2.39 Nm with 300% peak overload', 'Low cogging torque design', 'Optional 24V DC fail-safe brake'],
    'specs': [{'name': 'Rated Power', 'value': '750 W (0.75 kW)'}, {'name': 'Rated Speed', 'value': '3000 RPM'}, {'name': 'Rated Torque', 'value': '2.39 Nm'}, {'name': 'Supply Voltage', 'value': '220V AC (1-Ph/3-Ph)'}, {'name': 'IP Rating', 'value': 'IP65'}, {'name': 'Flange Size', 'value': '80 mm'}],
    'applications': ['Packaging Flow-Wrappers', 'CNC Router Axes', 'Pick-and-Place Gantries', 'Labelling Applicators'],
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
    'fullDescription': 'High-performance digital servo drive supporting CoE (CAN over EtherCAT), Cyclic Synchronous Position (CSP), Safe Torque Off (STO SIL3), and real-time adaptive notch filtering.',
    'features': ['100 Mbps EtherCAT Bus with 250 µs cycle time', 'STO SIL3 / PLe certified', 'Auto-tuning with resonance suppression', 'Supports 23-bit absolute encoder'],
    'specs': [{'name': 'Compatible Power', 'value': '400W - 1.5 kW'}, {'name': 'Fieldbus Interface', 'value': 'EtherCAT (CoE)'}, {'name': 'Input Voltage', 'value': '220V AC (1-Ph/3-Ph)'}, {'name': 'Safety', 'value': 'STO SIL3'}, {'name': 'Bandwidth', 'value': '3.2 kHz'}],
    'applications': ['Multi-Axis Gantries', 'High-Speed Inspection', 'Electronics SMD Placement'],
    'brand': 'Samarth Motion', 'tags': ['EtherCAT', 'Servo Drive', 'STO', 'Auto-Tuning'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-sd-ecat-datasheet.pdf',
    'imageUrl': 'assets/images/products/servo-drive.svg',
    'gallery': ['assets/images/products/servo-drive.svg'],
    'relatedProductIds': ['prod-mot-1', 'prod-mot-3'], 'featured': True
  },
  {
    'id': 'prod-mot-3', 'slug': 'precision-planetary-gearbox',
    'name': 'Precision Helical Planetary Gearbox',
    'sku': 'SAM-PG-090-L1', 'categorySlug': 'motion-and-drive-systems',
    'categoryName': 'Motion & Drive Systems',
    'shortDescription': 'Low-backlash helical planetary reducer for servo applications.',
    'fullDescription': 'High-torque helical gear planetary gearbox featuring < 3 arcmin backlash, 97% efficiency, and universal adapter flange for all major servo motor frames.',
    'features': ['Ultra-low backlash (< 3 arcmin)', 'Carburized and ground helical gears', 'IP65 sealed synthetic lubrication', 'High radial and axial load capacity'],
    'specs': [{'name': 'Frame Size', 'value': '90 mm'}, {'name': 'Reduction Ratios', 'value': '3:1, 5:1, 7:1, 10:1'}, {'name': 'Backlash', 'value': '< 3 arcmin'}, {'name': 'Nominal Torque', 'value': 'Up to 160 Nm'}, {'name': 'Efficiency', 'value': '≥ 97%'}],
    'applications': ['Precision Rotary Tables', 'Pick & Place Axes', 'CNC Feed Drives', 'AGV Drive Wheels'],
    'brand': 'Samarth Motion', 'tags': ['Planetary', 'Low Backlash', 'Helical Gear'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-pg-090-datasheet.pdf',
    'imageUrl': 'assets/images/products/planetary-gearbox.svg',
    'gallery': ['assets/images/products/planetary-gearbox.svg'],
    'relatedProductIds': ['prod-mot-1', 'prod-mot-2'], 'featured': False
  },

  # Pneumatic Automation (3)
  {
    'id': 'prod-pneu-1', 'slug': 'iso-15552-standard-pneumatic-cylinder',
    'name': 'ISO 15552 Standard Pneumatic Cylinder',
    'sku': 'SAM-PC-ISO63', 'categorySlug': 'pneumatic-automation',
    'categoryName': 'Pneumatic Automation',
    'shortDescription': 'Robust double-acting pneumatic cylinder with adjustable cushioning.',
    'fullDescription': 'ISO 15552 profile and tie-rod cylinders featuring anodized aluminum barrels, hard-chrome plated piston rods, and built-in magnetic sensor slots.',
    'features': ['Adjustable end-position pneumatic cushioning', 'Integrated magnetic piston for proximity switches', 'High-wear PU seals for long service life', 'Conforms to ISO 15552 / VDMA 24562'],
    'specs': [{'name': 'Bore Size', 'value': '63 mm (Options: 32-125 mm)'}, {'name': 'Stroke Length', 'value': '25 - 1000 mm'}, {'name': 'Operating Pressure', 'value': '1.0 - 10.0 bar'}, {'name': 'Temperature Range', 'value': '-20°C to +80°C'}, {'name': 'Fluid', 'value': 'Filtered Compressed Air (40 µm)'}],
    'applications': ['Automotive Fixture Clamping', 'Material Pushers & Ejectors', 'Pallet Loading Arms'],
    'brand': 'Samarth Pneumatics', 'tags': ['ISO 15552', '63mm Bore', 'Double Acting'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-pc-iso63-datasheet.pdf',
    'imageUrl': 'assets/images/products/pneumatic-cylinder.svg',
    'gallery': ['assets/images/products/pneumatic-cylinder.svg'],
    'relatedProductIds': ['prod-pneu-2', 'prod-pneu-3'], 'featured': True
  },
  {
    'id': 'prod-pneu-2', 'slug': 'solenoid-valve-manifold',
    'name': '5/2 Fieldbus Solenoid Valve Manifold',
    'sku': 'SAM-SV-520-M8', 'categorySlug': 'pneumatic-automation',
    'categoryName': 'Pneumatic Automation',
    'shortDescription': 'Multi-station pneumatic valve island with IO-Link and PROFINET.',
    'fullDescription': 'Integrated 8-station valve island enabling centralized control of pneumatic actuators. Reduces wiring by 80% using a single Ethernet cable.',
    'features': ['IO-Link / PROFINET / EtherCAT bus node', 'Manual override push-turn buttons', 'LED status indication per solenoid', 'IP65 washdown protection'],
    'specs': [{'name': 'Valve Function', 'value': '5/2 Single / Double Solenoid'}, {'name': 'Flow Rate', 'value': '700 Nl/min'}, {'name': 'Coil Voltage', 'value': '24V DC (0.55W per coil)'}, {'name': 'Response Time', 'value': '≤ 12 ms'}, {'name': 'Protection', 'value': 'IP65'}],
    'applications': ['Automated Assembly Lines', 'Pharmaceutical Blister Machines', 'Robotic Tooling'],
    'brand': 'Samarth Pneumatics', 'tags': ['Valve Island', '5/2', 'IO-Link', 'IP65'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-sv-520-datasheet.pdf',
    'imageUrl': 'assets/images/products/valve-manifold.svg',
    'gallery': ['assets/images/products/valve-manifold.svg'],
    'relatedProductIds': ['prod-pneu-1', 'prod-pneu-3'], 'featured': False
  },
  {
    'id': 'prod-pneu-3', 'slug': 'modular-frl-unit',
    'name': 'Modular Filter-Regulator-Lubricator (FRL) Unit',
    'sku': 'SAM-FRL-300', 'categorySlug': 'pneumatic-automation',
    'categoryName': 'Pneumatic Automation',
    'shortDescription': 'High-efficiency air preparation unit with auto-drain and digital gauge.',
    'fullDescription': 'Compact modular FRL combination providing 5 µm particulate filtration, stable pressure regulation, and proportional micro-fog lubrication.',
    'features': ['5 µm + 0.01 µm coalescing dual filter option', 'Auto-drain mechanism', 'Lockable pressure adjustment knob', 'Bayonet-lock bowl guard for quick servicing'],
    'specs': [{'name': 'Port Size', 'value': 'G 3/8" (Optional G 1/4" - G 1")'}, {'name': 'Max Flow Rate', 'value': '3000 Nl/min'}, {'name': 'Set Pressure Range', 'value': '0.5 - 8.5 bar'}, {'name': 'Filtration Grade', 'value': '5 µm'}],
    'applications': ['Main Air Inlet Preparation', 'Pneumatic Control Cabinets', 'Packaging Machine Air Feed'],
    'brand': 'Samarth Pneumatics', 'tags': ['FRL', 'Air Preparation', 'Auto-Drain'], 'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-frl-300-datasheet.pdf',
    'imageUrl': 'assets/images/products/frl-unit.svg',
    'gallery': ['assets/images/products/frl-unit.svg'],
    'relatedProductIds': ['prod-pneu-1', 'prod-pneu-2'], 'featured': False
  }
]
