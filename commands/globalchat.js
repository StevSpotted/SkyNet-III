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
});
if(message.channel.name === "global-chat"){
		if(!msg.author.bot){
			let args = msg.content.slice().split(" ");

		const sayMessage = args.join(" ");
			message.delete().catch();
			let gEmbed = new Discord.MessageEmbed()

			.setAuthor(`${message.author.username} | ${message.author.id}`, message.author.avatarURL)
			.setColor(0xBCFF78)
			.addField(`${sayMessage}`, "Global Chat V.1")
			.setFooter(`Envoyé depuis ${message.guild.name}`)
			.setTimestamp()

			bot.channels.findAll('name', 'global-chat').map(channel => channel.send(gEmbed))
		}


	}



};

module.exports.help = {
  name: "setupGC"
}
