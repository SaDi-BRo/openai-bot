const { Bot } = require('grammy');
const { config } = require('dotenv');

config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.start();

module.exports = { bot };
