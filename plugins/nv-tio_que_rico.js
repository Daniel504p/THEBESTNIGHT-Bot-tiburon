import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/oh_tio.mp3'
conn.sendFile(m.chat, vn, 'dylan1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /reality|reallity|ooo tio|tio que rico/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
export default handler
