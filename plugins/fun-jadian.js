let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`Ciee... ${toM(a)} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
}
handler.help = ['jadian3']
handler.tags = ['main', 'fun']
handler.command = ['jadian3']

handler.group = true

export default handler
