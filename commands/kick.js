const Discord = require('discord.js');


module.exports.run = async (bot, msg, args) => {

    if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("Vous n'avez pas le droit de kick.");
    if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.send("Je n'ai pas les permissions");
    if(args.length < 2) return msg.channel.send("Donnez moi une raison");
    const member = msg.mentions.members.first();
    let reason = '';
    for(let i = 1; i < args.length; i++){
      reason += args[i] +  ' ';
    }
    if(!member) return msg.channel.send("Le membre est invalide.");
    member.kick();

    let hEmbed = new Discord.MessageEmbed()
    .setColor("#00e68a")
    .setTitle("Rapport de kick")
    .setDescription(`Un kick a été effectué par ${msg.author}`)
    .addField(
      { name: 'Auteur du kick:', value: msg.author},
      { name: 'Membre kick:', value: member },
      { name: 'Raison:', value: reason }
    );
    msg.channel.send(hEmbed);
}
module.exports.help = {
  name: "kick"
}
