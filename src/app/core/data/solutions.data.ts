import { AutomationSolution } from "../models/solution.model";

export const SOLUTIONS_DATA: AutomationSolution[] = [
  {
    "id": "sol-1",
    "slug": "factory-automation-and-spm",
    "title": "Factory Automation & Special Purpose Machines (SPM)",
    "shortDescription": "Custom automated machinery and turnkey assembly systems built to your specifications.",
    "fullDescription": "From concept to commissioning, Samarth Engineering designs and builds bespoke Special Purpose Machines (SPMs) that eliminate bottlenecks, increase throughput, and guarantee 100% quality compliance.",
    "icon": "cogs",
    "capabilities": [
      "3D CAD Mechanical Design & FEA Simulation",
      "PLC / HMI / SCADA Software Architecture",
      "Multi-Axis High-Speed Synchronization",
      "CE & IEC Safety Standards Compliance"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Requirements & URS Analysis",
        "description": "Deep dive into your part geometry, takt time, and plant constraints."
      },
      {
        "step": 2,
        "title": "3D Concept & Digital Twin",
        "description": "Full mechanical modeling with motion simulation and throughput validation."
      },
      {
        "step": 3,
        "title": "Fabrication & Assembly",
        "description": "Precision CNC machining, wiring to IEC standards, and pneumatic plumbing."
      },
      {
        "step": 4,
        "title": "FAT & Site Commissioning",
        "description": "Rigorous Factory Acceptance Testing followed by on-site installation and staff training."
      }
    ],
    "faqs": [
      {
        "question": "What is the typical lead time for a custom SPM?",
        "answer": "Typical lead times range from 8 to 16 weeks depending on complexity and component availability."
      },
      {
        "question": "Do you provide on-site support across India?",
        "answer": "Yes, our field engineering team provides complete on-site installation, commissioning, and AMC support."
      }
    ],
    "relatedProductSlugs": [
      "ac-servo-motor-750w",
      "ethercat-ac-servo-drive",
      "custom-automation-control-panel"
    ],
    "imageUrl": "assets/images/solutions/spm.svg",
    "featured": true
  },
  {
    "id": "sol-2",
    "slug": "robotic palletizing-and-material-handling",
    "title": "Robotic Palletizing & Material Handling",
    "shortDescription": "Autonomous end-of-line palletizing cells with smart grippers and safety fencing.",
    "fullDescription": "High-speed robotic palletizing systems designed to handle boxes, bags, drums, and trays with quick pattern changeover.",
    "icon": "robot",
    "capabilities": [
      "Multi-Infeed Pallet Pattern Generation",
      "Servo & Vacuum EOAT Customization",
      "Pallet Dispenser & Stretch Wrapper Integration"
    ],
    "processSteps": [
      {
        "step": 1,
        "title": "Layout & Reach Study",
        "description": "3D simulation of pallet patterns and robot work envelope."
      },
      {
        "step": 2,
        "title": "EOAT Tooling Engineering",
        "description": "Custom gripper design with safety sensing."
      },
      {
        "step": 3,
        "title": "Cell Integration",
        "description": "Safety fencing, light curtains, and PLC interlocks."
      }
    ],
    "faqs": [
      {
        "question": "Can the system handle different box sizes on the same line?",
        "answer": "Yes, our vision-guided systems dynamically identify box types and adapt palletizing patterns automatically."
      }
    ],
    "relatedProductSlugs": [
      "6-axis-industrial-robot-arm",
      "automated-modular-belt-conveyor"
    ],
    "imageUrl": "assets/images/solutions/palletizing.svg",
    "featured": true
  }
];
