global.apikey = "c63caa1c-baa6-4dee-9ae9-753f73996a2e" 
global.domain = "https://panelkamu.violetic.pw"
global.capikey = "" // opsional

global.ads = false
global.channel = ""
global.forcesub = false

global.botname = "veybot"
global.prefix = "."
 // dst...const fs = require('fs')
const chalk = require('chalk')


global.ytname = ""
global.socialm = ""
global.location = "Indonesia" 

global.botname = 'veybot' 
global.ownernumber = '6285809345875'
global.botnumber = '//6285809345875'
global.ownername = 'evelynnsSy1'

global.websitex = 'https://evelynzone.my.id'
global.sharelink = "https://chat.whatsapp.com/KRevsubuTmLHLmG6X5Zmxi"
global.themeemoji = '🥧'

global.wm = "evelyn bot"
global.botscript = 'Privat'
global.packname = "evelyn bot"

global.author = "evelyn bot"
global.creator = "6285809345875@s.whatsapp.net"
global.vprefix = '.'
global.premium = ["6285809345875@s.whatsapp.net"] // Premium User
global.hituet = 0
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v1' // reply type 'v1' => 'v4'
global.autoblocknumber = '0'
global.antiforeignnumber = '0'
global.setwelcome = "୨୧ selamat datang di *straypsie* ୨୧\n\nhalo! senang melihat @user bergabung di marga *straypsie* ♡ \nnama :\numur :\ngender :\n\nsemoga betah di sini ya selamat datang dan selamat menjadi bagian dari *straypsie*!"
global.anticall = false
global.autoswview = false
global.adminevent = false
global.groupevent = false
global.mess = { 
    admin: '🙅‍♀️ Upss... fitur kick cuma buat admin *strayps!e* aja ya sayang ♡',
    delete: '🙅‍♀️ Upss... fitur delete cuma buat admin *strayps!e* aja ୨୧'
}
global.limitawal = {
    premium: "Infinity",
    free: "Infinity",
}
nsfw: '🔞 Aduh maaf sayang...\nFitur 18+ masih off di grup ini ૮꒰˶• ༝ •˶꒱ა\nSuruh admin ketik .nsfw on dulu ya ♡',

done: '✨ Done! Beres sayang~',

error: '💔 Ups... ada error nih\nCoba lagi bentar lagi ya ૮₍ ˶• ༝ •˶ ₎ა',

success: '🧚 Ta-da! Ini hasilnya udah jadi ♡'
global.thumb = fs.readFileSync('./media/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
