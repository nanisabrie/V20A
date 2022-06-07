let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    global.db.data.users[who].exp += 1000000
    global.db.data.users[who].limit += 1000000
    global.db.data.users[who].money += 1000000
    conn.sendButton(m.chat, `*Ancrit Mainnya Hebat :l* 
    + *${global.db.data.users[who].exp}* EXP Tersisa
    + *${global.db.data.users[who].limit}* Limit Tersisa
    + *${global.db.data.users[who].money}* Money Tersisa`, author, null, [
        ['Chit', `${usedPrefix + command}`]
    ], m)
}
handler.help = ['ngechit']
handler.tags = ['xp']
handler.command = /^(ngechit)$/i
handler.private = true

export default handler
