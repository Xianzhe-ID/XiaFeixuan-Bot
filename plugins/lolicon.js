import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzheid/Bahan-Nsfw/main/gatcha.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Ngapain?🤨', '©Xianzhe ID', '/Loli, m)
}
handler.command = /^(lolicon)$/i
handler.tags = ['premium']
handler.help = ['lolicon', 'premiummenu']
handler.premium = true
export default handler
