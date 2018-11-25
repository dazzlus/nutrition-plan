const TelegramBot = require('node-telegram-bot-api')

const TOKEN = 'Здесь токен бота'

const bot = new TelegramBot(TOKEN,{
    polling: {
        interval: 300,
        autoStart: true,
        params:{
            timeout: 10
        }
    }
})

bot.onText(/\/start/, function (msg) {
    bot.sendMessage(msg.chat.id, msg.from.id, 'Привет, я могу подсказать тебе твой оптимальный рацион питания!');
});
    
  
  


