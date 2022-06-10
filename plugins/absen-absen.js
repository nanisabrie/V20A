
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, author, null, [
        ['mulai', `${usedPrefix}mulaiabsen`]
    ], m)
        throw false
    }
    
    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Kamu sudah absen!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    
    let list = absen.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')
 let abtext = `*Tanggal:* ${date}
${conn.absen[id][2]}

*「 Daftar absen 」*
*Total:* ${absen.length}

${list}
`
            let abbut = [
              {buttonId: '.absen', buttonText: {displayText: 'absen'}, type: 1},
              {buttonId: '.cekabsen', buttonText: {displayText: 'cekabsen'}, type: 1}
            ]

            let absec = {
                text: abtext,
                footer: wm,
                buttons: abbut,
                headerType: 1,
                mentions: abtext
             }
            conn.sendMessage(m.chat, absec)

}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i

export default handler