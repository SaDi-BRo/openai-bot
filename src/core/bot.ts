import { Bot } from '../packages/index.ts';
import 'https://deno.land/std@0.178.0/dotenv/load.ts';

const bot = new Bot(Deno.env.get('BOT_TOKEN')!);

export { bot };
