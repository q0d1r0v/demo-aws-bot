const {Telegraf} = require('telegraf')
const token = "5837189664:AAFqMqOPcS0LY_IVi8x5E-F4dIPlG623C68"

const bot = new Telegraf(token)

bot.start((msg) => {
    msg.reply("Assalomualeykum bu aws-demo-bot!")
})

bot.launch()