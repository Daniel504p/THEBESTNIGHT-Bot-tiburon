import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/temon.mp3'
conn.sendFile(m.chat, vn, 'temon.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Temon|temon/
handler.command = new RegExp
export default handler


