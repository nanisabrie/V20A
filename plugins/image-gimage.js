import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Example : ${usedPrefix + command} query`

if (command == 'gimage') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Lolhuman`
let url = `https://api.lolhuman.xyz/api/gimage?apikey=9b817532fadff8fc7cb86862&query=${text}`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Gimage1', usedPrefix + 'gimage1'],
      ['Gimage2', usedPrefix + 'gimage2'],
      ['Gimage3', usedPrefix + 'gimage3']
    ], m)
    }

if (command == 'gimage1') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Lolhuman`
let url = `https://api.lolhuman.xyz/api/gimage2?apikey=9b817532fadff8fc7cb86862&query=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Gimage2', usedPrefix + 'gimage2'],
      ['Gimage3', usedPrefix + 'gimage3'],
      ['Gimage4', usedPrefix + 'gimage4']
    ], m)
    }
    
if (command == 'gimage2') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Kann`
let url = `https://bx-hunter.herokuapp.com/api/image-search?text=${text}&apikey=FuckBitch`
let js = await fetch(url)
let jp = await js.json()
let x = jp.url
await conn.sendHydrated(m.chat, caption, wm, x, null, null, null, null, [
      ['Gimage3', usedPrefix + 'gimage1'],
      ['Gimage4', usedPrefix + 'gimage4'],
      ['Gimage5', usedPrefix + 'gimage5']
    ], m)
    }

if (command == 'gimage3') {
let caption = `*Hasil pencarian* ${text}\n${x.title}\n${x.size}\n*Note:* Beni`
let url = `https://api-xcoders.xyz/api/search/image?query=${text}&apikey=xcoders`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.url, null, null, null, null, [
      ['Gimage4', usedPrefix + 'gimage1'],
      ['Gimage5', usedPrefix + 'gimage5'],
      ['Gimage6', usedPrefix + 'gimage6']
    ], m)
    }

if (command == 'gimage4') {
let caption = `*Hasil pencarian* ${text}\n${x.origin.title}\n${x.origin.source}\n*Note:* Beni`
let url = `https://api-xcoders.xyz/api/search/image2?query=${text}&apikey=xcoders`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.url, null, null, null, null, [
      ['Gimage5', usedPrefix + 'gimage1'],
      ['Gimage6', usedPrefix + 'gimage6'],
      ['Gimage', usedPrefix + 'gimage']
    ], m)
    }

if (command == 'gimage5') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Melcanz Limit`
let url = `https://nzcha-apii.herokuapp.com/googleimage?q=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Gimage6', usedPrefix + 'gimage6'],
      ['Gimage', usedPrefix + 'gimage'],
      ['Gimage1', usedPrefix + 'gimage1']
    ], m)
    }

if (command == 'gimage6') {
    const res = await googleImage(text)
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*── 「 GOOGLE IMAGE 」 ──*

Result from *${text}*
`.trim(), m)
}

}
handler.command = handler.help = ['gimage', 'gimage1', 'gimage2', 'gimage3', 'gimage4', 'gimage5', 'gimage6']
handler.tags = ['random']

export default handler
