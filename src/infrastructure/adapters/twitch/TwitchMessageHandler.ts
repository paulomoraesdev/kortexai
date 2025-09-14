import MessageHandler from "@/core/interfaces/MessageHandler";

export default class TwitchMessageHandler implements MessageHandler {
  shouldHandle(text: string): boolean {
    return text === 'yes';
  }

  handle(text: string): void {
    if (!this.shouldHandle(text)) return;
    
    console.log('TwitchMessageHandler', text);
  }
}