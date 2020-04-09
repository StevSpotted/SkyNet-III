const Discord = require('discord.js')

module.exports.run = async (bot, msg, args) => {
  msg.author.createDM().then(channel =>{
let iEmbed = new Discord.MessageEmbed()

    .setTitle(`Invites moi !`)
    .setDescription(`Voici mon lien !`)
    .addField(`[Invites moi ici](https://discordapp.com/api/oauth2/authorize?client_id=694346692211900416&permissions=8&scope=bot)`, `J'espère devenir ton ami !`)
    .setFooter(`Partages moi !`)
    channel.send(iEmbed)
  })
}
module.exports.help = {
  name: "invitation"
}
