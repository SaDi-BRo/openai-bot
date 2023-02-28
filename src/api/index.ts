import { webhookCallback } from 'grammy';
import { bot } from '../core/bot';

export default webhookCallback(bot, 'http');
