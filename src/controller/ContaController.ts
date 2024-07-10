import { isNull } from "util";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{


    // Coleção Array que vai armazenar os objetos Conta
    private listacontas: Array<Conta> = new Array<Conta>();

    // Controlar os 
    public numero: number = 0;

    procurarPortitular(titular: string): void {
       let buscaPorTitular = this.listacontas.filter( c =>
            c.titular.includes(titular)
       );

       buscaPorTitular.forEach( conta => conta.visualizar());
    }

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null )
            buscaConta.visualizar();
        else
            console.log("\nA Conta não foi encontrada");
    }
    listarTodas(): void {
        for(let conta of this.listacontas){
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listacontas.push(conta);
        console.log("\nA conta foi cadastrada com sucesso! ")
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null ){
            this.listacontas[(this.listacontas.indexOf(buscaConta))] = conta;
            console.log("\nA Conta foi Atualizada com Sucesso!")
        }else
            console.log("\nA Conta não foi encontrada")
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null ){
            this.listacontas.splice(this.listacontas.indexOf(buscaConta), 1);
            console.log("\nA Conta foi Deletada com Sucesso!")
        }else
            console.log("\nA Conta não foi encontrada")
    }
    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null ){
            if(buscaConta.sacar(valor) === true)
                console.log("\nO Saque foi efetuado com sucesso!")
            
            }else
            console.log("\nA Conta não foi encontrada")
    }
    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null ){
            buscaConta.depositar(valor)
                console.log("\nO Deposito foi efetuado com sucesso!")
            
        }else{
            console.log("\nA Conta não foi encontrada")
        }
    }
    tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem);
        let buscaContaDestino = this.buscarNoArray(numeroDestino);

        if (buscaContaOrigem !== null && buscaContaDestino !== null){
            if(buscaContaOrigem.sacar(valor) === true)
                buscaContaDestino.depositar(valor);
                console.log("\nA Transferencia foi efetuado com sucesso!")
            
            }else
            console.log("\nA Conta de Origem e/ou Destino não foi encontrada")
    }
    
    // Métodos Auxiliares

    public gerarNumero(): number{
        return ++ this.numero;

    }

    //Buscar no Array
    public buscarNoArray(numero: number): Conta | null{
        for (let conta of this.listacontas){
            if (conta.numero === numero)
                return conta;
        }

        return null;

    }
}