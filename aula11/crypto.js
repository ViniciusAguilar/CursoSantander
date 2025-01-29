<<<<<<< HEAD
const crypto = require('node:crypto')

const chave = crypto.randomBytes(12).toString('base64')
console.log(chave)

const uuid = crypto.randomUUID()
console.log(uuid)

const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa',{modulusLength:2048})

console.log(publicKey)
console.log(privateKey)
=======
const crypto = require('node:crypto')

const chave = crypto.randomBytes(12).toString('base64')
console.log(chave)

const uuid = crypto.randomUUID()
console.log(uuid)

const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa',{modulusLength:2048})

console.log(publicKey)
console.log(privateKey)
>>>>>>> f43de4f920a76d0c1c7021834e7989383592b387
