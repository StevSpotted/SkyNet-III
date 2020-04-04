const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {

  if(!msg.member.hasPermission('ADMINISTRATOR')) {
    return msg.reply("Désolé tu n'as pas les permissions administrateur")
  }
  if(!msg.guild.me.hasPermission('ADMINISTRATOR')) {
    return msg.reply("Désolé je n'ai pas les permissions administrateur")
  }
  msg.guild.createChannel("global-chat")



};

module.exports.help = {
  name: "setupGC"
}
