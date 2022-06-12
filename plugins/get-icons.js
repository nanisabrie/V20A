import fetch from 'node-fetch'
import { webp2mp4 } from '../lib/webp2mp4.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} emoji|2`

let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  
    let gas = await fetch(`https://g.tenor.com/v1/search?q=${text1}&key=LIVDSRZULELA&limit=${text2}`)
    let json = await gas.json()

    for (let i = 0; i < json.results; i++) {
        let fileId = json.results[i].url
        let out = await webp2mp4(fileId)
        await conn.sendMessage(m.chat, { video: { url: out }, caption: "Nih!", gifPlayback: true })
    }
}

handler.command = /^(gettenor)$/i

export default handler
