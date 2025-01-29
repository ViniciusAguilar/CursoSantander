<<<<<<< HEAD
const querystring = require('node:querystring')
const url = require('node:url')

const urlBase = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de janeiro',
    periodo: 'verão'
})

const fullurl = `${urlBase}/${uri}`

=======
const querystring = require('node:querystring')
const url = require('node:url')

const urlBase = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de janeiro',
    periodo: 'verão'
})

const fullurl = `${urlBase}/${uri}`

>>>>>>> f43de4f920a76d0c1c7021834e7989383592b387
console.log(url.parse(fullurl))