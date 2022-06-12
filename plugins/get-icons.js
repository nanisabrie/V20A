import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh penggunaan ${usedPrefix}${command} emoji|2`

let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  
    let gas = await fetch(`https://g.tenor.com/v1/search?q=${text1}&key=LIVDSRZULELA&limit=${text2}`)
    let json = await gas.json()
    let ter = json.results

    for (let i = 0; i < ter.length; i++) {
        let out = ter[i].media[0].gif.url
        await conn.sendMessage(m.chat, { video: { url: out }, caption: "Nihh banh", gifPlayback: true })
        await conn.sendFile(m.chat, out, 'sticker.webp', '', m)
    }
}

handler.command = /^(gettenor)$/i

export default handler
