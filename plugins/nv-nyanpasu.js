import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/otaku.mp3'
conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Nyapasu|Nyanpasu|nyapasu|Nyapasu|Gambure|Yabure/
handler.command = new RegExp
export default handler

