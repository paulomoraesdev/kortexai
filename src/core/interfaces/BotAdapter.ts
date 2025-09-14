export default interface BotAdapter {
  validateKeys(): boolean;
  setup(): void;
}