const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
  let userToCheck = msg.mentions.users.first();
  if(!userToCheck) userToCheck = msg.author;

  let uEmbed = new Discord.MessageEmbed()
  .setAuthor(`UserInfo`, `${bot.user.displayAvatarURL}`)
  .setColor('0x10F5DD')
  .setTimestamp()
  .setFooter(`Demandé par ${msg.author.tag}`)
  .addField(`ID :`, `${userToCheck.id}`, true)
  .addField(`Discord Tag:`, `${userToCheck.tag}`, true)
  .addField(`Nickname :`, `${userToCheck.nickname || "None"}`, true)
  .addField(`Status :`, `${userToCheck.presence.status}`, true)
  .addField(`Joue à :`, `${userToCheck.presence.game ? userToCheck.presence.game.name : "Nothing"}`, true)
  .addField(`Compte créé le :`, `${dateFormat(userToCheck.createAt, "dd/mm/yyyy - HH:MM:ss")}`, true)
msg.chanel.send(uEmbed)
}

module.exports.help = {
  name: "userinfo"
}
