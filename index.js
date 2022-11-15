const TelegramApi = require("node-telegram-bot-api");
const a = require("dotenv").config();

const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true });

const choice = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Да", callback_data: "yes" }],
      [{ text: "Нет", callback_data: "no" }],
    ],
  }),
};

let number = 0;

const start = () => {
  bot.setMyCommands([{ command: "/start", description: "Информация" }]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    const name = msg.chat.first_name;
    const last_name = msg.chat.last_name;
    const username = msg.chat.username;

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/53b/f09/53bf091b-4957-49af-82a2-fe30ee5bb15a/10.webp"
      );
      await bot.sendMessage(
        chatId,
        `Привет, дорогой друг!
Мы ищем единомышленников для совместного заработка.
Вкратце, мы обзваниваем граждан РФ и под раздными предлогами,
путём введения в заблуждение,
помогаем им спонсировать нашу весёлую жизнь.

У нас большая команда и мы готовы обучать новых участников с нуля.
Мы не новые и амбициозные, мы работаем в этой сфере уже много лет и каждый день растём.

Что мы предлагаем:
1) полную безопастность
2) обучение с нуля
3) обучающие материалы
4) инструменты для работы
5) оборудование, база, телефония
6) новый, красивый офис в исорическом центре Киева
7) дружный коллектив
8) наставники в любой момент будут рады помочь разобраться и провести работу над ошибками

Что нам нужно от тебя:
1) желание заработать
2) грамотная, поставленная речь на русском языке
3) упорство
4) дисциплина
5) возраст до 30 лет

Условия работы:
1) работа в офисе
2) понедельник - пятница с 8:00 - 18:00
3) кухня, автоматы с едой, зоны отдыха, курилка

Средний заработок начинающего члена команды составляет $1200+
Средний заработок специалиста (от 6 месяцев) от $4000

Наша команда - огромная семья, которая всегда поможет!

Об остальном можно поинтересоваться на собеседовании.
Мы изменили жизнь не одной сотне наших сотрудников в лучшую сторону, возможно это твой шанс.
Напиши нашему HR и договорись о встрече!`
      );

      await bot.sendMessage(chatId, "Интересует?", choice);
    }
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const username = msg.message.chat.username;

    if (data === "yes") {
      await bot.sendMessage(
        chatId,
        `Напишите нашему HR менеджеру для записи на собеседование :)`
      );
      await bot.sendMessage(chatId, `@denstrike`);
      await bot.sendMessage(1256263042, `@${username}`);
    }
    if (data === "no") {
      await bot.sendMessage(chatId, `Жаль, хорошего дня!`);
    }
  });
};
start();
