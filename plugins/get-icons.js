import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh penggunaan ${usedPrefix}${command} win8 home`
let thm = args[0]
let text1 = args.slice(1).join(' ')

await conn.sendFile(m.chat, `https://api.icons8.com/api/iconsets/v3/search?term=${text1}&amount=1&offset=0&platform=${thm}&language=en-US&exact_amount=1`, 'sticker.webp', '', m)
}
handler.command = /^(geticons)$/i

export default handler