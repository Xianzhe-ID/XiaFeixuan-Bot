/*import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzheid/Bahan-Nsfw/main/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Nih kak', '©Xianzhe ID', 'Loli', m)
}
handler.command = /^(loli|lolicon)$/i
handler.tags = ['anime']
handler.premium = true
export default handler*/

import axios from "axios"

let handler = async (m, {command, conn}) => {
if (command == 'Lolicon') {
let haha = await conn.getFile(`https://raw.githubusercontent.com/Xianzhe-ID/XianzheV1-MD/XianzheID/loli.json`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 NEXT 🔄', `/${command}`]], m)}
