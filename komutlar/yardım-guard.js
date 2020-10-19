 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`StaR_LorD's BOT Koruma Komutları`, client.user.avatarURL())
.setColor('#ff0000')
.setDescription(` **StaR_LorD's BOT botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.**`)
.addField(`__YAKINDA__`,` [Bunun Yerine StaR_LorD's Guard BOT Ekleyebilirsin !](https://discord.com/oauth2/authorize?client_id=761302850835578944&scope=bot&permissions=805314622)`)
.addField(`__Bilgilendirme__`,` \`${prefix}davet\` | StaR_LorD's BOT Sunucunuza Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n  \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`https://i.hizliresim.com/JI4Uyf.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

