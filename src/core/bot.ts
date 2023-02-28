import { Bot } from 'grammy';
import { config } from 'dotenv';

config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.api.setWebhook(process.env.WEBHOOK!);

export { bot };
