import { Bot } from 'grammy';
import { config } from 'dotenv';

config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.start();

export { bot };
