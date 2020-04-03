const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async (bot, msg, args) => {
  let userToCheck = msg.mentions.users.first();
  if(!userToCheck) userToCheck = msg.author;

  let uEmbed = new Discord.MessageEmbed()
  //.setAuthor(`UserInfo`, `${bot.user.displayAvatarURL}`)
  .setColor('0x10F5DD')
  .setTimestamp()
  .setFooter(`Demandé par ${msg.author.tag}`)
  .addField(`ID :`, `${userToCheck.id}`, true)
  .addField(`Discord Tag:`, `${userToCheck.tag}`, true)
  .addField(`Nickname :`, `${userToCheck.nickname || "None"}`, true)
  .addField(`Status :`, `${userToCheck.presence.status}`, true)
  .addField(`Joue à :`, `${userToCheck.presence.game ? userToCheck.presence.game.name : "Nothing"}`, true)
  .addField('Créé le :', `${moment.utc(userToCheck.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
msg.channel.send(uEmbed)
}

module.exports.help = {
  name: "userinfo"
}
