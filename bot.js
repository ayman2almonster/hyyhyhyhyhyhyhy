const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`*help |the bot by Ayman ALmonster`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) { // Last Codes - Ayman
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number**'); // Last Codes - Ayman
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }

client.on('message', message => {
var prefix = "*"; // البريفكس
 
    if (message.content === prefix + "date") { // الامر
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
 
            var Date15= new Discord.RichEmbed()
            .setTitle("**الــتــاريـــخ**")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});

client.on("message", message => {
  if(message.content.startsWith("*verify")) { // الامر والبريفكس
    let num = Math.floor((Math.random() * 4783) + 10);
 
    message.channel.send(`يرجاء كتابة الرقم التالي: **${num}**`).then(m => {
      message.channel.awaitMessages(res => res.content == `${num}`, {
        max: 1,
        time: 60000,
        errors: ['time'],
      }).then(collected => {
        message.delete();
        m.delete();
        message.member.addRole(message.guild.roles.find(c => c.name == "●MEMBERS●")); // اسم الرتبة
      }).catch(() => {
        m.edit(`You took to long to type the number.\nRe-type the command again if you want to verify yourself.`).then(m2 => m.delete(15000));
      });
    });
  }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" كيف اقدر اساعدك!!");
    }
});

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`:rose:  ALmonster ولكم نورت السيرفر :rose:
        :crown: اسم العضو  ${member}:crown:  
        انت العضو رقم ${member.guild.memberCount} `)
    }).catch(console.error)
})

client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('***خرج من السيرفر***')
.addField('**الاسم**',`[ ${member} ]`)
.addField('**عدد الاعضاء**',`[ ${member.guild.memberCount} ]`,true)
.setColor('Random')
   
   var channel =member.guild.channels.find('name', 'welcome')
   if (!channel) return;
         channel.send({embed : embed});
 
});

client.on('guildMemberAdd', member => { //LAST CODES -HONRAR-
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
})

client.on('message', msg => {
	var prefix = "*";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number ًں‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("516619338598449163");
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**ALmonster**")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    

client.on("message", function(message) {
	var prefix = "*";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
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
? *date لمعرفة التاريخ
? *bc ? برودكاست ب امبيد وبدون
? *Link ? رابط انفايت للسيرفر
? *clear ? مسح الشات
? *server ? لعرض معلومات السيرفر
? *marry ? لعبة الزواج
? *kf ? لعبة كف
? *mc ? قفل الشات
? *rps لعبة حجره ورقه مقص
? *new ? لانشاء تذكرة
????????????? {? By Ayman ALmonster ?} ?????????????
**
`);
}
})
 
client.login(process.env.BOT_TOKEN);
