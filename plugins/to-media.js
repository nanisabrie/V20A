import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (command == 'towebp') {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/towebp?apikey=9b817532fadff8fc7cb86862&img=${url}`
    await conn.sendFile(m.chat, res, res, '', m)
    }
    
if (command == 'towebpr') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=9b817532fadff8fc7cb86862&img=${url}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == 'webptogif') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/webptogif?apikey=9b817532fadff8fc7cb86862&img=${url}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == 'webptomp4') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=9b817532fadff8fc7cb86862&img=${url}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == 'imgtopdf') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/imgtopdf?apikey=9b817532fadff8fc7cb86862&${url}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == 'topng') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = `https://api.lolhuman.xyz/api/convert/topng?apikey=9b817532fadff8fc7cb86862&img=${url}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == 'tobase64') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadFile(img)
    let res = `https://api.lolhuman.xyz/api/filetobase64?apikey=9b817532fadff8fc7cb86862&file=${url}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == '64tofile') {
if (!text) throw `balas gambar dengan perintah\n\n${usedPrefix + command} base64`
    let res = `https://api.lolhuman.xyz/api/base64tofile?apikey=9b817532fadff8fc7cb86862&base=${text}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == 'urltoimg') {
if (!text) throw `balas gambar dengan perintah\n\n${usedPrefix + command} url`
    let res = `https://api.lolhuman.xyz/api/urltoimg?apikey=9b817532fadff8fc7cb86862&url=${text}`
    await conn.sendFile(m.chat, res, res, '', m)
}

if (command == 'filetourl') {
let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command}`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    let res = await fetch(`https://api.lolhuman.xyz/api/filetourl?apikey=9b817532fadff8fc7cb86862&file=${url}`)
    let p = await res.json()
    let rem = p.result
    await conn.sendFile(m.chat, rem, rem, '', m)
}

if (command == 'encmorse') {
    if (!text) throw `balas gambar dengan perintah\n\n${usedPrefix + command} text`
    let res = await fetch(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=9b817532fadff8fc7cb86862&text=${text}`)
    let p = await res.json()
    let rem = p.result
    await m.reply(`*Result:* ${rem}`)
}

if (command == 'decmorse') {
    if (!text) throw `balas gambar dengan perintah\n\n${usedPrefix + command} kode morse`
    let res = await fetch(`https://api.lolhuman.xyz/api/morse/encrypt?apikey=9b817532fadff8fc7cb86862&text=${text}`)
    let p = await res.json()
    let rem = p.result
    await m.reply(`*Result:* ${rem}`)
}

if (command == 'emojimix3') {
    if (!text) throw `balas gambar dengan perintah\n\n${usedPrefix + command} emot + emot`
    let urut = text.split`+`
  let text1 = urut[0]
  let text2 = urut[1]

    let res = `https://api.lolhuman.xyz/api/emojimix/${text1}+${text2}?apikey=9b817532fadff8fc7cb86862`
    let stiker = await sticker(false, res, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}

if (command == 'smojimg') {
    if (!text) throw `balas gambar dengan perintah\n\n${usedPrefix + command} emot`
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    
    let res = `https://api.lolhuman.xyz/api/smoji/${text}?apikey=9b817532fadff8fc7cb86862`
conn.sendFile(m.chat, res, 'image.png', author, m)
}

if (command == 'smojimg2') {
    if (!text) throw `balas gambar dengan perintah\n\n${usedPrefix + command} emoji`
    let res = await fetch(`https://api.lolhuman.xyz/api/smoji3/${text}?apikey=9b817532fadff8fc7cb86862`)
    let p = await res.json()
    let x = p.result.emoji
    const sections = [
    {
	title: "Theme",
	rows: [
	{title: "apple", rowId: usedPrefix + 'get ' + x.apple},
{title: "au_by_kddi", rowId: usedPrefix + 'get ' + x.au_by_kddi},
{title: "docomo", rowId: usedPrefix + 'get ' + x.docomo},
{title: "emojidex", rowId: usedPrefix + 'get ' + x.emojidex},
{title: "facebook", rowId: usedPrefix + 'get ' + x.facebook},
{title: "google", rowId: usedPrefix + 'get ' + x.google},
{title: "htc", rowId: usedPrefix + 'get ' + x.htc},
{title: "joypixels", rowId: usedPrefix + 'get ' + x.joypixels},
{title: "lg", rowId: usedPrefix + 'get ' + x.lg},
{title: "messenger", rowId: usedPrefix + 'get ' + x.messenger},
{title: "microsoft", rowId: usedPrefix + 'get ' + x.microsoft},
{title: "mozilla", rowId: usedPrefix + 'get ' + x.mozilla},
{title: "noto_emoji", rowId: usedPrefix + 'get ' + x.noto_emoji},
{title: "openmoji", rowId: usedPrefix + 'get ' + x.openmoji},
{title: "samsung", rowId: usedPrefix + 'get ' + x.samsung},
{title: "skype", rowId: usedPrefix + 'get ' + x.skype},
{title: "softbank", rowId: usedPrefix + 'get ' + x.softbank},
{title: "sony_playstation", rowId: usedPrefix + 'get ' + x.sony_playstation},
{title: "toss_face_(토스페이스)", rowId: usedPrefix + 'get ' + x.toss_face_(토스페이스)},
{title: "twitter", rowId: usedPrefix + 'get ' + x.twitter},
{title: "whatsapp", rowId: usedPrefix + 'get ' + x.whatsapp}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}

}
//lo mau apa??
handler.command = handler.help = ['64tofile', 'decmorse', 'emojimix3', 'encmorse', 'filetourl', 'imgtopdf', 'smojimg', 'smojimg2', 'tobase64', 'topng', 'towebp', 'towebpr', 'urltoimg', 'webptogif', 'webptomp4']
handler.tags = ['tools']

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
