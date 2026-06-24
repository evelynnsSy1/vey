let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Reply gambar yang mau di-HD-in yaa kak ♡'
    if (!/image/.test(m.quoted.mtype)) throw 'Yang di-reply harus gambar!'
    
    m.reply('Proses upscale HD... bentar yaa ✨')
    
    try {
        let q = m.quoted
        let media = await q.download()
        let api = global.upscaleAPI
        let url = `https://api.lolhuman.xyz/api/upscale?apikey=${api}&img=${await conn.uploadFile(media)}`
        
        let res = await fetch(url)
        let json = await res.json()
        
        if (json.status !== '200') throw json.message || 'Gagal upscale'
        
        await conn.sendFile(m.chat, json.result, 'hd.jpg', 'Nih kak udah HD ♡', m)
    } catch (e) {
        m.reply(`Error: ${e.message}`)
    }
}

handler.help = ['hd', 'upscale']
handler.tags = ['tools']
handler.command = /^(hd|upscale)$/i
handler.limit = true

export default handler
