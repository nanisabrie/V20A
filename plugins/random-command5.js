import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'cdnjs') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} angular`

let f = await fetch(`https://api.cdnjs.com/libraries/${text}`)
let x = await f.json()
let caption = `🤠 *Country:* ${x.name}
*latest:* ${x.latest}
*sri:* ${x.sri}
*description:* ${x.description}
*filename:* ${x.filename}
*homepage:* ${x.homepage}
`
await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

}
handler.command = handler.help = ['cdnjs', 'menikah', 'metercinta', 'bertanya', 'bokep', 'kusonime', 'membucin', 'mencerpen', 'mencersex', 'asmaulhusna', 'hadistku', 'quranku', 'memeindo', 'shopee', 'stimker', 'randommeme', 'memedarkjoke', 'beasiswa', 'apkdown', 'proxysite', 'mirrorcreator', 'ouo', 'ouoshort', 'shortlink', 'shortlink2', 'shortlink3', 'shortlink4', 'icons']
handler.tags = ['tools']

export default handler