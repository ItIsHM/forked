/* codded by raashii
use this git under copyright
dont change credit
*/ 

const Rashi = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const fs = require("fs")
const zara = require('../zara');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

if (config.WORKTYPE == 'private') {

Rashi.addCommand({pattern: 'menu', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://api.zeks.me/api/estetikpic?apikey=Raashii.life";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = ' ᴏɴ'
if (config.FULLEVA == 'false') eva = ' ᴏғғ'
if (config.AUTOBİO == 'true') auto_bio = ' ᴏɴ'
if (config.AUTOBİO == 'false') auto_bio = ' ᴏғғ'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮
   ` + config.BOTPLK + `
╭──────────────────╯
│
│ ʜᴇʏ ᴜsᴇʀ ` + wish + `
│         *⌚` + time + `*
│
│ ▢ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : HM Ser
│ ▢ *ᴠᴇʀsɪᴏɴ* : 1.0
│ ▢ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
│ ▢ *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
│ ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
│ ▢ *ᴘʀᴇғɪx* : *# / . ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©916235199845
│
╰──────────────────╮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
╭──────────────────╯
│ ◩ ᴍᴇɴᴜ ◪
╭──────────────────╯
│
│[ ᴍᴇᴅɪᴀ ]
│
│ ▢ .sᴏɴɢ
│ ▢ .ᴠɪᴅᴇᴏ
│ ▢ .ɪɴsᴛᴀ
│ ▢ .ʏᴛ
│         
│[ ᴄᴏɴᴠᴇʀᴛ ]
│
│ ▢ .ɢɪғ
│ ▢ .ᴍᴘ3
│ ▢ .ᴛᴛs
│ ▢ .ɪᴍɢ
│ ▢ .sᴛɪᴄᴋᴇʀ
│ ▢ .ᴀᴛᴛᴘ
│ ▢ .ᴛᴛᴘ
│ ▢ .ᴘʜᴏᴛᴏ
│ ▢ .2ɪᴍɢ
│
│[ ᴍᴀᴋᴇʀ ]
│
│ ▢ .ᴍᴏʀᴇᴛxᴛ
│ ▢ .2ᴍᴏʀᴇᴛxᴛ
│ ▢ .xᴍᴇᴅɪᴀ
│ ▢ .ᴍᴍᴘᴀᴄᴋ
│ 
│[ ғᴜɴ ]
│
│ ▢ .ᴊᴏᴋᴇ
│ ▢ .ᴍᴇᴍᴇ
│ ▢ .ǫʀ
│ ▢ .ᴄʜᴀɴɢᴇsᴀʏ
│ ▢ .ᴛʀᴜᴍᴘsᴀʏ
│ ▢ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
│
│[ sᴇᴀʀᴄʜ ]
│ 
│ ▢ .ᴡɪᴋɪ
│ ▢ .ʟʏʀɪᴄ
│ ▢ .sʜᴏᴡ
│ ▢ .ᴍᴏᴠɪᴇ
│ ▢ .ᴡᴇᴀᴛʜᴇʀ
│
│[ ᴛᴀɢ ]
│
│ ▢ .ᴛᴀɢᴀʟʟ
│ ▢ .ᴛᴀɢᴀᴅᴍɪɴ
│
│[ ᴏᴛʜᴇʀ ]
│ 
│ ▢ .ᴀɴɪᴍᴇ
│ ▢ .ᴡᴀʟʟᴘᴀᴘᴇʀ
│ ▢ .ss
│ ▢ .ᴅɪᴄᴛ
│ ▢ .sʜᴏʀᴛ
│ ▢ .ᴛʀᴛ
│ ▢ .ʀᴇᴍᴏᴠᴇʙɢ
│ 
│[ ᴏᴡɴᴇʀ ᴄᴍɴᴅs ]
│
│ ▢ .ғᴜʟʟᴇᴠᴀ 
│ ▢ .ᴀᴜᴛᴏʙɪᴏ
│ ▢ .ʙᴀɴ
│ ▢ .ᴀᴅᴅ
│ ▢ .ᴘʀᴏᴍᴏᴛᴇ
│ ▢ .ᴅᴇᴍᴏᴛᴇ
│ ▢ .ᴍᴜᴛᴇ
│ ▢ .ᴜɴᴍᴜᴛᴇ
│ ▢ .ɪɴᴠɪᴛᴇ
│ ▢ .sᴇᴛᴠᴀʀ
│ 
│
│   ❏ coded by HM Ser ❏
╰──────────────────╯
`}) 

}));
}

else if (config.WORKTYPE == 'public') {

Rashi.addCommand({pattern: 'menu', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var rashi = await axios.get(config.RASHI, { responseType: 'arraybuffer' })
 
    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = ' ᴏɴ'
if (config.FULLEVA == 'false') eva = ' ᴏғғ'
if (config.AUTOBİO == 'true') auto_bio = ' ᴏɴ'
if (config.AUTOBİO == 'false') auto_bio = ' ᴏғғ'

    await message.sendMessage(Buffer(rashi.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: fs.readFileSync('./image/r.jpg'), contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮
   ` + config.BOTPLK + `
╭──────────────────╯
│
│ ʜᴇʏ ᴜsᴇʀ ` + wish + `
│         *⌚` + time + `*
│
│ ▢ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : HM Ser
│ ▢ *ᴠᴇʀsɪᴏɴ* : 1.0
│ ▢ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
│ ▢ *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
│ ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
│ ▢ *ᴘʀᴇғɪx* : *# / . ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©916235199845
│
╰──────────────────╮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
╭──────────────────╯
│ ◩ ᴍᴇɴᴜ ◪
╭──────────────────╯
│
│[ ᴍᴇᴅɪᴀ ]
│
│ ▢ .sᴏɴɢ
│ ▢ .ᴠɪᴅᴇᴏ
│ ▢ .ɪɴsᴛᴀ
│ ▢ .ʏᴛ
│         
│[ ᴄᴏɴᴠᴇʀᴛ ]
│
│ ▢ .ɢɪғ
│ ▢ .ᴍᴘ3
│ ▢ .ᴛᴛs
│ ▢ .ɪᴍɢ
│ ▢ .sᴛɪᴄᴋᴇʀ
│ ▢ .ᴀᴛᴛᴘ
│ ▢ .ᴛᴛᴘ
│ ▢ .ᴘʜᴏᴛᴏ
│ ▢ .2ɪᴍɢ
│
│[ ᴍᴀᴋᴇʀ ]
│
│ ▢ .ᴍᴏʀᴇᴛxᴛ
│ ▢ .2ᴍᴏʀᴇᴛxᴛ
│ ▢ .xᴍᴇᴅɪᴀ
│ ▢ .ᴍᴍᴘᴀᴄᴋ
│ 
│[ ғᴜɴ ]
│
│ ▢ .ᴊᴏᴋᴇ
│ ▢ .ᴍᴇᴍᴇ
│ ▢ .ǫʀ
│ ▢ .ᴄʜᴀɴɢᴇsᴀʏ
│ ▢ .ᴛʀᴜᴍᴘsᴀʏ
│ ▢ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
│
│[ sᴇᴀʀᴄʜ ]
│ 
│ ▢ .ᴡɪᴋɪ
│ ▢ .ʟʏʀɪᴄ
│ ▢ .sʜᴏᴡ
│ ▢ .ᴍᴏᴠɪᴇ
│ ▢ .ᴡᴇᴀᴛʜᴇʀ
│
│[ ᴛᴀɢ ]
│
│ ▢ .ᴛᴀɢᴀʟʟ
│ ▢ .ᴛᴀɢᴀᴅᴍɪɴ
│
│[ ᴏᴛʜᴇʀ ]
│ 
│ ▢ .ᴀɴɪᴍᴇ
│ ▢ .ᴡᴀʟʟᴘᴀᴘᴇʀ
│ ▢ .ss
│ ▢ .ᴅɪᴄᴛ
│ ▢ .sʜᴏʀᴛ
│ ▢ .ᴛʀᴛ
│ ▢ .ʀᴇᴍᴏᴠᴇʙɢ
│ 
│[ ᴏᴡɴᴇʀ ᴄᴍɴᴅs ]
│
│ ▢ .ғᴜʟʟᴇᴠᴀ 
│ ▢ .ᴀᴜᴛᴏʙɪᴏ
│ ▢ .ʙᴀɴ
│ ▢ .ᴀᴅᴅ
│ ▢ .ᴘʀᴏᴍᴏᴛᴇ
│ ▢ .ᴅᴇᴍᴏᴛᴇ
│ ▢ .ᴍᴜᴛᴇ
│ ▢ .ᴜɴᴍᴜᴛᴇ
│ ▢ .ɪɴᴠɪᴛᴇ
│ ▢ .sᴇᴛᴠᴀʀ
│ 
│
│   ❏ Coded By HM Ser ❏
╰──────────────────╯
`}) 

}));
}
