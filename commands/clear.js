const Discord = require('discord.js');


module.exports.run = async (bot, msg, args) => {
  msg.delete();

  if(!msg.member.hasPermission('MANAGE_MESSAGES')) {
    return msg.reply(`Vous n'avez pas les droits !`)
  };
  if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return msg.reply(`Veuillez spécifier un nombre de messages correct.`)
  };
  if(!msg.guild.me.hasPermission('MANAGE_MESSAGES')) {
    msg.reply(`Je n'ai pas les droits.`)
  };

   let deleteAmount;
   if (parseInt(args[0]) > 100) {
     deleteAmount = 100;
   } else {
     deleteAmount = parseInt(args[0]);
   }

msg.channel.bulkDelete(deleteAmount, true)
  .then(deleted => msg.channel.send(`${deleted.size} messages supprimés.`))msg.delete({ timeout: 5000, reason: 'It had to be done.' })

};
module.exports.help = {
  name: "clear"
}
