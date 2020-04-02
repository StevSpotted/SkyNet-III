const Discord = require('discord.js');


module.exports.run = async (bot, msg, args) => {

msg.channel.send(`Tu as ${Date.now() - msg.createdTimestamp} ms`)

};
module.exports.help = {
  name: "ping"
}
