const Discord = require('discord.js');


module.exports.run = async (bot, msg, args) => {

  if(!msg.member.guild.owner, !msg.member.id('372099632173416449')) {
   return msg.reply(`Vous ne pouvez pas utiliser cette commande`);
 }

  let botmsg = args.join(" ");
  msg.delete().catch();
  msg.channel.send(botmsg)
};
module.exports.help = {
  name: "say"
}
