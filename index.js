const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.js');


bot.on('ready', async () => {
  bot.user.setActivity("Je suis le nouveau !")
});

bot.login(config.token);
