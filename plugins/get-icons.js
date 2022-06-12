import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import { webp2mp4 } from '../lib/webp2mp4.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} emoji|2`

let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  
    let gas = await fetch(`https://g.tenor.com/v1/search?q=${text1}&key=LIVDSRZULELA&limit=${text2}`)
    let json = await gas.json()

    for (let i = 0; i < json.results.media; i++) {
        let fileId = json.results.media[i].url
        let out = await webp2mp4(fileId)
        await conn.sendFile(m.chat, out, 'out.gif', m, false, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
        await conn.sendFile(m.chat, out, null, { asSticker: true })
        await delay(1500)
    }
}

handler.command = /^(gettenor)$/i

export default handler

const delay = time => new Promise(res => setTimeout(res, time))