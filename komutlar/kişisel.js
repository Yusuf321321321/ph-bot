const Discord = require('discord.js');


exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** phkullanıcıbilgi = Kullanıcı Bilginizi Gösterir.\n**•** phprofil = Resimli Profilinizi Gösterir.\n**•** phafk = AFK Duyurusu Yaparsınız.\n**•** phgeldim = Aktif Olduğunuzu Duyurursunuz.\n**•** phsunucubilgi = SunucuBilgilerinizi Gösterir.\n**•** phsunucuresmi = Bulunduğunuz Sunucunun Resmini Gösterir.\n**•** phsorusor = Bota Soru Sorarsınız.\n**•** phroller = Sunucudaki Tüm Rolleri Gösterir.\n**•** phemojiler = Sunucudaki Tüm Emojileri Gösterir.\n**•** phkanalbilgi = Bulunduğunuz Kanalın Bilgilerini Gösterir.\n**•** phdavet = Botun Davet Linkini Verir.\n**•** phrtaraması = Sunucuda Oynuyor Kısmında Reklam Varsa Gösterir.')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=610497697702477854&scope=bot&permissions=805829694)`, true)
      .setFooter('PH TEAM Kişisel')

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
  aliases: ['kişisel','kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kişisel',
  description: 'Tüm komutları gösterir.',
  usage: 'kişisel'
};
