import Readline from 'readline'
import Bcrypt from 'bcrypt'

const readline = Readline.createInterface({
  input: process.stdin
})

console.log('Qual a senha para criptografar?')
readline.question('senha', (password) => { 
  const hash = Bcrypt.hashSync(password, 10);
  console.log(`Seu hash para: ${password}`)
  console.log(hash)
  readline.close()
})
