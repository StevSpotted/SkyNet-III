const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');


bot.on('ready', async () => {
  console.log("Le bot est lancé !");
  bot.user.setActivity("Je suis le nouveau !")
});

bot.on('message', async (msg) => {
  if(msg.content.startsWith(config.prefix.length) && !msg.author.bot) {
    cmdArray = msg.content.substring(1).split()
    cmd = cmdArray[0]
    args = cmdarray.slice(1)

    msg.channel.send(cmd)
  }


  if(msg.content === "ping"){
    return message.channel.send("Pong !") };
})

bot.login(config.token);
