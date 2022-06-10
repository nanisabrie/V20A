import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command, noPrefix }) => {

if (noPrefix == 'ara') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/ara-ara.mp3`
await conn.sendFile(m.chat, vn, 'ara.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'ganbare') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/ganbare-ganbare-senpai.mp3`
await conn.sendFile(m.chat, vn, 'ganbare.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'konichiwa') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/hashira-konichiwa.mp3`
await conn.sendFile(m.chat, vn, 'konichiwa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'nani') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/nani.mp3`
await conn.sendFile(m.chat, vn, 'nani.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'rikka') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/rikka-ow.mp3`
await conn.sendFile(m.chat, vn, 'rikka.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'ultra') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/ultra-instinct.mp3`
await conn.sendFile(m.chat, vn, 'ultra.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'ahh') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/yemete-kudasai-ah.mp3`
await conn.sendFile(m.chat, vn, 'ahh.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'yemete') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/yemete-kudasai.mp3`
await conn.sendFile(m.chat, vn, 'yemete.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

if (noPrefix == 'yuno') {
let vn = `https://raw.githubusercontent.com/andgyk/anime-soundboard/main/public/audio/yuno-yukki.mp3`
await conn.sendFile(m.chat, vn, 'yuno.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}

}
handler.noPrefix = ['ara', 'ganbare', 'konichiwa', 'nani', 'rikka', 'ultra', 'ahh', 'yemete', 'yuno']

export default handler