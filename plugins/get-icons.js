import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} win8 home`

let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
    
let res = await fetch(`https://api.icons8.com/api/iconsets/v3/search?term=${text2}&amount=1&offset=0&platform=${text1}&language=en-US&exact_amount=1`)
let x = await res.json()
let o = x.result
let stiker = await sticker(null, global.API(o.search.share.url), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}
handler.command = /^(geticons)$/i

export default handler