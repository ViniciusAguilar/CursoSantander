import { Produto } from "../aula12/classes"

interface EstabelecimentoInterface {
    endereco : string
    setor : string
    filaDeEspera: number
    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}
interface ReceitaInterface {
    remedios: string[]
    indentificacaoDoMedico: string
}

interface FarmaciaInterface extends EstabelecimentoInterface{
    compraRemedioPrescrito: (receita: ReceitaInterface, produtosAComprar : string[]) => void
}

interface Remedio extends Produto {
    receitaObrigatoria?: boolean
}


class Estabelecimento implements EstabelecimentoInterface {

   protected _filaDeEspera = 10

    constructor(
        public endereco:string,
        public setor:string,
        protected produtos: Produto[],
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

class Farmacia extends Estabelecimento implements FarmaciaInterface {
    
    constructor(
        public endereco:string,
        public setor:string,
        protected produtos: Remedio[],
        filaDeEspera ?: number
        ){
            super(endereco,setor,produtos,filaDeEspera)
        }

        public compraRemedioPrescrito(receita: ReceitaInterface, produtosAComprar : string[]): void {
            
            const remediosDisponiveis = this.produtos.filter(produto =>
                produtosAComprar.includes(produto.nome)
            )
            if(remediosDisponiveis.length === 0){
                console.log('infelizmente não temos os remédios em estoque')
            }

            const remediosAutorizados = remediosDisponiveis.filter(
                produto => 
                    !produto.receitaObrigatoria ? true:
                    receita.remedios.includes(produto.nome)                 
            )
            console.log({remediosDisponiveis})
            console.log({remediosAutorizados})

        }
}

const farmaciaDoZe = new Farmacia (
    'Rua X, 1299',
    'farmaceutico', 
    [
        {nome: 'aspirina', valor: 0.8},
        {nome: 'remédio controlado 1', valor: 10, receitaObrigatoria: true},
        {nome: 'remédio controlado 2', valor: 100, receitaObrigatoria: true},
        {nome: 'vitamina C', valor: 5},
        {nome: 'creme hidratante', valor:20}   
    ]
)

farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['remédio controlado 1'],
    indentificacaoDoMedico: '111-222-333'
}, ['aspirina','remédio controlado 2','shampoo'])