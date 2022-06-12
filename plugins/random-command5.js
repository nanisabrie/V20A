import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'cdnjs') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} angular`

let f = await fetch(`https://api.cdnjs.com/libraries/${text}`)
let x = await f.json()
let caption = `🤠 *Name:* ${x.name}
*latest:* ${x.latest}
*description:* ${x.description}
*filename:* ${x.filename}
*homepage:* ${x.homepage}
`
await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

}
handler.command = handler.help = ['cdnjs']
handler.tags = ['tools']

export default handler