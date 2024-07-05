import { isNull } from "util";
import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    // Coleção Array que vai armazenar os objetos Conta
    private listacontas: Array<Conta> = new Array<Conta>();

    // Controlar os 
    public numero: number = 0;

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
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }
    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
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