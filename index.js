const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '781858344:AAEl6L7NOYhArmaPiV4l3wAIaXWKBU9DNTY'

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
    
  
  


