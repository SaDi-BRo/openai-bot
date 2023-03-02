import { Context } from '../packages/index.ts';
import { axiod } from '../packages/index.ts';

const fetchOpenAI = async (text: string) => {
  const { data } = await axiod({
    url: 'https://api.openai.com/v1/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('OPENAI_KEY')}`,
      'OpenAI-Organization': Deno.env.get('OPENAI_ORGANIZATION'),
    },
    data: {
      model: 'text-davinci-003',
      prompt: text,
      max_tokens: 4000,
    },
  });
  return data;
};

const messageController = async (ctx: Context) => {
  const response = await fetchOpenAI(ctx.message!.text!);
  ctx.reply(response.choices[0].text);
};

export { messageController };
