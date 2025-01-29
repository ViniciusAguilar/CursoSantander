<<<<<<< HEAD
const { error } = require('node:console')
const dns = require('node:dns')



// const ipv4 = dns.resolve4(searchedUrl, (err, adresses) =>{
//     if(err){
//         console.log('url não encontrada')
//         return
//     }
//     console.log(adresses)
// })

async function bootstrap(){
    const searchedUrl = 'google.com'

    const adresses = await dns.promises.resolve4(searchedUrl)
    console.log(adresses)

    

    const nameServers = await dns.promises.resolveNs(searchedUrl)
    console.log(nameServers)

    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs)
    
    console.time('pesquisando url por DNS especifico')
    resolver.resolve4(searchedUrl, (error, adresses) =>{
        if(error){
            console.error('Não foi possivel encontrar IPV4')
        }
        console.log(adresses)
        console.timeEnd('pesquisando url por DNS especifico')
    })
    
    
}
 
=======
const { error } = require('node:console')
const dns = require('node:dns')



// const ipv4 = dns.resolve4(searchedUrl, (err, adresses) =>{
//     if(err){
//         console.log('url não encontrada')
//         return
//     }
//     console.log(adresses)
// })

async function bootstrap(){
    const searchedUrl = 'google.com'

    const adresses = await dns.promises.resolve4(searchedUrl)
    console.log(adresses)

    

    const nameServers = await dns.promises.resolveNs(searchedUrl)
    console.log(nameServers)

    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs)
    
    console.time('pesquisando url por DNS especifico')
    resolver.resolve4(searchedUrl, (error, adresses) =>{
        if(error){
            console.error('Não foi possivel encontrar IPV4')
        }
        console.log(adresses)
        console.timeEnd('pesquisando url por DNS especifico')
    })
    
    
}
 
>>>>>>> f43de4f920a76d0c1c7021834e7989383592b387
bootstrap()