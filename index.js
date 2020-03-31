const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "*";


bot.on('ready', async () => {
  bot.user.setActivity("Je suis le nouveau !")
});

bot.login(process.env.BOT_TOKEN);
