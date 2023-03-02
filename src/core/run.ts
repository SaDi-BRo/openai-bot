import { webhookCallback, serve } from '../packages/index.ts';
import { bot } from './bot.ts';

const handleUpdate = webhookCallback(bot, 'std/http');

Deno.env.get('MODE') === 'development' && bot.start();
Deno.env.get('MODE') === 'production' &&
  serve(async req => {
    if (req.method === 'POST') {
      const url = new URL(req.url);
      if (url.pathname.slice(1) === bot.token) {
        try {
          return await handleUpdate(req);
        } catch (err) {
          console.error(err);
        }
      }
    }
    return new Response();
  });
