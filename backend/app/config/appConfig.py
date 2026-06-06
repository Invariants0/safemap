from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    database_url: str = "sqlite:///./safemap.db"
    gemini_api_key: str = ""
    frontend_url: str = "http://localhost:5173"
    use_dummy_data: bool = False
    model_config = SettingsConfigDict(env_file=".env", case_sensitive=False)


settings = Settings()
