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

    let command = commands.getCommand(cmd);
    if(command) command.run(bot, msg, args);


  }

});

bot.login(process.env.BOT_TOKEN);
