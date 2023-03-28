import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

global.owner = [
  ['5493865362492'],
  ['593959425714'],
  ['595983186566'],
  ['50246028932'],
  ['5219996125657'],
  ['5492266466080'],
  ['5218442114446'], 
  ['50763596565'], 
  ['50671103203'],
  ['51946460695'],
  ['51916354063'],
  ['5219992095479'],
  ['50584051357'],
  ['56937358804', 'Bot Tiburón🦈', true]
  // [número, Nombre de creador/dueño?, Modo programador?]
] // Pon tu número aquí 
global.smods = []
global.mods = ['595983186566'] // números de moderadores aquí
global.prems = ['595983186566'] // numeros premium aquí 
global.APIs = { // Sitios de APIs
  // nombre: 'https://sitioweb'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // Apikeys de los sitios
  // 'https://sitioweb': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
//Thumb / Logo del bot
global.thumb = fs.readFileSync('./media/thumb.jpg')

// Sticker WM / Info del sticker 
global.packname = 'Bot Tiburón🦈'
global.author = 'DIEGO-OFC'
global.wm = 'Bot Tiburón🦈'

global.multiplier = 100 // más alto el número, más difícil se volverá subir de nivel

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      health: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("[LOG_BOT] Se acaba de actualizar el archivo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
