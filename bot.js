const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('message', message => {
    var prefix = "*";
   
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("*bc <message>");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('RANDOM')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });

client.on('message' , message => {
if(message.content === '*help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
***__وصف عن البوت__***
**
????????????? {?اوامر البوت?} ?????????????
? &bc ? برودكاست ب امبيد وبدون
? &Link ? رابط انفايت للسيرفر
? &clear ? مسح الشات
? &server ? لعرض معلومات السيرفر
? &marry ? لعبة الزواج
? &kf ? لعبة كف
? &mc ? قفل الشات
? &new ? لانشاء تذكرة
????????????? {? By Ayman ALmonster ?} ?????????????
**
`);
}
})
 
client.login(process.env.BOT_TOKEN);