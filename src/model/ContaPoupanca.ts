import { Conta } from "./Conta"


export class ContaPoupanca extends Conta{


    //Definir os Atributos da classe (Caracteristicas)
    private _dia: number;
    private _mes: number;
    private _ano: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, dia: number, mes: number, ano: number) {
        super(numero, agencia, tipo, titular, saldo)
		this._dia = dia;
		this._mes = mes;
		this._ano = ano;
	}



	public get dia(): number {
		return this._dia;
	}

	public get mes(): number {
		return this._mes;
	}


	public get ano(): number {
		return this._ano;
	}

	public set dia(value: number) {
		this._dia = value;
	}

	public set mes(value: number) {
		this._mes = value;
	}

	public set ano(value: number) {
		this._ano = value;
	}

    public visualisar(){
        super.visualizar();
        console.log(`\nAniversario da Conta. Dia ${this._dia} do ${this._mes} de ${this._ano}`)
    }
}