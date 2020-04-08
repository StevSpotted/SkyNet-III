const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
msg.delete();
 let eEmbed = new Discord.MessageEmbed()

 .setColor('0x1A10F5')
 .setDescription(`Énigme à résoudre`)
 .setTitle(`Énigme résolu !`)
 .addField(`Le mot que m'avait dit mon créateur a été trouvé par <@598197511882276894>`, `Félicitation à elle !`)
 .addField(`Le mot été **Update** `, `Update de qui , Update de quoi ?`)
 .addField(`C'est ce que vous aller devoir tenter de savoir !`, `Comme le nom l'indique c'est une énigme, creusez vous la tête !`)
 .addField(`Cette énigme comportera plusieurs problème`, `Du facile au plus difficile`)
 .addField( `Et d'ailleurs le premier problème c'est **주문**`, `Oui moi non plus j'ai pas trop compris mais il ma dit qu'il fallait enlever la dernière lettres`)
 .setFooter(`Je vous recontacterai si j'ai du nouveau`)
 msg.channel.send(eEmbed)
}
module.exports.help = {
  name: "énigme"
}
