import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, command, text }) => {

let urut = text.split`|`
  let nama = urut[0]
  let pasangan = urut[1]

let jsons = await ramalanJodoh(`${nama}`, `${pasangan}`)
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
*Kecocokan Berdasarkan Nama*
POSITIF: ${x.positif}
NEGATIF: ${x.negatif}
`}
        return m.reply(caption)

}
handler.help = ['cekjodoh <pasangan>']
handler.tags = ['kerang', 'fun']
handler.command = /^cekjodoh/i

handler.limit = true

export default handler

function ramalanJodoh(nama, pasangan) {
	return new Promise((resolve, reject) => {
		axios.get('https://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+nama+'&nama2='+pasangan+'&proses=+Submit%21+').then(res => {
		const $ = cheerio.load(res.data)
		const thumb = 'https://www.primbon.com/'+$('#body > img').attr('src')
		const isi = $('#body').text().split(pasangan)[1].replace('< Hitung Kembali','').split('\n')[0]
      		const positif = isi.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ','')
      		const negatif = isi.split('Sisi Negatif Anda: ')[1]
      		const result = {
      			thumb: thumb,
      			positif: positif,
      			negatif: negatif
      		}
      		resolve(result)
		})

	})
}

