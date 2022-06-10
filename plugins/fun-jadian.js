function handler(m, { groupMetadata }) {
    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    let jwb = `Ciee... ${toM(a)} ❤️ ${toM(b)}`
await conn.sendButton(m.chat, jwb, wm, null, [
        ['Nyerah', 'menyerah']
    ], m, { mentions: [a, b] })
}
handler.help = ['jodohku']
handler.tags = ['main', 'fun']
handler.command = ['jodohku']

handler.group = true

export default handler