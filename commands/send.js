const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {

msg = msg.content.toLowerCase();

if(!msg.member.id('598197511882276894') && !msg.member.id('372099632173416449')) {
return msg.reply('Vous n\'êtes pas le propriétaire du bot')}
if(!msg.mentions.users.first) { return msg.channel.send("Veuillez spécifier une personne")}
let mention = msg.mentions.users.first();
mentionMessage = msg.content.slice (29);
if(mentionMessage === 'undefined') { return msg.channel.send("Veuillez spécifier un message")}
mention.sendMessage(mentionMessage);
msg.reply("message envoyé");


};
module.exports.help = {
  name: "send"
}
