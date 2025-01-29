export function calcularMediaAvaliacao(avaliacoes= []) {
    
    let totalClientes = 0;
    let somaNotas = 0;
	for (const key of avaliacoes){
        totalClientes += key.clientes;
        somaNotas += key.nota * key.clientes;
      
	}
    const media = somaNotas / totalClientes;
    return media;
}
const media = calcularMediaAvaliacao([{
	"clientes": 2,
	"nota": 1
 },{
	"clientes": 15,
	"nota": 2
 },{
	"clientes": 18,
	"nota": 3
 },{
	"clientes": 25,
	"nota": 4
 },{
	"clientes": 40,
	"nota": 5
 }])

 console.log(media)