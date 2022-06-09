let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*Pesan:* ${text ? `${text}\n\n` : ''} *⛊──⛾「 Tag All 」⛾──⛊* \n` + users.map((v, i) => '│' + `*${i + 1}.* ` + '@' + v.replace(/@.+/, '')).join`\n` + '\n*⛊──⛾「 Tag All 」⛾──⛊*', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
${users.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')}