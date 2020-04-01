const Discord = require('discord.js');


module.exports.run = async (bot, msg, args) => {

    if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("Vous n'avez pas le droit de ban.");
    if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send("Je n'ai pas les permissions");
    if(args.length < 2) return msg.channel.send("Pas assez d'arguments");
    const member = msg.mentions.members.first();
    let reason = '';
    for(let i = 1; i < args.length; i++){
      reason += args[i] +  ' ';
    }
    if(!member) return msg.channel.send("Le membre est invalide.");
    member.ban();

    let hEmbed = new Discord.MessageEmbed()
    .setColor("#00e68a")
    .setTitle("Rapport de ban")
    .setDescription(`Un ban a été effectué par ${msg.author}`)
    .addFields(
      { name: 'Auteur du ban:', value: msg.author},
      { name: 'Membre ban:', value: member},
      { name: 'Raison:', '**' + value: reason + '**'}
    );
    msg.channel.send(hEmbed);
}
module.exports.help = {
  name: "ban"
}
