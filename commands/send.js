const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {


if(!msg.member.guild.owner && !msg.member.id('372099632173416449')) {
return msg.reply('Vous n\'êtes pas le propriétaire du bot')}:
if(!msg.mentions.users.first) { return msg.channel.send("Veuillez spécifier une personne")}
let mention = msg.mentions.users.first();
mentionMessage = msg.content.slice (29);
if(mentionMessage === 'undefined') { return msg.channel.send("Veuillez spécifier un message")}
mention.sendMsg(mentionMessage);
msg.reply("message envoyé");


};
module.exports.help = {
  name: "send"
}