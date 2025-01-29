const { rejects } = require('assert')
const { resolve } = require('path')
const rl = require('readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

const promptPromise = {
    question: (pergunta) => new Promise((resolve,reject) => {
        try{
            prompt.question((pergunta), (resposta) => resolve(resposta))
        } catch (error) {
            reject(error)
        }
    }),
    close: () => prompt.close()
}

async function askUser(){ 
    const numero = await promptPromise.question('Qual seu número favorito?: ')
    console.log(`O dobro do seu numero favorito é: ${parseInt(numero)*2}`)
    
    const cor = await promptPromise.question('Qual sua cor favorita?: ')
    console.log(`Sua cor favorita é: ${cor}`)

    promptPromise.close()
}

askUser()