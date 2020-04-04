const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {

  if(!message.member.hasPermission('ADMINISTRATOR')) {
    return message.reply("Désolé tu n'as pas les permissions administrateur")
  }
  if(!message.member.me.hasPermission('ADMINISTRATOR')) {
    return message.reply("Désolé je n'ai pas les permissions administrateur")
  }
  message.guild.createChannel("global-chat").then(channel => {
    channel.setTopic('global-chat')
  });

};

module.exports.help = {
  name: "setupGC"
}
