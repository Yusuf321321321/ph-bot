const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const müzik = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x8e44ad)
  .addField(`Müzik`, 'phoynat: İstediğin şarkıyı çalar.\nphdurdur: Müziği durdurur.\nphdevam: Müziği devam ettirir.\nphkuyruk: Kuyruğu söyler\nphgeç: Geçerli çalınan müziği geçer\nphses: Belirlediğiniz değerde sesi açar.\nphayrıl: Müziği kapatır.')
  .setFooter(`PH TEAM - Tüm hakları saklıdır.`, client.user.avatarURL)
  console.log("Oralet Bildirme: phmüzik komutu " + message.author.username + " kanalında kullanıldı.")
  return message.channel.sendEmbed(müzik);

};



exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['müzik'],
    permLevel: 0
  };

  exports.help = {
    name: 'müzik',
    description: 'müzik',
    usage: 'müzik'
  };
