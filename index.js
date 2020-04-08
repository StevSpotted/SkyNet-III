const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const config = require('./config.js');
const commands = require('./commands.js');


bot.on('ready', async () => {
  console.log(" ");
  console.log("Le bot est lancé !");
  bot.user.setActivity("Je suis le nouveau !")
});

bot.on('message', async (msg) => {
  if(msg.content.startsWith(config.prefix) && !msg.author.bot) {
    let cmdArray = msg.content.substring(config.prefix.length).split(" ")
    let cmd = cmdArray[0]
    let args = cmdArray.slice(1)

    let command = commands.getCommand(cmd);
    if(command) command.run(bot, msg, args);
  }




// GLOBAL CHAT CODE , SENDING MESSAGES //////////////////////////////////////////////////////////////////////////////////////////
  if(msg.channel.name === "global-chat"){
          if(!msg.author.bot){
              let args = msg.content.slice().split(" ");


          const sayMessage = args.join(" ");
              msg.delete().catch();
              const gEmbed = new Discord.MessageEmbed()


              .setAuthor(`${msg.author.username} | ${msg.author.id}`, msg.author.avatarURL())
              .setColor(0xBCFF78)
              .addField(`${sayMessage}`, "Global Chat V.1")
              .setFooter(`Envoyé depuis ${msg.guild.name}`)
              .setTimestamp()
      msg.channel.send(gEmbed);

  const TestChan = bot.channels.cache.find(channel => channel.name === 'global-chat');
  if(TestChan){
    TestChan.send(gEmbed)
    }

  }
}











// Bonjour //////////////////////////////////////////////////////////////////////////////////////////

if((msg.content.startsWith('Bonjour') && msg.mentions.users.first() == bot.user) || (msg.content.startsWith('bonjour') && msg.mentions.users.first() == bot.user)) {
  const awnser = [`Bonjour ${msg.author}`, "Bonjour", "Bonjour , tu fait quoi ?", "Bonjour comment tu-vas ?"];
  msg.channel.send(awnser[Math.floor(Math.random() * awnser.length)]);

};
// Comment ça va ? BIEN //////////////////////////////////////////////////////////////////////////////////////////
if(msg.content.startsWith('Bien et toi') && msg.mentions.users.first() == bot.user) {
  const awnser = [`Moi ça va plutôt bien`, "Vraiment parfait", "Au plus mal", "ça ne te regarde pas"];
  msg.channel.send(awnser[Math.floor(Math.random() * awnser.length)]);
};
// Comment ça va ? MAL //////////////////////////////////////////////////////////////////////////////////////////
if(msg.content.startsWith('Mal et toi') && msg.mentions.users.first() == bot.user) {
  const awnser = [`Raconte moi tout ..`, "C'est bien dommage", "Mange ça fait du bien..", ""];
  msg.channel.send(awnser[Math.floor(Math.random() * awnser.length)]);
};

// Que fait tu ? RIEN //////////////////////////////////////////////////////////////////////////////////////////
if(msg.content.startsWith('Rien et toi') && msg.mentions.users.first() == bot.user) {
  const awnser = [`Franchement rien du tout.`, "J'attends du beau monde.", "Je te parle.", "rien"];
  msg.channel.send(awnser[Math.floor(Math.random() * awnser.length)]);
};

// Que fait tu ? RANDOM
//if(msg.content.includes('et toi') && msg.mentions.users.first() == bot.user) {
  //const awnser = [`ça m'a l'air fort intérressant`, "Franchement tu veut que je te dises un truc, j'm'en fiche", "Me raconte pas ta vie :joy:", "Ouais ouais"];
  //msg.channel.send(awnser[Math.floor(Math.random() * awnser.length)]);
//};

// Update d'évenement ///////////////////////////////////////////////////////////////////////////////////////////

if((msg.content === ('*Update')) || (msg.content === ('*update'))) {
  msg.delete()
  msg.author.createDM().then(channel => {
    let dEmbed = new Discord.MessageEmbed()
    .setTitle('Première énigme')
    .setDescription(`Bien joué à toi tu as trouvé`)
    .addField(`Pour la deuxième énigme, il m'a dit **[16], [1], [19], [20], [5], [2], [9], [14]**`, `A toi de voir si tu veuta annoncer ta trouvaille aux autres ou pas`)
    .setFooter(`Je te recontacterai si besoin j'ai`)
    channel.send(dEmbed)
  })

}

if((msg.content === ('*Pastebin')) || (msg.content === ('*pastebin'))) {
  msg.delete()
  msg.author.createDM().then(channel =>{
    channel.send('JsXHYwcG')
      msg.react('🇵')
      msg.react('🇦')
      msg.react('🇸')
      msg.react('🇹')
      msg.react('🇪')
      msg.react('🇧')
      msg.react('🇮')
      msg.react('🇳')
  })
}



});






bot.login(process.env.BOT_TOKEN);
