const {Telegraf} = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)


bot.command('start', (ctx) => {
    try {
    bot.telegram.sendMessage(ctx.chat.id, 'Привет!)');
    bot.telegram.sendMessage(ctx.chat.id, 'Введите свой рост и вес через пробел:');
    } catch(e) {
        console.error(e)
    }

})

bot.launch();