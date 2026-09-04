export type ResourceType = 'Catalogue' | 'Datasheet' | 'Application Guide' | 'Technical Article' | 'engineering-guide' | 'whitepaper' | 'guide' | string;

export interface IndustrialResource {
  id: string;
  slug?: string;
  title: string;
  type: ResourceType;
  category?: string;
  format?: 'PDF' | 'ZIP' | 'DOC' | string;
  fileFormat?: string;
  size?: string;
  fileSize?: string;
  description: string;
  downloadUrl: string;
  dateAdded?: string;
  publishDate?: string;
  tags?: string[];
  featured?: boolean;
}
