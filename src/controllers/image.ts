import { Context } from '../packages/index.ts';
import { axiod } from '../packages/index.ts';

const fetchOpenAI = async (text: string) => {
  const { data } = await axiod({
    url: 'https://api.openai.com/v1/images/generations',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('OPENAI_KEY')}`,
      'OpenAI-Organization': Deno.env.get('OPENAI_ORGANIZATION'),
    },
    data: {
      prompt: text,
      n: 1,
      size: '1024x1024',
    },
  });
  return data;
};

const imageController = async (ctx: Context) => {
  if (typeof ctx.match !== 'string' || !ctx.match)
    return await ctx.reply(
      'Please enter a correct command.\nExample: <code>/image a cat</code>',
      { parse_mode: 'HTML' }
    );
  await ctx.replyWithChatAction('upload_photo');
  const response = await fetchOpenAI(ctx.match);
  await ctx.replyWithPhoto(response.data[0].url, {
    caption: `Request: ${ctx.match}`,
  });
};

export { imageController };
