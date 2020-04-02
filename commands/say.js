const Discord = require('discord.js');


module.exports.run = async (bot, msg, args) => {

  if(!message
    .member.guild.owner,
    .member.id('372099632173416449'))
   return message.reply(`Vous ne pouvez pas utiliser cette commande`);

  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage)
};
module.exports.help = {
  name: "clear"
}
