export type TelegramConfigs = {
  token: string;
  chatId: string[] | string;
}

export type TwitchConfigs = {
  token: string;
  refreshToken: string;
  clientId: string;
  clientSecret: string;
  channelName: string;
}

export type AppConfig = {
  app: {
    port: number;
    host: string;
    env: 'development' | 'production' | 'test';
  },
  telegram: TelegramConfigs,
  twitch: TwitchConfigs
}