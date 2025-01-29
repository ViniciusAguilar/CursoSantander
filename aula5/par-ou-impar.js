const listaDeNumeros = [25, 88, 71, 192, 333, 222, 10, 11, 62]
const listaDePares = []
const listaDeImpares = []

let IndiceDoNumero = 0

while (IndiceDoNumero < listaDeNumeros.length){
    if(listaDeNumeros[IndiceDoNumero]% 2 === 0){
        listaDePares.push(listaDeNumeros[IndiceDoNumero])
    }else{
        listaDeImpares.push(listaDeNumeros[IndiceDoNumero])
    }
    IndiceDoNumero += 1

}
console.log(`Pares: ${listaDePares}`)
console.log(`Impares: ${listaDeImpares}`)