const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`PH TEAM`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=610497697702477854&scope=bot&permissions=805829694) | \n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`PH TEAM - Yardım`, `:white_small_square: | **phanakomutlar**: Sunucunuz için Ayar Komutlarını Gösterir.!\n:white_small_square: | **pheğlence**: Eğlenmek için bulunan komutlar!\n:white_small_square: | **phyetkili**: Sunucuyu yönetmek için gerekli olan komutlar!\n:white_small_square: | **phkullanıcı**: Kullanıcılar için komutlar.\n:white_small_square: | **phmüzik**: Müzik ruhun gıdasıdır.`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };
