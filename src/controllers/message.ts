import { Context } from '../packages/index.ts';
import { axiod } from '../packages/index.ts';

const fetchOpenAI = async (text: string) => {
  const { data } = await axiod({
    url: 'https://api.openai.com/v1/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Deno.env.get('OPENAI_KEY')}`,
    },
    data: {
      model: 'text-davinci-003',
      prompt: text,
    },
  });
  return data;
};

const messageController = async (ctx: Context) => {
  const asd = await fetchOpenAI(ctx.message!.text!);
  ctx.reply(asd.choices[0].text);
};

export { messageController };
