const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {

  if(!msg.member.hasPermission('ADMINISTRATOR')) {
    return msg.reply("Désolé tu n'as pas les permissions administrateur")
  }
  if(!msg.guild.me.hasPermission('ADMINISTRATOR')) {
    return msg.reply("Désolé je n'ai pas les permissions administrateur")
  }
    msg.guild.channels.create('global-chat').then(channel => {
      channel.setTopic('Global chat')
      msg.channel.send("Et voilà Global-Chat créé en haut de votre serveur")
});



};

module.exports.help = {
  name: "setupGC"
}
