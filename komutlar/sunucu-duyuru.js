const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

   let question = args.join(' ');

   let user = message.author.username

    const embedd = new Discord.MessageEmbed()

     .setDescription(`Yazı Yazman Gerek`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000));

     const embed = new Discord.MessageEmbed()

       .setColor("#ff0000")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('StaR_LorDs BOT', client.user.avatarURL)

       .addField(`**StaR_LorD's BOT | Duyuru**`, `**${question}**`)
   
     message.channel.send(embed).then(function(message) {

       });

     };

     exports.config = {
     name: 'duyuru',
     aliases: ['duyuru-yap']
};
