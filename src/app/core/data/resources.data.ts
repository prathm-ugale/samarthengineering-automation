import { IndustrialResource } from "../models/resource.model";

export const RESOURCES_DATA: IndustrialResource[] = [
  {
    "id": "res-1",
    "slug": "servo-sizing-guide",
    "title": "Servo Motor Sizing & Inertia Matching Guide",
    "type": "engineering-guide",
    "fileFormat": "PDF",
    "fileSize": "2.4 MB",
    "description": "A step-by-step engineering guide to sizing AC servo motors for direct-drive and geared applications.",
    "downloadUrl": "assets/resources/servo-sizing-guide.pdf",
    "tags": [
      "Servo",
      "Engineering",
      "Sizing"
    ],
    "publishDate": "2026-01-15"
  },
  {
    "id": "res-2",
    "slug": "machine-vision-lighting-whitepaper",
    "title": "Industrial Machine Vision Lighting Techniques",
    "type": "whitepaper",
    "fileFormat": "PDF",
    "fileSize": "3.8 MB",
    "description": "Comprehensive whitepaper on darkfield, brightfield, and dome lighting for inspection.",
    "downloadUrl": "assets/resources/machine-vision-lighting.pdf",
    "tags": [
      "Vision",
      "Lighting",
      "Quality"
    ],
    "publishDate": "2026-02-10"
  }
];
