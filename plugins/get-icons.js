import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} win8 home`
let thm = args[0]
let text1 = args.slice(1).join(' ')
let res = await fetch(`https://api.icons8.com/api/iconsets/v3/search?term=${text1}&amount=1&offset=0&platform=${thm}&language=en-US&exact_amount=1`)
let x = await res.json()
let o = x.result
await conn.sendFile(m.chat, o.share.url, 'sticker.webp', '', m)
}
handler.command = /^(geticons)$/i

export default handler