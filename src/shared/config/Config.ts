import { AppConfig } from "@/core/types/AppConfig";
import 'dotenv/config'

/**
 * Custom error class for configuration-related errors.
 */
class ConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConfigurationError';
  }
}

/**
 * Configuration manager class.
 * Provides centralized access to application configuration values
 * from environment variables and constants.
 */
export default class Config {
  private static instance: Config;
  private configs: AppConfig;

  private constructor() {
    this.configs = {
      app: {
        port: Number(process.env.PORT) || 3000,
        host: process.env.HOST || 'http://localhost',
        env: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development'
      },
      telegram: {
        token: process.env.TELEGRAM_BOT_TOKEN || "",
        chatId: process.env.AUTHORIZED_USER_IDS || ""
      },
      twitch: {
        token: process.env.TWITCH_ACCESS_TOKEN || "",
        refreshToken: process.env.TWITCH_REFRESH_TOKEN || "",
        clientId: process.env.TWITCH_CLIENT_ID || "",
        clientSecret: process.env.TWITCH_CLIENT_SECRET || "",
        channelName: process.env.TWITCH_CHANNEL_NAME || ""
      }
    };
  }

  /**
   * Gets the singleton instance of the Config class.
   * @static
   * @returns {Config} The singleton Config instance
   */
  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }

  getConfigs(): AppConfig {
    return this.configs;
  }

  /**
   * Gets Telegram bot configuration.
   * @returns Telegram configuration including token and chat ID
   */
  public getTelegramConfig() {
    return this.configs.telegram;
  }

  /**
   * Gets Twitch bot configuration.
   * @returns Twitch configuration including tokens, client credentials, and channel
   */
  public getTwitchConfig() {
    return this.configs.twitch;
  }

  setConfigs(configs: AppConfig): AppConfig {
    this.configs = configs;
    return this.configs;
  }
}