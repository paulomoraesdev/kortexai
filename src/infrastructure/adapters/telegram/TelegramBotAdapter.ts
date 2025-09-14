import TelegramBot from 'node-telegram-bot-api';
import BotAdapter from '@/core/interfaces/BotAdapter'
import Config from '@/shared/config/Config';
import { TelegramConfigs } from '@/core/types/AppConfig';
import Logger from '@/shared/helpers/Logger';

export default class TelegramBotAdapter implements BotAdapter {
  private config: TelegramConfigs;
  private botInstance: any = null;

  constructor() {
    this.config = Config.getInstance().getTelegramConfig();
    Logger.info('New Telegram bot instance called!');
  }

  setup(): void {
    Logger.info('setting up Telegram bot...');
    Logger.info('validating Telegram bot configuration keys...');
    if(!this.validateKeys() ) {
      Logger.error('Invalid Telegram configuration keys. Avoiding setup.');
      return;
    }
    this.botInstance = new TelegramBot(this.config.token, { polling: true });

    this.registerListeners();
    Logger.success('Telegram Bot is up and running!');
  }

  validateKeys(): boolean {
    return !!(this.config?.token && this.config?.chatId);
  }

  private registerListeners(): void {
    if (!this.botInstance) return;

    this.botInstance.onText(/\/ping/, (msg: any) => {
      if (!this.isAuthorizedChat(msg.chat.id)) return;
      this.botInstance.sendMessage(msg.chat.id, '🏓 Pong! Bot está funcionando no seu localhost!');
    });
  }

  private isAuthorizedChat(chatId: number): boolean {
    return chatId.toString() === this.config.chatId;
  }
}