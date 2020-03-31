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

    let commands = commands.getCommand(cmd);
    if(command) command.run(bot, msg, args);

    if(cmd == 'help'){

            let hEmbed = new Discord.MessageEmbed()
            .setColor('5DF510')
            .setTitle(`Pannel d'aide`)
            .setDescription('Ici vous trouverez toutes les commandes disponibles !')
            .addField('En dev..', 'En dev..')
            .addField('En dev..', 'En dev..')
            .addField('En dev..', 'En dev..')
            .setFooter('Support serveur : ')
            .setTimestamp();
            msg.channel.send(hEmbed);
        }


  }

});

bot.login(process.env.BOT_TOKEN);
