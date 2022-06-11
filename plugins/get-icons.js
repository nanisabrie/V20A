import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} win8|home`

let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
    
let res = await fetch(`https://api.icons8.com/api/iconsets/v3/search?term=${text2}&platform=${text1}`)
let x = await res.json()
let res = x.result.search.png.link

await conn.sendFile(m.chat, res, 'out.webp', m, false, { mimetype: 'image/webp', thumbnail: Buffer.alloc(0) })
}
handler.command = /^(geticons)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }