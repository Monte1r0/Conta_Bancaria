import { Conta } from "../model/Conta";

export interface ContaRepository{

    // Métpdps do CRUD
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;
    procurarPortitular(titular: string): void,


    // Métodos Bancários
    sacar(numero: number, valor: number): void
    depositar(numero: number, valor: number): void;
    tranferir(numeroOrigem: number, numeroDestino: number, valor: number): void;


}