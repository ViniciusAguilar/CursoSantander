const listaDeNumeros = [33, 131, 155, 555, 222, -21, -56]
const usuarios = ['José','Antonio']

for (let contador = 0; contador < listaDeNumeros.length; contador+=1){
    console.log(listaDeNumeros[contador])
}

for (let numero of listaDeNumeros){
    console.log(numero)
}
for (let usuario of usuarios){
    console.log(usuario)
}