const Discord = require('discord.js');
const config = require('./config.js');
module.exports.run = async (bot, msg, args) => {

  let hEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  .setTitle(`Pannel d'aide`)
  .setDescription('Ici vous trouverez toutes les commandes disponibles !')
  .addField(`${config.prefix}administration`, `Vous donneras l'accès au commandes administrateurs`)
  .addField(`${config.prefix}modération`, `Vous donneras l'accès au commandes modérateurs`)
  .addField(`${config.prefix}En dev`, 'En dev..')
  .setFooter('[Support serveur](https://discord.gg/t2tqR3b)', true )
  .setTimestamp();
  msg.channel.send(hEmbed);
}

module.exports.help = {
  name: "help"
}
