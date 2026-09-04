import { ProductCategory } from "../models/category.model";

export const CATEGORIES_DATA: ProductCategory[] = [
  {
    id: "cat-1",
    slug: "motion-and-drive-systems",
    name: "Motion & Drive Systems",
    shortDescription: "Precise, efficient movement for demanding machinery.",
    description: "Precise, efficient movement for demanding machinery.",
    fullDescription: "Comprehensive range of AC servo systems, precision planetary gearboxes, variable frequency drives (VFDs), and multi-axis motion controllers engineered for high dynamics and sub-arcmin positioning accuracy.",
    icon: "motion",
    productCount: 4,
    highlightBullets: [
      "High-Dynamic AC Servo Motors (50W - 15kW)",
      "Precision Planetary Gearboxes (< 3 arcmin)",
      "EtherCAT, CANopen & Modbus TCP Protocols",
      "High-Torque Density Vector VFDs"
    ],
    highlights: [
      "High-Dynamic AC Servo Motors (50W - 15kW)",
      "Precision Planetary Gearboxes (< 3 arcmin)",
      "EtherCAT, CANopen & Modbus TCP Protocols",
      "High-Torque Density Vector VFDs"
    ],
    imageUrl: "assets/images/categories/motion.svg"
  },
  {
    id: "cat-2",
    slug: "pneumatic-automation",
    name: "Pneumatic Automation",
    shortDescription: "Reliable actuation, air preparation, and control.",
    description: "Reliable actuation, air preparation, and control.",
    fullDescription: "Complete industrial pneumatic solutions from ISO-standard cylinders and compact guided slides to multi-station Fieldbus solenoid valve manifolds, air preparation (FRL) units, and high-durability fittings.",
    icon: "pneumatics",
    productCount: 4,
    highlightBullets: [
      "ISO 15552 & ISO 6432 Standard Cylinders",
      "Compact Guided Twin-Rod Slide Tables",
      "High-Flow Multi-Pin Fieldbus Valve Manifolds",
      "Modular Filter-Regulator-Lubricator Systems"
    ],
    highlights: [
      "ISO 15552 & ISO 6432 Standard Cylinders",
      "Compact Guided Twin-Rod Slide Tables",
      "High-Flow Multi-Pin Fieldbus Valve Manifolds",
      "Modular Filter-Regulator-Lubricator Systems"
    ],
    imageUrl: "assets/images/categories/pneumatics.svg"
  },
  {
    id: "cat-3",
    slug: "linear-motion-and-actuators",
    name: "Linear Motion & Actuators",
    shortDescription: "Controlled positioning for automated machinery.",
    description: "Controlled positioning for automated machinery.",
    fullDescription: "High-rigidity linear guide rails, ground and rolled ball screws, electric rod-style and rodless actuators, plus multi-axis Cartesian gantry modules tailored for repeatable high-speed material positioning.",
    icon: "linear",
    productCount: 4,
    highlightBullets: [
      "Heavy-Duty 4-Row Linear Motion Guides",
      "C5/C7 Precision Ground Ball Screws",
      "Integrated Servo Electric Linear Actuators",
      "Multi-Axis Cartesian Gantry Modules"
    ],
    highlights: [
      "Heavy-Duty 4-Row Linear Motion Guides",
      "C5/C7 Precision Ground Ball Screws",
      "Integrated Servo Electric Linear Actuators",
      "Multi-Axis Cartesian Gantry Modules"
    ],
    imageUrl: "assets/images/categories/linear.svg"
  },
  {
    id: "cat-4",
    slug: "sensors-and-machine-vision",
    name: "Sensors & Machine Vision",
    shortDescription: "Intelligent sensing, vision inspection, and machine control.",
    description: "Intelligent sensing, vision inspection, and machine control.",
    fullDescription: "Industrial-grade inductive proximity, photoelectric, and laser displacement sensors combined with edge-AI machine vision cameras, optical code readers, and modular PLC/HMI automation controllers.",
    icon: "sensors",
    productCount: 4,
    highlightBullets: [
      "IP67/IP69K Inductive & Photoelectric Sensors",
      "Industrial 2D/3D Machine Vision Cameras",
      "Sub-Micron Laser Distance Measurement",
      "Modular Micro & Rack PLCs with Remote I/O"
    ],
    highlights: [
      "IP67/IP69K Inductive & Photoelectric Sensors",
      "Industrial 2D/3D Machine Vision Cameras",
      "Sub-Micron Laser Distance Measurement",
      "Modular Micro & Rack PLCs with Remote I/O"
    ],
    imageUrl: "assets/images/categories/sensors.svg"
  },
  {
    id: "cat-5",
    slug: "robotics-and-end-effectors",
    name: "Robotics & End Effectors",
    shortDescription: "Flexible handling, assembly, and process automation.",
    description: "Flexible handling, assembly, and process automation.",
    fullDescription: "6-axis articulated industrial robotic arms, high-speed SCARA robots, precision pneumatic and electric grippers, and vacuum end-of-arm tooling built for automotive, pharma, and FMCG packaging.",
    icon: "robotics",
    productCount: 4,
    highlightBullets: [
      "6-Axis Articulated Robot Arms (3kg - 50kg payload)",
      "Ultra-Fast SCARA Robots for Electronics Assembly",
      "Precision Parallel & Angular Grippers",
      "High-Vacuum Multi-Suction EOAT Systems"
    ],
    highlights: [
      "6-Axis Articulated Robot Arms (3kg - 50kg payload)",
      "Ultra-Fast SCARA Robots for Electronics Assembly",
      "Precision Parallel & Angular Grippers",
      "High-Vacuum Multi-Suction EOAT Systems"
    ],
    imageUrl: "assets/images/categories/robotics.svg"
  },
  {
    id: "cat-6",
    slug: "material-handling-and-conveyors",
    name: "Material Handling & Conveyors",
    shortDescription: "Streamlined transport, sorting, and accumulation systems.",
    description: "Streamlined transport, sorting, and accumulation systems.",
    fullDescription: "Engineered modular belt conveyors, zero-pressure accumulation (ZPA) motorized rollers, pallet transfer modules, and vertical indexing lifters designed for seamless factory intralogistics.",
    icon: "conveyors",
    productCount: 4,
    highlightBullets: [
      "Modular Plastic & PU Slat Conveyor Lines",
      "24V DC Motorized Driven Roller (ZPA) Systems",
      "Heavy-Duty 1000kg Pallet Transfer Tables",
      "Pneumatic & Servo-Driven Vertical Lifters"
    ],
    highlights: [
      "Modular Plastic & PU Slat Conveyor Lines",
      "24V DC Motorized Driven Roller (ZPA) Systems",
      "Heavy-Duty 1000kg Pallet Transfer Tables",
      "Pneumatic & Servo-Driven Vertical Lifters"
    ],
    imageUrl: "assets/images/categories/conveyors.svg"
  },
  {
    id: "cat-7",
    slug: "industrial-components",
    name: "Industrial Components",
    shortDescription: "Durable mechanical components and transmission elements.",
    description: "Durable mechanical components and transmission elements.",
    fullDescription: "Essential industrial mechanical elements including heavy-duty toggle clamps, precision anti-vibration levelling pads, industrial latches, AGV/AMR caster wheels, zero-backlash disc couplings, precision ground gear racks, and self-lubricating bushings.",
    icon: "components",
    productCount: 8,
    highlightBullets: [
      "Heavy-Duty Vertical & Horizontal Toggle Clamps",
      "Precision Anti-Vibration Swivel Levelling Pads",
      "Industrial SUS316 Tension Latches & Locks",
      "AGV / AMR Polyurethane Heavy-Duty Caster Wheels",
      "Zero-Backlash Disc & Curved Jaw Couplings",
      "Hardened & Ground DIN 6 Helical Gear Racks"
    ],
    highlights: [
      "Heavy-Duty Vertical & Horizontal Toggle Clamps",
      "Precision Anti-Vibration Swivel Levelling Pads",
      "Industrial SUS316 Tension Latches & Locks",
      "AGV / AMR Polyurethane Heavy-Duty Caster Wheels",
      "Zero-Backlash Disc & Curved Jaw Couplings",
      "Hardened & Ground DIN 6 Helical Gear Racks"
    ],
    imageUrl: "assets/images/categories/components.svg"
  },
  {
    id: "cat-8",
    slug: "control-panels-and-electrical-automation",
    name: "Control Panels & Electrical Automation",
    shortDescription: "Custom panels, power distribution, and safety integration.",
    description: "Custom panels, power distribution, and safety integration.",
    fullDescription: "Custom industrial automation control panels engineered to IEC/IS standards, featuring remote I/O modules, DIN-rail SMPS power supplies, and dual-channel safety relays.",
    icon: "panels",
    productCount: 4,
    highlightBullets: [
      "IEC 61439-Compliant SPM & Line Control Panels",
      "EtherNet/IP, PROFINET & EtherCAT Remote I/O",
      "High-Efficiency 24V DC Power Supplies (SMPS)",
      "SIL3 / PLe Certified Safety Interlock Relays"
    ],
    highlights: [
      "IEC 61439-Compliant SPM & Line Control Panels",
      "EtherNet/IP, PROFINET & EtherCAT Remote I/O",
      "High-Efficiency 24V DC Power Supplies (SMPS)",
      "SIL3 / PLe Certified Safety Interlock Relays"
    ],
    imageUrl: "assets/images/categories/electrical.svg"
  }
];
