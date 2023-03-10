import { Context } from '../packages/index.ts';
import { axiod } from '../packages/index.ts';

const fetchOpenAI = async (text: string) => {
  const { data } = await axiod({
    url: 'https://api.openai.com/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('OPENAI_KEY')}`,
      'OpenAI-Organization': Deno.env.get('OPENAI_ORGANIZATION'),
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: text }],
      max_tokens: 4000,
    },
  });
  return data;
};

const messageController = async (ctx: Context) => {
  await ctx.replyWithChatAction('typing');
  try {
    const response = await fetchOpenAI(ctx.message!.text!);
    await ctx.reply(response.choices[0].message.content);
  } catch (error) {
    await ctx.reply(error.response.data.error.message);
  }
};

export { messageController };
