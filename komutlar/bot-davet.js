const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ff0000")
.setAuthor(`StaR_LorD's BOT Linkler`, client.user.avatarURL())
.setDescription('**• [StaR_LorDs BOT Ekleyin.](https://discord.com/oauth2/authorize?client_id=761562788673880084&scope=bot&permissions=805314622)**\n\n**• [Oy Ver]()**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };