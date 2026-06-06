from pydantic_settings import BaseSettings, SettingsConfigDict
import os


class Settings(BaseSettings):
    database_url: str = "sqlite:///./safemap.db"
    gemini_api_key: str = ""
    frontend_url: str = "http://localhost:5173"
    use_dummy_data: bool = False
    model_config = SettingsConfigDict(
        env_file=".env" if os.path.exists(".env") else None,
        case_sensitive=False
    )


settings = Settings()


settings = Settings()
