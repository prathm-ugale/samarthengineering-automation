export interface QuoteRequest {
  fullName: string;
  companyName: string;
  workEmail: string;
  phone: string;
  city: string;
  productOrSolution: string;
  sku?: string;
  requirement: string;
  attachmentFileName?: string;
  consent: boolean;
}
