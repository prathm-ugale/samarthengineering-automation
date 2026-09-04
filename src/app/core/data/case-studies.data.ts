import { CaseStudy } from "../models/case-study.model";

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    "id": "cs-1",
    "slug": "automotive-battery-pack-assembly-line",
    "title": "Automated EV Battery Module Assembly Line",
    "client": "Leading EV OEM (Pune)",
    "industry": "Automotive & EV",
    "summary": "Engineered an end-to-end automated battery module assembly and testing line, increasing throughput by 340%.",
    "challenge": "Manual cell placement and welding suffered from high variance and lengthy cycle times.",
    "solution": "Deployed a multi-robot cell with 2D vision guidance, high-speed actuators, and automated busbar screwing.",
    "metrics": [
      {
        "label": "Throughput Increase",
        "value": "+340%"
      },
      {
        "label": "Cycle Time Reduction",
        "value": "65%"
      },
      {
        "label": "Defect Rate",
        "value": "0.02%"
      }
    ],
    "productsUsed": [
      "6-Axis Articulated Robot",
      "High-Precision Linear Actuator",
      "EtherCAT Servo Drive"
    ],
    "imageUrl": "assets/images/projects/battery-line.svg",
    "featured": true
  }
];
