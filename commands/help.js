const Discord = require('discord.js');
const prefix = "*"
module.exports.run = async (bot, msg, args) => {

  let hEmbed = new Discord.MessageEmbed()
  .setColor('5DF510')
  .setTitle(`Pannel d'aide`)
  .setDescription('Ici vous trouverez toutes les commandes disponibles !')
  .addField( prefix + `administration`, `Vous donneras l'accès au commandes administrateurs`)
  .addField( prefix + `modération`, `Vous donneras l'accès au commandes modérateurs`)
  .addField(`En dev`, 'En dev..')
  .setFooter('[Support serveur](https://discord.gg/t2tqR3b)', true )
  .setTimestamp();
  msg.channel.send(hEmbed);
}

module.exports.help = {
  name: "help"
}
