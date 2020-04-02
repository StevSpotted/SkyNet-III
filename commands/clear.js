const Discord = require('discord.js');


module.exports.run = async (bot, msg, args) => {
  message.delete();

  if(!message.member.hasPermission('MANAGE_MESSAGES')) {
    return message.reply(`Vous n'avez pas les droits !`).then(msg => msg.delete(5000))
  };
  if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return message.reply(`Veuillez spécifier un nombre de messages correct.`).then(msg => msg.delete(5000))
  };
  if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
    message.reply(`Je n'ai pas les droits.`).then(msg => msg.delete(5000))
  };

   let deleteAmount;
   if (parseInt(args[0]) > 100) {
     deleteAmount = 100;
   } else {
     deleteAmount = parseInt(args[0]);
   }

message.channel.bulkDelete(deleteAmount, true)
  .then(deleted => message.channel.send(`${deleted.size} messages supprimés.`)).then(msg => msg.delete(5000))
  .catch(err => message.reply(`Il y a une erreur... ${err}`));

}
module.exports.help = {
  name: "clear"
}
