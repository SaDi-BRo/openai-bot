import { bot } from '../core/bot.ts';
import { startController } from '../controllers/index.ts';

bot.command('start', startController);
