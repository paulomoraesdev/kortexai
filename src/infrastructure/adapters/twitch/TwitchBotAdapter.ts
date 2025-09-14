import BotAdapter from '@/core/interfaces/BotAdapter'
import Config from '@/shared/config/Config';

export default class TwitchBotAdapter implements BotAdapter {

  constructor() {
    this.setup();
  }

  setup(): void {
    if( !this.validateKeys() ) {
      console.log('Invalid Twitch configuration keys. Avoiding setup.');
      return;
    }
  }

  validateKeys(): boolean {
    const config = Config.getInstance().getTwitchConfig();
    return !!(
      config.token 
      && config.refreshToken 
      && config.clientId 
      && config.clientSecret 
      && config.channelName
    );
  }
}