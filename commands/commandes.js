const Discord = require('discord.js');
const prefix = "*"
module.exports.run = async (bot, msg, args) => {


let user;

  let cEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  .setThumbnail(msg.author.avatarURL())
  .setTitle(`**Voici les commandes**`)
  .setDescription(`Commandes disponible`)
  .addField(`**${prefix}ping**`, `*Vous donnes vos ms*`)
  .addField(`**${prefix}8ball**`, `*FuturUpdate héhé*`)
  .addField(`**${prefix}Idog**`, '*FuturUpdate héhé*')
  .addField(`**${prefix}Icat**`, `*FuturUpdate héhé*`)
  .addField(`**${prefix}FuturUpdate ?**`, `*FuturUpdate héhé*`)
  .setFooter(`Replying to ${msg.author.username}`)
  .setTimestamp();
  msg.channel.send(cEmbed);



}

module.exports.help = {
  name: "commandes"
}
