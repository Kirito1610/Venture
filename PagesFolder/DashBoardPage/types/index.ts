export interface CampaignInfo {
  name: string;
  revenue: number;
  spent: number;
  platform: string;
  status: "string";
  ctr: number;
  clicks: number;
  startDate: string; // ISO string
  endDate: string;   // ISO string
  impressions: number;
  conversions: number;
}

