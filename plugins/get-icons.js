import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} emoji|2`

let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
    let gas = await fetch(`https://g.tenor.com/v1/search?q=${text1}&key=LIVDSRZULELA&limit=${text2}`)
    let json = await gas.json()
    m.reply(`*Total stiker:* ${json.result.media.length}
*Estimasi selesai:* ${json.result.media.length * 10} detik`.trim())

    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.media[i].url
        let stiker = await sticker(false, fileId, global.packname, global.author)
        await conn.sendFile(m.chat, stiker, null, { asSticker: true })
        await delay(1500)
    }
    m.reply('_*Selesai*_')
}

handler.command = /^(gettenor)$/i

export default handler

const delay = time => new Promise(res => setTimeout(res, time))