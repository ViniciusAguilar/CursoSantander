const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natalia', 'Bianca']
let encontrouUsuário = false

let contador = 0

do{
    const usuarioAtual = listaDeContatos[contador]
    if(usuarioAtual && usuarioAtual.startsWith('Z')){
        encontrouUsuário = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }

    contador += 1

    if (contador >= listaDeContatos.length){
        encontrouUsuário = true
        console.log(`Usuário não encontrado`)
    }

}while (!encontrouUsuário)