const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {


let user = message.guild.member;
let message = author.username;


  let hEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  .setThumbnail(bot.user.avatarURL)
  .setTitle(`Pannel d'aide`)
  .setDescription('Ici vous trouverez toutes les commandes disponibles !')
  .addField(`*administration`, `Vous donneras l'accès au commandes administrateurs`)
  .addField(`*modération`, `Vous donneras l'accès au commandes modérateurs`)
  .addField(`En dev`, '[En dev..](https://google.com)')
  //.setFooter(`Replying to ${message.author.username}`)
  .setTimestamp();
  msg.channel.send(hEmbed);
}

module.exports.help = {
  name: "help"
}
