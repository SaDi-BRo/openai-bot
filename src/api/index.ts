import { webhookCallback } from 'grammy';
import { bot } from '../core/bot';

bot.api.setWebhook(process.env.WEBHOOK!);

export default webhookCallback(bot, 'http');
