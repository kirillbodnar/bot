const TelegramApi = require("node-telegram-bot-api");

const token = "5660011759:AAEUeyOlHOzIdrkx4gWsfIu9eBssu79Cp1Q";

const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.setMyCommands([{ command: "/start", description: "Информация" }]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/53b/f09/53bf091b-4957-49af-82a2-fe30ee5bb15a/10.webp"
      );
      await bot.sendMessage(chatId, "Здарова ебать");
    }

    console.log(msg);
  });
};
start();