const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'games_masters.aternos.me',
  port: 63609,
  username: 'botahmed',
  version: '1.21.4'
})

bot.on('login', () => {
  console.log('botahmed has joined the server!')
  bot.chat('Ahmed is awesome!')
  setInterval(() => {
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 500)
  }, 1000)
})

bot.on('error', err => console.log('Error:', err))
bot.on('end', () => console.log('botahmed has left the server'))
