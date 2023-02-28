import { Bot, webhookCallback } from 'grammy';

const bot = new Bot(process.env.BOT_TOKEN!);

bot.on('message', async ctx => {
  await ctx.reply('Hi there!');
});

export default webhookCallback(bot, 'http');
