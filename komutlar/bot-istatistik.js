


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/761294300767846413/761583068049571880/ea3d461184a4470f1f2e4f4896a09a8b.png`)
.addField("__**Bot Verileri**__", ` **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", ` **Bot Sahibi**  <@592726532351328266> \n **StaR_LorD#3304** \n\n \ **Bot Geliştiricisi**  <@592726532351328266> \n **StaR_LorD#3304** \n\n  **Bot Sahibi**  <@592726532351328266> \n **StaR_LorD#3304** \n`)
.addField("__**Sürümler**__", ` **Discord.js Sürümü** **|**  **v${Discord.version}** \n **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", ` **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", " " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://i.hizliresim.com/JI4Uyf.gif`)
.setColor("#ff0000")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}