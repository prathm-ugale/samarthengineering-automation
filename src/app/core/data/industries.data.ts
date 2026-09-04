import { IndustryVertical } from "../models/industry.model";

export const INDUSTRIES_DATA: IndustryVertical[] = [
  {
    "id": "ind-1",
    "slug": "automotive-and-ev",
    "name": "Automotive & EV Manufacturing",
    "shortDescription": "High-throughput assembly, battery pack automation, and quality testing.",
    "fullDescription": "We deliver robust automation for Tier-1 automotive suppliers and EV manufacturers across India.",
    "icon": "car",
    "applications": [
      {
        "title": "EV Battery Module Assembly",
        "description": "Precision cell stacking, busbar laser welding, and EOL testing."
      },
      {
        "title": "Automotive Powertrain Assembly",
        "description": "Clutch, gearbox, and brake caliper automated pressfit and torque auditing."
      }
    ],
    "relatedProductSlugs": [
      "ac-servo-motor-750w",
      "6-axis-industrial-robot-arm"
    ],
    "relatedSolutionSlugs": [
      "factory-automation-and-spm"
    ],
    "imageUrl": "assets/images/industries/automotive.svg",
    "featured": true
  },
  {
    "id": "ind-2",
    "slug": "pharmaceuticals-and-life-sciences",
    "name": "Pharmaceuticals & Life Sciences",
    "shortDescription": "21 CFR Part 11 compliant vision inspection and sterile packaging.",
    "fullDescription": "Hygienic, washdown-rated automation systems for pharmaceutical blister packing, vial filling, and serialization.",
    "icon": "pharma",
    "applications": [
      {
        "title": "Blister Pack Inspection",
        "description": "High-speed 2D vision checking missing tablets, color defects, and foil seals."
      }
    ],
    "relatedProductSlugs": [
      "industrial-2d-vision-camera-sensor"
    ],
    "relatedSolutionSlugs": [
      "factory-automation-and-spm"
    ],
    "imageUrl": "assets/images/industries/pharma.svg",
    "featured": true
  }
];
