import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'cdnjs') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} angular`

let f = await fetch(`https://api.cdnjs.com/libraries/${text}`)
let x = await f.json()
let caption = `🤠 *Name:* ${x.name}
*Latest:* ${x.latest}

*Description:* ${x.description}
*Homepage:* ${x.homepage}`
await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'readqr') {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana? Reply gambar yg gk ada button aja'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    let img = await q.download?.()
    let url = await uploadImage(img)

let f = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=9b817532fadff8fc7cb86862&img=${url}`)
let x = await f.json()
let caption = `🤠 *Hasil:* ${x.result}`
await conn.sendButton(m.chat, caption, author, null, [
                ['To Qr', `${usedPrefix}qr ${x.result}`]
            ], m)
}

if (command == 'animechan') {
let f = await fetch(`https://animechan.vercel.app/api/random`)
let x = await f.json()
let caption = `*Quotes:* ${x.quote}

*Anime:* ${x.anime}
*Character:* ${x.character}`
await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'whatanime') {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    let img = await q.download?.()
    let url = await uploadImage(img)

let f = await fetch(`https://api.trace.moe/search?url=${url}`)
let xc = await f.json()
let r = xc.result
let x = r.getRandom()
let caption = `🤠 *Anilist:* ${x.anilist}
*Name:* ${x.filename}
*Episode:* ${x.episode}
*Dari:* ${x.from}
*Ke:* ${x.to}
*Kecocokan:* ${x.similarity}
`
await conn.sendButton(m.chat, caption, author, x.image, [
                ['Get Video', `${usedPrefix}get ${x.video}`]
            ], m)
}

if (command == 'isgd') {
if (!text) throw `Teks Mana?
Contoh: ${usedPrefix + command} https://google.com`
let f = await fetch(`https://is.gd/create.php?format=json&url=${text}`)
let x = await f.json()
let caption = `*Shorturl:* ${x.shorturl}`
await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'resmush') {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    let img = await q.download?.()
    let url = await uploadImage(img)

let f = await fetch(`http://api.resmush.it/ws.php/?img=${url}`)
let xc = await f.json()
let x = xc.result
let caption = `*Src:* ${x.src}
*Size:* ${x.src_size}

*Dest:* ${x.dest}
*Size:* ${x.dest_size}

*Percent:* ${x.percent}
*Expires:* ${x.expires}`
await conn.sendButton(m.chat, caption, author, x.dest, [
                ['Get Img', `${usedPrefix}get ${x.dest}`]
            ], m)
}

}
handler.command = handler.help = ['cdnjs', 'readqr', 'animechan', 'whatanime', 'isgd', 'resmush']
handler.tags = ['tools']

export default handler

	
    