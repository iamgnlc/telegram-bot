require('dotenv').config();

import TelegramBot from 'node-telegram-bot-api';

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

let chatId;

const sendMessage = (match) => {
  bot.sendMessage(chatId, match, {
    parse_mode: 'Markdown',
  });
};

const splitMatch = (match) => {
  if (match)
    return match
      .trim()
      .split(' ')
      .filter((m) => m !== null)
      .map((m) => m.toLowerCase());
  else return '';
};

bot.onText(/gnlc(.+)?/i, (msg, match) => {
  if (process.env.NODE_ENV === 'development') console.log(msg);

  chatId = msg.chat.id;

  const matches = splitMatch(match[1]);

  matches.forEach((match) => {
    switch (true) {
      default:
        sendMessage(match);
        break;
    }
  });
});
