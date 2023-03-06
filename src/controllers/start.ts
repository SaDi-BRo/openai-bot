import { Context } from '../packages/index.ts';

const startController = async (ctx: Context) => {
  await ctx.reply(
    `<b>Welcome!</b>\n\nCommands:\n/image - Generates an image about you send a message\nExample: <code>/image a cat</code>\n\nJust send a message and AI responses it\nExample: <code>Who was the first president of Uzbekistan?</code>`,
    { parse_mode: 'HTML' }
  );
};

export { startController };
