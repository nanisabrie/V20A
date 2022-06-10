function handler(m, { groupMetadata }) {
    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    
if (command == 'jodohnya') {
    let jwb = `Ciee... ${toM(a)} ❤️ ${toM(b)}`.trim()
await conn.sendButton(m.chat, jwb, wm, null, [
        ['Nyerah', 'menyerah']
    ], m, { mentions: jwb })
    }
    
if (command == 'jodohku') {
    let jwb = `Ciee... ${m.sender.split('@')[0]} ❤️ ${toM(b)}`.trim()
await conn.sendButton(m.chat, jwb, wm, null, [
        ['Nyerah', 'menyerah']
    ], m, { mentions: jwb })
    }
}

handler.tags = ['main', 'fun']
handler.help = handler.command = ['jodohnya', 'jodohku']

handler.group = true

export default handler