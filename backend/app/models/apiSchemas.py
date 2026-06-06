from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional, Literal


class ReportInput(BaseModel):
    text: str = Field(..., min_length=10, max_length=5000)
    lat: float = Field(..., ge=-90, le=90)
    lng: float = Field(..., ge=-180, le=180)


class IncidentParsed(BaseModel):
    incident_type: str
    hour_estimate: Optional[int] = Field(None, ge=0, le=23)
    severity: Literal["low", "moderate", "high"]


class ReportResponse(BaseModel):
    id: int
    incident_type: str
    severity: str
    hour_estimate: Optional[int]
    lat: float
    lng: float
    created_at: datetime

    class Config:
        from_attributes = True


class Hotspot(BaseModel):
    id: str
    name: str
    lat: float
    lng: float
    report_count: int
    dominant_incident: str
    severity_score: float


class HotspotInsight(BaseModel):
    summary: str
    recommended_action: str
    risk_level: Literal["low", "moderate", "high"]


class Stats(BaseModel):
    total_reports: int
    total_hotspots: int
    most_common_incident: str
    peak_reporting_hour: int
