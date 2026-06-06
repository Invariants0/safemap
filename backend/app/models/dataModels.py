from sqlalchemy import Column, Integer, String, Float, DateTime, func
from app.database.databaseConfig import Base


class Report(Base):
    __tablename__ = "reports"

    id = Column(Integer, primary_key=True, index=True)
    incident_type = Column(String, nullable=False, index=True)
    severity = Column(String, nullable=False, index=True)
    hour_estimate = Column(Integer, nullable=True)
    lat = Column(Float, nullable=False, index=True)
    lng = Column(Float, nullable=False, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
