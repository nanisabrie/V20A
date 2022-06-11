import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} win8 home`

let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
    
let res = await fetch(`https://api.icons8.com/api/iconsets/v3/search?term=${text2}&platform=${text1}`)
let x = await res.json()
let o = x.result.search.subcategory
let p = o.png.getRadom()
let stiker = await sticker(null, global.API(p.link), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.command = /^(geticons)$/i

export default handler