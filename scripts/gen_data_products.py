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
    'id': 'prod-mot-1',
    'slug': 'ac-servo-motor-750w',
    'name': 'High-Dynamic AC Servo Motor (750W)',
    'sku': 'SAM-MS-075-E2',
    'categorySlug': 'motion-and-drive-systems',
    'categoryName': 'Motion & Drive Systems',
    'shortDescription': 'Compact, low-inertia AC servo motor for high-speed packaging and SPM applications.',
    'fullDescription': 'The SAM-MS-075-E2 is an industrial-grade 750W AC servo motor designed for rapid acceleration, precise angular positioning, and exceptional torque linearity. Integrates a 23-bit absolute optical encoder and IP65 enclosure.',
    'features': [
      '23-bit multi-turn absolute encoder (8,388,608 pulses/rev)',
      'Rated torque 2.39 Nm with 300% peak overload capacity',
      'Low cogging torque design for ultra-smooth low-speed motion',
      'Optional 24V DC fail-safe holding brake'
    ],
    'specs': [
      {'name': 'Rated Power', 'value': '750 W (0.75 kW)'},
      {'name': 'Rated Speed', 'value': '3000 RPM'},
      {'name': 'Max Speed', 'value': '6000 RPM'},
      {'name': 'Rated Torque', 'value': '2.39 Nm'},
      {'name': 'Peak Torque', 'value': '7.16 Nm'},
      {'name': 'Supply Voltage', 'value': '200-240V AC (1-Phase / 3-Phase)'},
      {'name': 'IP Rating', 'value': 'IP65 (Optional IP67)'},
      {'name': 'Flange Size', 'value': '80 mm'}
    ],
    'applications': [
      'Packaging Flow-Wrappers',
      'CNC Router & Milling Axes',
      'Cartesian Pick-and-Place Robots',
      'Precision Labelling Applicators'
    ],
    'brand': 'Samarth Motion',
    'tags': ['750W', 'Servo', 'IP65', '23-Bit Encoder'],
    'inStock': True,
    'datasheetUrl': 'assets/datasheets/sam-ms-075-datasheet.pdf',
    'imageUrl': 'assets/images/products/servo-motor.svg',
    'gallery': [
      'assets/images/products/servo-motor.svg',
      'assets/images/products/servo-motor-dim.svg'
    ],
    'relatedProductIds': ['prod-mot-2', 'prod-mot-3'],
    'featured': True
  },
  {
    'id': 'prod-mot-2',
    'slug': 'ethercat-ac-servo-drive',
    'name': 'EtherCAT AC Servo Drive (Pro Series)',
    'sku': 'SAM-SD-ECAT-15',
    'categorySlug': 'motion-and-drive-systems',
    'categoryName': 'Motion & Drive Systems',
    'shortDescription': 'Dual-core EtherCAT servo drive with auto-tuning and STO safety.',
    'fullDescription': 'High-performance digital servo drive supporting CoE (CAN over EtherCAT), Cyclic Synchronous Position (CSP), Safe Torque Off (STO SIL3), and real-time adaptive notch filtering.',
    'features': [
      '100 Mbps EtherCAT Bus with 250 µs cycle time',
      'Built-in STO (Safe Torque Off) SIL3 / PLe certified',
      'One-button auto-tuning with resonance suppression',
      'Supports 23-bit absolute and resolver feedback'
    ],
    'specs': [
      {'name': 'Compatible Power', 'value': '400W - 1.5 kW'},
      {'name': 'Fieldbus Interface', 'value': 'EtherCAT (CoE CiA 402)'},
      {'name': 'Input Voltage', 'value': '220V AC (+/- 15%), 50/60 Hz'},
      {'name': 'Safety Integrity', 'value': 'STO (IEC 61800-5-2 SIL3)'},
      {'name': 'V