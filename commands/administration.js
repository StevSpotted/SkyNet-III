const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {


let user;
if(!msg.member.hasPermission('MANAGE_SERVER')) return msg.reply(`Petit malin tu n'a pas les permission`)

  let aEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  .setThumbnail(bot.user.avatarURL())
  .setTitle(`**Pannel d'administration'**`)
  .setDescription(`Commande d'administration disponible`)
  .addField(`*say`, `Permet de faire parler le bot`)
  .addField(`*En cours`, `En cours`)
  .addField(`En cours`, 'En cours')
  .setFooter(`Replying to ${msg.author.username}`)
  .setTimestamp();
  msg.channel.send(aEmbed);



}

module.exports.help = {
  name: "administration"
}
