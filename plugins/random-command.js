import fetch from 'node-fetch'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (command == 'jadian2') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    }
    if (command == 'menikah') {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, KAU HARUS MENIKAH ${toM(b)}, kamu MENJADI PASANGAN YANG BAIK 💓*`, null, {
mentions: [a, b]
})
}

if (command == 'metercinta') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
conn.reply(m.chat, `
*❤️❤️ METER CINTA ❤️❤️*
*cinta dari ${text} itu untuk kamu* *${Math.floor(Math.random() * 100)}%* *dari 100%*
*kamu harus memintanya untuk menjadi pacar kamu ?*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})
}

if (command == 'bertanya') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
m.reply(`
*⁉️ PERTANYAAN ⁉️*
 
*PERTANYAAN:* ${text}
*TANGGAPAN:* ${['Ya','Mungkin ya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
}

if (command == 'bokep') {
conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', wm, m)
}

if (command == 'kusonime') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
let res = await fetch(`https://yog-apikey.herokuapp.com/api/anime/kusonime?search=${text}&apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Judul:*\n${has.title}
  *Judul:*\n${has.title_jp}
  *Judul:*\n${has.title}
*Genre:* ${has.genre}
  *Season:* ${has.season}
  *Produser:* ${has.producer}
  *Type:* ${has.type}
  *Status:* ${has.status}
  *Episode:* ${has.total_episode}
  *Score:* ${has.score}
  *Durasi:* ${has.duration}
  *Rilis:* ${has.released_on}
  *Deskripsi:* ${has.description}`, author, has.thumb, [
                ['menu', `${usedPrefix}menu`]
            ], m)
}

if (command == 'membucin') {
let res = await fetch(`https://yog-apikey.herokuapp.com/api/bucin?apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Bucin:*\n${has.result}`, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'mencerpen') {
let res = await fetch(`https://yog-apikey.herokuapp.com/api/cerpen?apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result.result
  await conn.sendButton(m.chat, `*Judul:* ${has.title}
  *Pengarang:* ${has.pengarang}
  *Kategori:* ${has.kategori}
  *Type:* ${has.cerpen}`, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'mencersex') {
let res = await fetch(`https://yog-apikey.herokuapp.com/api/cersex?apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result.result
  await conn.sendButton(m.chat, `*Judul:* ${has.judul}
  *Cerita:* ${has.cersex}`, author, has.img, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'asmaulhusna') {

let json = await fetch(`https://yog-apikey.herokuapp.com/api/muslim/asmaulhusna?apikey=YogGanz`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let has of jsons.result) {
        caption += `
        *Nomor:* ${has.number}
  *Latin:* ${has.latin}
  *Arb:* ${has.arab}
  *Indonesia:* ${has.translate_id}
  *Inggris:* ${has.translate_en}
  `}
        return m.reply(caption)
}

if (command == 'hadistku') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} bukhari 52`
let text1 = args[0]
let text2 = args.slice(1).join(' ')
let res = await fetch(`https://yog-apikey.herokuapp.com/api/muslim/hadits?kitab=${text1}&nomor=${text2}&apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.data
  let ha = sul.data.contents
  await conn.sendButton(m.chat, `*Hadist:* ${has.name}
  *Tersedia:* ${has.available} nomor
  
  *Nomor:* ${ha.number}
  *Arab:* ${ha.arab}
  *Indonesia:* ${ha.id}
  `, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'quranku') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 5 2`
let text1 = args[0]
let text2 = args.slice(1).join(' ')
let res = await fetch(`https://yog-apikey.herokuapp.com/api/muslim/quran?surah=${text1}&ayat=${text2}&apikey=YogGanz`)
  let qt = await res.json()
  let x = qt.result.data
  await conn.sendButton(m.chat, `*Surah:* ${x.surah.name.transliteration.id}
  ${x.surah.name.long}
  ${x.surah.name.translation.id}
  ${x.surah.revelation.id}
  
  *Arab:* ${x.text.arab}
  *Indonesia:* ${x.translation.id}
  *Tafsir:* ${x.tafsir.id.long}
  *Surah:* ${x.surah.tafsir.id}`, author, null, [
                ['Audio', `${usedPrefix}alquransound ${x.audio.primary}`]
            ], m)
}

if (command == 'memeindo') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=9b817532fadff8fc7cb86862`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Meme EN', usedPrefix + 'meme'],
      ['Meme ID', usedPrefix + 'memeindo'],
      ['Meme Joke', usedPrefix + 'memedarkjoke']
    ], m)
}

if (command == 'randommeme') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/random/meme?apikey=9b817532fadff8fc7cb86862`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Meme EN', usedPrefix + 'meme'],
      ['Meme ID', usedPrefix + 'memeindo'],
      ['Darkjoke', usedPrefix + 'memedarkjoke']
    ], m)
}

if (command == 'memedarkjoke') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=9b817532fadff8fc7cb86862`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Meme', usedPrefix + 'randommeme'],
      ['Meme ID', usedPrefix + 'memeindo'],
      ['Darkjoke', usedPrefix + 'darkjoke']
    ], m)
}

if (command == 'shopee') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} samsung`
let f = await fetch(`https://bx-hunter.herokuapp.com/api/shopee-search?text=${text}&apikey=FuckBitch`)
let x = await f.json()
let caption = `
*Brand:* ${x.brand}
*Bisa pakai cod:* ${x.can_use_cod}
*Catid:* ${x.catid}
*Hitungan Cmt:* ${x.cmt_count}
*Jumlah Komen:* ${x.currency}
*Diskon:* ${x.discount}
*Historis Terjual:* ${x.historical_sold}
*Dewasa:* ${x.is_adult}
*Toko Resmi:* ${x.is_official_shop}
*Di Flash Sale:* ${x.is_on_flash_sale}
*Peringkat barang:* ${x.item_rating}
*Status barang:* ${x.item_status}
*Jumlah suka:* ${x.liked_count}
*Nama:* ${x.name}
*Sarga sebelum diskon:* ${x.price_before_discount}
*Harga maks sebelum diskon:* ${x.price_max_before_discount}
*Harga maks:* ${x.price_max}
*Harga min sebelum diskon:* ${x.price_min_before_discount}
*Harga min:* ${x.price_min}
*Harga:* ${x.price}
*Toko Terverifikasi:* ${x.shopee_verified}
*Lokasi toko:* ${x.shop_location}
*Terjual:* ${x.sold}
*Persediaan/Stok:* ${x.stock}
*Jumlah tampilan:* ${x.view_count}`
await conn.sendHydrated(m.chat, caption, wm, x.image, x.shop_location, 'Lokasi', null, null, [
      ['Next', `${usedPrefix + command}`],
      ['HostApk', usedPrefix + 'hostapk'],
      ['Menu', usedPrefix + 'menu']
    ], m)
}

if (command == 'beasiswa') {
let f = await fetch(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=9b817532fadff8fc7cb86862`)
let jsons = await f.json()
let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
🤠 *Nama:* ${x.title}
*Link:* ${x.link}
`}
        return m.reply(caption)
}

if (command == 'stimker') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing

*List:*
• anjing
• patrick
• amongus
• gawrgura
• bucinstick`

await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/sticker/${text}?apikey=9b817532fadff8fc7cb86862`, 'sticker.webp', '', m)

await conn.sendButton(m.chat, `*Mau Lagi Gak?*
Pencet di bawah bang ☺️`, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'apkdown') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} com.whatsapp`
let f = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=9b817532fadff8fc7cb86862&package=${text}`)
let x = await f.json()
let caption = `
*Apk Name:* ${x.result.apk_name}
*Version:* ${x.result.apk_version}
*Author:* ${x.result.apk_author}
`
await conn.sendHydrated(m.chat, caption, wm, x.result.apk_icon, x.result.apk_link, 'Link', null, null, [
      ['Download', `${usedPrefix + command}`],
      ['HostApk', usedPrefix + 'hostapk'],
      ['Menu', usedPrefix + 'menu']
    ], m)
    await m.reply('File dikirim..')
    await conn.sendFile(m.chat, x.result.apk_link, x.result.apk_link, '', m)
}


}
handler.command = handler.help = ['jadian2', 'menikah', 'metercinta', 'bertanya', 'bokep', 'kusonime', 'membucin', 'mencerpen', 'mencersex', 'asmaulhusna', 'hadistku', 'quranku', 'memeindo', 'shopee', 'stimker', 'randommeme', 'memedarkjoke', 'beasiswa', 'apkdown']
handler.tags = ['random']

export default handler