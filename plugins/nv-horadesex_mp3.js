import db from '../lib/database.js'
import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/maau1.mp3'
conn.sendFile(m.chat, vn, 'maau1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /sexo|Sexo|Hora de sexo|hora de sexo/
handler.command = new RegExp
export default handler

