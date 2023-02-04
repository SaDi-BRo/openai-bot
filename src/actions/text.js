const { bot } = require('../core/bot');
const { fetchOpenAIResponse } = require('../core/openai');

bot.on('msg:text', async ctx => {
  const res = await fetchOpenAIResponse(ctx.message.text);
  await ctx.reply(res);
});
