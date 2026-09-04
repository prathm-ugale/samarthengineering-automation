# -*- coding: utf-8 -*-
import os, json

def save(path, content):
    abs = os.path.abspath(path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', path)

# 1. CATEGORIES
categories = [
  {
    'id': 'cat-1', 'slug': 'motion-and-drive-systems', 'name': 'Motion & Drive Systems',
    'shortDescription': 'Precise, efficient movement for demanding machinery.',
    'fullDescription': 'Comprehensive range of AC servo systems, precision planetary gearboxes, variable frequency drives, and multi-axis motion controllers.',
    'icon': 'motion', 'productCount': 3,
    'highlightBullets': ['High-Dynamic AC Servo Motors', 'Precision Planetary Gearboxes', 'EtherCAT & CANopen Servo Drives'],
    'imageUrl': 'assets/images/categories/motion.svg'
  },
  {
    'id': 'cat-2', 'slug': 'pneumatic-automation', 'name': 'Pneumatic Automation',
    'shortDescription': 'Reliable actuation, air preparation, and control.',
    'fullDescription': 'Complete industrial pneumatic solutions including ISO cylinders, valve manifolds, and FRL units.',
    'icon': 'pneumatics', 'productCount': 3,
    'highlightBullets': ['ISO 15552 Standard Cylinders', 'Fieldbus Valve Manifolds', 'Modular FRL Air Preparation'],
    'imageUrl': 'assets/images/categories/pneumatics.svg'
  },
  {
    'id': 'cat-3', 'slug': 'linear-motion-and-actuators', 'name': 'Linear Motion & Actuators',
    'shortDescription': 'Controlled positioning for automated machinery.',
    'fullDescription': 'Precision linear guides, ground ball screws, electric actuators, and Cartesian modules.',
    'icon': 'linear', 'productCount': 3,
    'highlightBullets': ['High-Rigidity Linear Guides', 'C5 Precision Ball Screws', 'Electric Rodless Actuators'],
    'imageUrl': 'assets/images/categories/linear.svg'
  },
  {
    'id': 'cat-4', 'slug': 'sensors-and-machine-vision', 'name': 'Sensors & Machine Vision',
    'shortDescription': 'Intelligent sensing, vision inspection, and machine control.',
    'fullDescription': 'Industrial proximity sensors, 2D/3D vision cameras, laser gauges, and PLC automation controllers.',
    'icon': 'sensors', 'productCount': 3,
    'highlightBullets': ['IP67 Inductive Proximity Sensors', 'Industrial 2D Vision Systems', 'Modular Ethernet PLCs'],
    'imageUrl': 'assets/images/categories/sensors.svg'
  },
  {
    'id': 'cat-5', 'slug': 'robotics-and-end-effectors', 'name': 'Robotics & End Effectors',
    'shortDescription': 'Flexible handling, assembly, and process automation.',
    'fullDescription': '6-axis articulated robots, SCARAs, precision grippers, and vacuum EOAT tooling.',
    'icon': 'robotics', 'productCount': 3,
    'highlightBullets': ['6-Axis Articulated Robot Arms', 'Precision Parallel Grippers', 'Vacuum EOAT Tooling'],
    'imageUrl': 'assets/images/categories/robotics.svg'
  },
  {
    'id': 'cat-6', 'slug': 'material-handling-and-conveyors', 'name': 'Material Handling & Conveyors',
    'shortDescription': 'Streamlined transport, sorting, and accumulation systems.',
    'fullDescription': 'Modular belt conveyors, zero-pressure accumulation (ZPA) rollers, and pallet transfer tables.',
    'icon': 'conveyors', 'productCount': 3,
    'highlightBullets': ['Modular Plastic Belt Conveyors', '24V DC ZPA Roller Modules', 'Pallet Transfer Tables'],
    'imageUrl': 'assets/images/categories/conveyors.svg'
  },
  {
    'id': 'cat-7', 'slug': 'industrial-components', 'name': 'Industrial Components',
    'shortDescription': 'Durable mechanical components and transmission elements.',
    'fullDescription': 'Flexible jaw couplings, precision bearings, pneumatic power clamps, and timing belts.',
    'icon': 'components', 'productCount': 3,
    'highlightBullets': ['Curved-Jaw Flexible Couplings', 'Angular Contact Bearings', 'Pneumatic Power Clamps'],
    'imageUrl': 'assets/images/categories/components.svg'
  },
  {
    'id': 'cat-8', 'slug': 'control-panels-and-electrical-automation', 'name': 'Control Panels & Electrical Automation',
    'shortDescription': 'Custom panels, power distribution, and safety integration.',
    'fullDescription': 'Custom IEC-compliant control panels, remote I/O modules, 24V SMPS power supplies, and SIL3 safety relays.',
    'icon': 'panels', 'productCount': 3,
    'highlightBullets': ['Custom SPM Control Panels', 'EtherNet/IP Remote I/O', 'SIL3 Safety Relays'],
    'imageUrl': 'assets/images/categories/electrical.svg'
  }
]

save('src/app/core/data/categories.data.ts',
    'import { ProductCategory } from "../models/category.model";\n\nexport const CATEGORIES_DATA: ProductCategory[] = ' + json.dumps(categories, indent=2) + ';\n')
