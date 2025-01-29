<<<<<<< HEAD
export type Produto = {
    nome: string
    valor: number
}

// class Estabelecimento {

//     private endereco : string
//     private setor : string
//     private produtos : Produto[]

//     constructor(endereco:string,setor:string,p: Produto[]){
//         this.endereco = endereco
//         this.setor = setor
//         this.produtos = p

//     }
// }

class EstabelecimentoBase {

    private _filaDeEspera = 10

    constructor(
        public endereco:string,
        public setor:string,
        private produtos: Produto[],
        filaDeEspera ?: number){
            this.filaDeEspera = filaDeEspera?? this._filaDeEspera
        }
  
        retornaNomeDosProdutos() {
            return this.produtos.map(produto => produto.nome)
         }

        get filaDeEspera() {
            return this._filaDeEspera
            
        }

        set filaDeEspera(fila:number){
            if (fila <= 0){
                return
            }
            this._filaDeEspera = fila
        }
        
        diminuiFilaDeEspera(){
            if(this._filaDeEspera === 0) {
                return
            }
            this._filaDeEspera -= 1
         }
        
}

const padaria3 = new EstabelecimentoBase(
    'Rua dos Laranjais, 1320 - Bloco D',
    'alimentacao', 
    [{nome: 'pão', valor: 0.8},
    {nome: 'arroz', valor: 10},
    {nome: 'leite', valor: 5},
    {nome: 'brigadeiro', valor: 1.5},
    {nome: 'carne-moida', valor: -20}])

const padaria4 = new EstabelecimentoBase(
    'Rua dos Laranjais, 1320 - Bloco D',
    'alimentacao', 
    [{nome: 'pão', valor: 0.8},
    {nome: 'arroz', valor: 10},
    {nome: 'leite', valor: 5},
    {nome: 'brigadeiro', valor: 1.5},
    {nome: 'carne-moida', valor: -20}],20)

const padaria = {
    endereco: 'Rua dos Abacates, 1320 - Bloco D',
    tipo: 'alimentacao',
    produtos: [
        {nome: 'pão', valor: 0.8},
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5},
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne-moida', valor: -20}
    ],
 
}

console.log(padaria3.retornaNomeDosProdutos())
padaria4.filaDeEspera = 50
console.log(padaria3.filaDeEspera)
=======
export type Produto = {
    nome: string
    valor: number
}

// class Estabelecimento {

//     private endereco : string
//     private setor : string
//     private produtos : Produto[]

//     constructor(endereco:string,setor:string,p: Produto[]){
//         this.endereco = endereco
//         this.setor = setor
//         this.produtos = p

//     }
// }

class EstabelecimentoBase {

    private _filaDeEspera = 10

    constructor(
        public endereco:string,
        public setor:string,
        private produtos: Produto[],
        filaDeEspera ?: number){
            this.filaDeEspera = filaDeEspera?? this._filaDeEspera
        }
  
        retornaNomeDosProdutos() {
            return this.produtos.map(produto => produto.nome)
         }

        get filaDeEspera() {
            return this._filaDeEspera
            
        }

        set filaDeEspera(fila:number){
            if (fila <= 0){
                return
            }
            this._filaDeEspera = fila
        }
        
        diminuiFilaDeEspera(){
            if(this._filaDeEspera === 0) {
                return
            }
            this._filaDeEspera -= 1
         }
        
}

const padaria3 = new EstabelecimentoBase(
    'Rua dos Laranjais, 1320 - Bloco D',
    'alimentacao', 
    [{nome: 'pão', valor: 0.8},
    {nome: 'arroz', valor: 10},
    {nome: 'leite', valor: 5},
    {nome: 'brigadeiro', valor: 1.5},
    {nome: 'carne-moida', valor: -20}])

const padaria4 = new EstabelecimentoBase(
    'Rua dos Laranjais, 1320 - Bloco D',
    'alimentacao', 
    [{nome: 'pão', valor: 0.8},
    {nome: 'arroz', valor: 10},
    {nome: 'leite', valor: 5},
    {nome: 'brigadeiro', valor: 1.5},
    {nome: 'carne-moida', valor: -20}],20)

const padaria = {
    endereco: 'Rua dos Abacates, 1320 - Bloco D',
    tipo: 'alimentacao',
    produtos: [
        {nome: 'pão', valor: 0.8},
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5},
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne-moida', valor: -20}
    ],
 
}

console.log(padaria3.retornaNomeDosProdutos())
padaria4.filaDeEspera = 50
console.log(padaria3.filaDeEspera)
>>>>>>> f43de4f920a76d0c1c7021834e7989383592b387
console.log(padaria4.filaDeEspera)