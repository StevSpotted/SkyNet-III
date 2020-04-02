const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {


//let user;


  let hEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  //.setThumbnail(bot.user.avatarURL)
  .setTitle(`Pannel d'aide`)
  .setDescription('Ici vous trouverez toutes les commandes disponibles !')
  .addField(`*administration`, `Vous donneras l'accès au commandes administrateurs`)
  .addField(`*modération`, `Vous donneras l'accès au commandes modérateurs`)
  .addField(`**Ici se situera la boutique du serveur`, `[Allez à la boutique]En cours`)
  .addField(`Support server`, '[Rejoindre ce magnifique serveur](https://discordapp.com/invite/t2tqR3b)')
  //.setFooter(`Replying to ${message.author.username}`)
  .setTimestamp();
  msg.channel.send(hEmbed);
}

module.exports.help = {
  name: "help"
}
