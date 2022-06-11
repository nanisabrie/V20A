import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (command == 'mentahan') {
let res = await fetch(`https://api.imgflip.com/get_memes`)
  let sul = await res.json()
  let x = sul.data
  await conn.sendButton(m.chat, `*Name:* ${x.memes.name}
  *Id:* ${x.memes.id}
  *Box:* ${x.memes.box_count}
  *Height:* ${x.memes.height}
  *Width:* ${x.memes.width}`, author, x.memes.url, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'mim') {
if (!text) throw `Gunakan contoh ${usedPrefix + command} hello|helo`
let urut = text.split`|`
  let teksnya = urut[0]
  let teksnya2 = urut[1]
	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "21735", rowId: usedPrefix + 'memaker 21735|' + teksnya + '|' + teksnya2},
{title: "61516", rowId: usedPrefix + 'memaker 61516|' + teksnya + '|' + teksnya2},
{title: "61520", rowId: usedPrefix + 'memaker 61520|' + teksnya + '|' + teksnya2},
{title: "61527", rowId: usedPrefix + 'memaker 61527|' + teksnya + '|' + teksnya2},
{title: "61532", rowId: usedPrefix + 'memaker 61532|' + teksnya + '|' + teksnya2},
{title: "61533", rowId: usedPrefix + 'memaker 61533|' + teksnya + '|' + teksnya2},
{title: "61539", rowId: usedPrefix + 'memaker 61539|' + teksnya + '|' + teksnya2},
{title: "61544", rowId: usedPrefix + 'memaker 61544|' + teksnya + '|' + teksnya2},
{title: "61546", rowId: usedPrefix + 'memaker 61546|' + teksnya + '|' + teksnya2},
{title: "61556", rowId: usedPrefix + 'memaker 61556|' + teksnya + '|' + teksnya2},
{title: "61579", rowId: usedPrefix + 'memaker 61579|' + teksnya + '|' + teksnya2},
{title: "61580", rowId: usedPrefix + 'memaker 61580|' + teksnya + '|' + teksnya2},
{title: "61581", rowId: usedPrefix + 'memaker 61581|' + teksnya + '|' + teksnya2},
{title: "61582", rowId: usedPrefix + 'memaker 61582|' + teksnya + '|' + teksnya2},
{title: "61585", rowId: usedPrefix + 'memaker 61585|' + teksnya + '|' + teksnya2},
{title: "97984", rowId: usedPrefix + 'memaker 97984|' + teksnya + '|' + teksnya2},
{title: "100947", rowId: usedPrefix + 'memaker 100947|' + teksnya + '|' + teksnya2},
{title: "100955", rowId: usedPrefix + 'memaker 100955|' + teksnya + '|' + teksnya2},
{title: "101287", rowId: usedPrefix + 'memaker 101287|' + teksnya + '|' + teksnya2},
{title: "101288", rowId: usedPrefix + 'memaker 101288|' + teksnya + '|' + teksnya2},
{title: "101440", rowId: usedPrefix + 'memaker 101440|' + teksnya + '|' + teksnya2},
{title: "101470", rowId: usedPrefix + 'memaker 101470|' + teksnya + '|' + teksnya2},
{title: "101511", rowId: usedPrefix + 'memaker 101511|' + teksnya + '|' + teksnya2},
{title: "101716", rowId: usedPrefix + 'memaker 101716|' + teksnya + '|' + teksnya2},
{title: "109765", rowId: usedPrefix + 'memaker 109765|' + teksnya + '|' + teksnya2},
{title: "163573", rowId: usedPrefix + 'memaker 163573|' + teksnya + '|' + teksnya2},
{title: "195389", rowId: usedPrefix + 'memaker 195389|' + teksnya + '|' + teksnya2},
{title: "235589", rowId: usedPrefix + 'memaker 235589|' + teksnya + '|' + teksnya2},
{title: "245898", rowId: usedPrefix + 'memaker 245898|' + teksnya + '|' + teksnya2},
{title: "259680", rowId: usedPrefix + 'memaker 259680|' + teksnya + '|' + teksnya2},
{title: "405658", rowId: usedPrefix + 'memaker 405658|' + teksnya + '|' + teksnya2},
{title: "438680", rowId: usedPrefix + 'memaker 438680|' + teksnya + '|' + teksnya2},
{title: "444501", rowId: usedPrefix + 'memaker 444501|' + teksnya + '|' + teksnya2},
{title: "460541", rowId: usedPrefix + 'memaker 460541|' + teksnya + '|' + teksnya2},
{title: "563423", rowId: usedPrefix + 'memaker 563423|' + teksnya + '|' + teksnya2},
{title: "718432", rowId: usedPrefix + 'memaker 718432|' + teksnya + '|' + teksnya2},
{title: "766986", rowId: usedPrefix + 'memaker 766986|' + teksnya + '|' + teksnya2},
{title: "922147", rowId: usedPrefix + 'memaker 922147|' + teksnya + '|' + teksnya2},
{title: "1035805", rowId: usedPrefix + 'memaker 1035805|' + teksnya + '|' + teksnya2},
{title: "1509839", rowId: usedPrefix + 'memaker 1509839|' + teksnya + '|' + teksnya2},
{title: "3218037", rowId: usedPrefix + 'memaker 3218037|' + teksnya + '|' + teksnya2},
{title: "4087833", rowId: usedPrefix + 'memaker 4087833|' + teksnya + '|' + teksnya2},
{title: "5496396", rowId: usedPrefix + 'memaker 5496396|' + teksnya + '|' + teksnya2},
{title: "6235864", rowId: usedPrefix + 'memaker 6235864|' + teksnya + '|' + teksnya2},
{title: "6531067", rowId: usedPrefix + 'memaker 6531067|' + teksnya + '|' + teksnya2},
{title: "8072285", rowId: usedPrefix + 'memaker 8072285|' + teksnya + '|' + teksnya2},
{title: "9440985", rowId: usedPrefix + 'memaker 9440985|' + teksnya + '|' + teksnya2},
{title: "12403754", rowId: usedPrefix + 'memaker 12403754|' + teksnya + '|' + teksnya2},
{title: "14230520", rowId: usedPrefix + 'memaker 14230520|' + teksnya + '|' + teksnya2},
{title: "14371066", rowId: usedPrefix + 'memaker 14371066|' + teksnya + '|' + teksnya2},
{title: "16464531", rowId: usedPrefix + 'memaker 16464531|' + teksnya + '|' + teksnya2},
{title: "21604248", rowId: usedPrefix + 'memaker 21604248|' + teksnya + '|' + teksnya2},
{title: "27813981", rowId: usedPrefix + 'memaker 27813981|' + teksnya + '|' + teksnya2},
{title: "28251713", rowId: usedPrefix + 'memaker 28251713|' + teksnya + '|' + teksnya2},
{title: "40945639", rowId: usedPrefix + 'memaker 40945639|' + teksnya + '|' + teksnya2},
{title: "55311130", rowId: usedPrefix + 'memaker 55311130|' + teksnya + '|' + teksnya2},
{title: "56225174", rowId: usedPrefix + 'memaker 56225174|' + teksnya + '|' + teksnya2},
{title: "79132341", rowId: usedPrefix + 'memaker 79132341|' + teksnya + '|' + teksnya2},
{title: "80707627", rowId: usedPrefix + 'memaker 80707627|' + teksnya + '|' + teksnya2},
{title: "84341851", rowId: usedPrefix + 'memaker 84341851|' + teksnya + '|' + teksnya2},
{title: "87743020", rowId: usedPrefix + 'memaker 87743020|' + teksnya + '|' + teksnya2},
{title: "89370399", rowId: usedPrefix + 'memaker 89370399|' + teksnya + '|' + teksnya2},
{title: "91538330", rowId: usedPrefix + 'memaker 91538330|' + teksnya + '|' + teksnya2},
{title: "91545132", rowId: usedPrefix + 'memaker 91545132|' + teksnya + '|' + teksnya2},
{title: "93895088", rowId: usedPrefix + 'memaker 93895088|' + teksnya + '|' + teksnya2},
{title: "99683372", rowId: usedPrefix + 'memaker 99683372|' + teksnya + '|' + teksnya2},
{title: "100777631", rowId: usedPrefix + 'memaker 100777631|' + teksnya + '|' + teksnya2},
{title: "101910402", rowId: usedPrefix + 'memaker 101910402|' + teksnya + '|' + teksnya2},
{title: "102156234", rowId: usedPrefix + 'memaker 102156234|' + teksnya + '|' + teksnya2},
{title: "110163934", rowId: usedPrefix + 'memaker 110163934|' + teksnya + '|' + teksnya2},
{title: "112126428", rowId: usedPrefix + 'memaker 112126428|' + teksnya + '|' + teksnya2},
{title: "114585149", rowId: usedPrefix + 'memaker 114585149|' + teksnya + '|' + teksnya2},
{title: "119139145", rowId: usedPrefix + 'memaker 119139145|' + teksnya + '|' + teksnya2},
{title: "123999232", rowId: usedPrefix + 'memaker 123999232|' + teksnya + '|' + teksnya2},
{title: "124055727", rowId: usedPrefix + 'memaker 124055727|' + teksnya + '|' + teksnya2},
{title: "124822590", rowId: usedPrefix + 'memaker 124822590|' + teksnya + '|' + teksnya2},
{title: "129242436", rowId: usedPrefix + 'memaker 129242436|' + teksnya + '|' + teksnya2},
{title: "131087935", rowId: usedPrefix + 'memaker 131087935|' + teksnya + '|' + teksnya2},
{title: "131940431", rowId: usedPrefix + 'memaker 131940431|' + teksnya + '|' + teksnya2},
{title: "132769734", rowId: usedPrefix + 'memaker 132769734|' + teksnya + '|' + teksnya2},
{title: "134797956", rowId: usedPrefix + 'memaker 134797956|' + teksnya + '|' + teksnya2},
{title: "135256802", rowId: usedPrefix + 'memaker 135256802|' + teksnya + '|' + teksnya2},
{title: "135678846", rowId: usedPrefix + 'memaker 135678846|' + teksnya + '|' + teksnya2},
{title: "148909805", rowId: usedPrefix + 'memaker 148909805|' + teksnya + '|' + teksnya2},
{title: "155067746", rowId: usedPrefix + 'memaker 155067746|' + teksnya + '|' + teksnya2},
{title: "161865971", rowId: usedPrefix + 'memaker 161865971|' + teksnya + '|' + teksnya2},
{title: "175540452", rowId: usedPrefix + 'memaker 175540452|' + teksnya + '|' + teksnya2},
{title: "178591752", rowId: usedPrefix + 'memaker 178591752|' + teksnya + '|' + teksnya2},
{title: "180190441", rowId: usedPrefix + 'memaker 180190441|' + teksnya + '|' + teksnya2},
{title: "181913649", rowId: usedPrefix + 'memaker 181913649|' + teksnya + '|' + teksnya2},
{title: "188390779", rowId: usedPrefix + 'memaker 188390779|' + teksnya + '|' + teksnya2},
{title: "195515965", rowId: usedPrefix + 'memaker 195515965|' + teksnya + '|' + teksnya2},
{title: "196652226", rowId: usedPrefix + 'memaker 196652226|' + teksnya + '|' + teksnya2},
{title: "216951317", rowId: usedPrefix + 'memaker 216951317|' + teksnya + '|' + teksnya2},
{title: "217743513", rowId: usedPrefix + 'memaker 217743513|' + teksnya + '|' + teksnya2},
{title: "222403160", rowId: usedPrefix + 'memaker 222403160|' + teksnya + '|' + teksnya2},
{title: "226297822", rowId: usedPrefix + 'memaker 226297822|' + teksnya + '|' + teksnya2},
{title: "247375501", rowId: usedPrefix + 'memaker 247375501|' + teksnya + '|' + teksnya2},
{title: "252600902", rowId: usedPrefix + 'memaker 252600902|' + teksnya + '|' + teksnya2},
{title: "259237855", rowId: usedPrefix + 'memaker 259237855|' + teksnya + '|' + teksnya2}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})

}


}
handler.command = handler.help = ['mentahan', 'mim']
handler.tags = ['maker']

export default handler