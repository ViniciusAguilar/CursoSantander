const querystring = require('node:querystring')
const url = require('node:url')

const urlBase = 'https://siteviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de janeiro',
    periodo: 'verão'
})

const fullurl = `${urlBase}/${uri}`

console.log(url.parse(fullurl))