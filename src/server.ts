import { buildApp } from './bootstrap/app.js';
import TelegramBotAdapter from './infrastructure/adapters/telegram/TelegramBotAdapter.js';
import Logger from './shared/helpers/Logger.js';

/**
 * Application entrypoint.
 *
 * This script is responsible for:
 * - Building the Fastify application instance using {@link buildApp}
 * - Starting the HTTP server on the configured port
 * - Logging server startup information
 * - Handling fatal startup errors gracefully
 *
 * @async
 * @function start
 * @returns {Promise<void>} Resolves when the server is successfully running
 */
Promise.all([
  (new TelegramBotAdapter()).setup()
]).finally(() => Logger.success('All services finished initialization.'));
