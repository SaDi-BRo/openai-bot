import { bot } from '../core/bot';
import { fetchOpenAIResponse } from '../core/openai';

bot.on('msg:text', async ctx => {
  const res = await fetchOpenAIResponse(ctx.message!.text);
  const message = res ?? 'Something went wrong';
  await ctx.reply(message);
});
