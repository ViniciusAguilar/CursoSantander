const path = require('node:path')
const fs = require('node:fs')
const dotenv = require('dotenv')

dotenv.config()

const filePath = path.join(process.cwd(), 'aula10','texto.txt')
const fileOutPath = path.join(process.cwd(), 'aula10','texto-com-linhas.txt')

fs.readFile(filePath, {}, (erro, dados) =>{
    if(erro){
        console.error(`Erro na leitura do caminho: ${filePath}`)
        return
        
    }
    const texto = dados.toString()
    const linhas = texto.split('\n')
    
    const linhasAjustadas = linhas.map((linha, index, arrayDeLinhas) => 
        `${index} - ${linha}`)

    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), {}, erro => {
        if(erro){
            console.log(`Erro na escrita do caminho: ${fileOutPath}`)
            
        }
        console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)
    })
})
