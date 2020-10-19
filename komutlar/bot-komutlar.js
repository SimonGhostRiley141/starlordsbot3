const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`StaR_LorD's BOT - Komut Sayısı`)
    .setDescription('**\n StaR_LorDs BOT | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("#ff0000")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("StaR_LorD's BOT | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

