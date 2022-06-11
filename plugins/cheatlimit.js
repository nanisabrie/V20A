let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    
    let hore = `${pickRandom(['Mancing mania mangtaf', 'Killing spriii', 'Owalahh dapet segini', 'Lain kali gwejh berusaha', 'Okwew..', 'Thanks', 'Dihh..', 'Xixixii..', 'Yaelah dapet segini', 'Hongreewww..', 'Baakaaaa', 'Ara..Ara..'])}`
    let angka1 = Math.floor(Math.random() * 10000)
    let angka2 = Math.floor(Math.random() * 1000)
    let angka3 = Math.floor(Math.random() * 100000)
    
    global.db.data.users[who].exp += angka1
    global.db.data.users[who].limit += angka2
    global.db.data.users[who].money += angka3
    
    conn.sendButton(m.chat, `*${hore}* ~ :l
    + *${global.db.data.users[who].exp}* EXP Tersisa
    + *${global.db.data.users[who].limit}* Limit Tersisa
    + *${global.db.data.users[who].money}* Money Tersisa`, author, null, [
        ['Nambah', `${usedPrefix + command}`]
    ], m)
}
handler.help = ['ngechit']
handler.tags = ['xp']
handler.command = /^(ngechit)$/i
handler.private = true

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }