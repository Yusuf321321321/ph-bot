const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`PH TEAM`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle]https://discordapp.com/oauth2/authorize?client_id=610497697702477854&scope=bot&permissions=805829694) | \n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`PH TEAM - Ana Komutlar`, `:white_small_square: | **photorol-ayarla @rol #kanal**: Otorol Rol'ü Belirler!\n:white_small_square: | **phhoşgeldin-ayarla** = Resimli Hoşgeldin Kanalı Ayarlar!\n :white_small_square: | **phsayaç-ayarla <sayı> #kanal**: Sunucuya Sayaç Kanalı Belirler!\n:white_small_square: | **phlog-ayarla #kanal**: Kullanıcılar için komutlar.\n:white_small_square: | **phküfür aç/kapat**: Küfür Açar Veya Kapatır.\n:white_small_square: | **phlink-engel aç/kapat**: Link  Engel Açar Veya Kapatır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['anakomut', 'anakomutlar', 'anacommand',],
    permLevel: 0
  };

  exports.help = {
    name: 'anakomutlar',
    description: 'anakomutlar',
    usage: 'anakomutlar'
  };
