const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {


if(!msg.member.guild.owner && !msg.member.id('372099632173416449')) {
return message.reply('Vous n\'êtes pas le propriétaire du bot')}:
if(!message.mentions.users.first) { return message.channel.send("Veuillez spécifier une personne")}
let mention = message.mentions.users.first();
mentionMessage = message.content.slice (29);
if(mentionMessage === 'undefined') { return message.channel.send("Veuillez spécifier un message")}
mention.sendMessage(mentionMessage);
message.reply("message envoyé");


};
module.exports.help = {
  name: "ping"
}
