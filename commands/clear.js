const Discord = require('discord.js');

module.exports.run = async (bot, msg, args) => {

  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`Vous n'avez pas les droit`);
  if(!args[0]) return message.channel.send(`Merci d'indiquer du texte`);
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`${args[0]} messages supprimés !`).then(msg => msg.delete(5000))
  });
};

module.exports.help = {
  name: 'clear'
}
