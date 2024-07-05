import { Conta } from "./Conta"


export class ContaPoupanca extends Conta{


    //Definir os Atributos da classe (Caracteristicas)
    private _aniversario: number;



	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversairo: number) {
        super(numero, agencia, tipo, titular, saldo)
		this._aniversario = aniversairo;
	}

	public get aniversario(): number {
		return this._aniversario;
	}

	public set aniversario(value: number) {
		this._aniversario = value;
	}


    public visualizar(){
        super.visualizar();
        console.log(`\nAniversario da Conta. ${this.aniversario}`)
    }
}