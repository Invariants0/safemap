export interface Location {
  lat: number;
  lng: number;
  display_name: string;
}

export interface ReportInput {
  text: string;
  lat: number;
  lng: number;
}

export interface Report {
  id: number;
  incident_type: string;
  severity: string;
  hour_estimate: number | null;
  lat: number;
  lng: number;
  created_at: string;
}

export interface Hotspot {
  id: string;
  name: string;
  lat: number;
  lng: number;
  report_count: number;
  dominant_incident: string;
  severity_score: number;
}

export interface HotspotInsight {
  summary: string;
  recommended_action: string;
  risk_level: 'low' | 'moderate' | 'high';
}

export interface Stats {
  total_reports: number;
  total_hotspots: number;
  most_common_incident: string;
  peak_reporting_hour: number;
}

export interface NominatimResult {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
  type: string;
}
