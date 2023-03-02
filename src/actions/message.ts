import { bot } from '../core/bot.ts';
import { messageController } from '../controllers/index.ts';

bot.on('message', messageController);
