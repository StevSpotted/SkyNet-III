const Discord = require('discord.js');
const prefix = "*"
module.exports.run = async (bot, msg, args) => {


let user;
if(!msg.member.hasPermission('MANAGE_SERVER')) return msg.reply(`Petit malin tu n'a pas les permission`)

  let aEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  .setThumbnail(msg.author.avatarURL())
  .setTitle(`**Pannel d'administration**`)
  .setDescription(`Commande d'administration disponible`)
  .addField(`**${prefix}say**`, `*Permet de faire parler le bot*`)
  .addField(`**${prefix}setupGC**`, `*Permet de créer un chat textuels inter-connecté avec les autres*`)
  .addField(`**${prefix}FuturUpdate** ?`, '*Potentiellement une deuxième énigme*')
  .setFooter(`Replying to ${msg.author.username}`)
  .setTimestamp();
  msg.channel.send(aEmbed);



}

module.exports.help = {
  name: "administration"
}
