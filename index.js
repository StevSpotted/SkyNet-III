const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');


bot.on('ready', async () => {
  console.log("Le bot est lancé !");
  bot.user.setActivity("Je suis le nouveau !")
});

bot.on('message', async (msg) => {
  if(msg.content.startsWith(config.prefix) && !msg.author.bot) {
    let cmdArray = msg.content.substring(config.prefix.length).split(" ")
    let cmd = cmdArray[0]
    let args = cmdArray.slice(1)

    let command = commands.getCommand(cmd);
    if(command) command.run(bot, msg, args);


    if(msg.content.startsWith('Bonjour')) {
      const awnser = ["Salut", "Bonjour", "T ki?"];
      msg.channel.send(awnser[Math.floor(Math.random() * awnser.length)]);
    }


});




bot.login(process.env.BOT_TOKEN);
