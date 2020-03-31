const Discord = require('discord.js');
module.exports.run = async (bot, msg, args) => {

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

module.exports.help = {
  name: "help"
}
