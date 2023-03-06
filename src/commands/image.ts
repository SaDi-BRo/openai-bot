import { bot } from '../core/bot.ts';
import { imageController } from '../controllers/index.ts';

bot.command('image', imageController);
