const Discord = require('discord.js');
const prefix = "*"
module.exports.run = async (bot, msg, args) => {


let user;
if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply(`Petit malin tu n'a pas les permission`)

  let mEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  .setThumbnail(msg.author.avatarURL())
  .setTitle(`**Pannel de modération**`)
  .setDescription('Commandes de modération')
  .addField(`**${prefix}clear**`, `*Permet de nettoyer le chat*`)
  .addField(`**${prefix}kick**`, `*Permet de kick une personne*`)
  .addField(`**${prefix}ban**`, '*Permet de ban une personne*')
  .addField(`**${prefix}FuturUpdate ?`, `*Potentiellement une deuxième énigme*`)
  .setFooter(`Replying to ${msg.author.username}`)
  .setTimestamp();
  msg.channel.send(mEmbed);



}

module.exports.help = {
  name: "modération"
}
