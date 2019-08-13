const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** phban @kullanıcı = Herhangi Bir Kullanıcıyı Sunucudan Uzaklaştırırsınız.\n**•** phkick = Herhangi Bir Kullanıcıyı Sunucudan Atarsınız.\n**•** phunban @kullanıcı = Herhangi Bir Kullanıcının Uzaklaştırmasını Açarsınız.\n**•** photorol rol = İstediğiniz Rolü Yeni Gelen Kullanıcılara Verir.\n**•** phsunucutanıt = Sunucunuzu Tanıtabilirsiniz.\n**•** phrolbilgi ? İstediğiniz Rolün Bilgilerini Gösterir.\n**•** phtemizle = Herhangi Bir Miktarda Mesajları Siler.\n**•** phses-kanal-aç = Bir Ses Kanalı Oluşturur.\n**•** phyazı-kanal-aç = Bir Yazı Kanalı Oluşturur.\n**•** phslowmode = Sunucuda Yavaş Mod Açar.\n**•** phailemiz = Botun Sunucularını Gösterir.\n**•** phsustur = Seçtiğiniz Kullanıcıyı İstediğiniz Süre Boyunca Susturur.\n**•** phkanalıkilitle = İstediğiniz Kanalı Kilitler\n**•** phkilitaç = İstediğiniz Kanalın Kilidini Açar.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=610497697702477854&scope=bot&permissions=805829694)`, true)
      .setFooter('PH TEAM Yapımcı')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili '
};
