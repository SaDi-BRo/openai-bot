import { Bot, webhookCallback } from 'grammy';

const bot = new Bot(process.env.BOT_TOKEN!);

export default webhookCallback(bot, 'http');
