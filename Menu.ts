import readlinesync = require("readline-sync");
import { colors } from "./src/util/Color";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['conta Corrente', 'Conta Poupanca'];

    const contas: ContaController = new ContaController();

    
    while (true) {

        console.log(colors.bg.black, colors.fg.redstrong,
                    "=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log("                                                     ");
        console.log("              🌟 WELCOME TO BANK GLOBAL 🌟             ");
        console.log("                                                     ");
        console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log("                                                     ");
        console.log("            9️⃣  - Sair 🚪                             ");
        console.log("            8️⃣  - Transferir Dinheiro 🔄              ");
        console.log("            7️⃣  - Depositar 💰                       ");
        console.log("            6️⃣  - Sacar 💸                           ");
        console.log("            5️⃣  - Deletar Conta                      ");
        console.log("            4️⃣  - Atualizar Conta                    ");
        console.log("            3️⃣  - Buscar Conta                       ");
        console.log("            2️⃣  - Explorar Contas                    ");
        console.log("            1️⃣  - Criar Conta                        ");
        console.log("                                                     ");
        console.log("=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=");
        console.log(colors.reset,
                    "                                                     ");

        console.log(colors.bg.black, colors.fg.whitestrong,
                    "Escolha qual opção ira lhe atender melhor: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.bg.black, colors.fg.yellow,
                        "\n💫 Bank Global - 37 Anos Transformando Sonhos em Realidade! 💫");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\n🚀 Vamos criar sua conta! 🚀\n\n");
                    console.log("Digite o numero da Agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da Conta: ");
                    titular = readlinesync.question("");

                    console.log("Digite o Tipo da Conta: ");
                    tipo = readlinesync.keyInSelect(tipoContas, "", { cancel : false}) + 1;

                    console.log("Digite o Saldo da Conta: ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo){
                        case 1:
                    
                            console.log("Digite o Limite da Conta: ");   
                            limite = readlinesync.questionFloat("");
                            contas.cadastrar(
                                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                            )
                        break;
                        case 2:

                            console.log("Digite a Data de aniversario da Conta:  ");
                            aniversario = readlinesync.questionInt("");
                            contas.cadastrar(
                                new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }



                break;
            case 2:
                console.log("\n\n🔍 Explorando todas as contas 🔍\n\n");
                    contas.listarTodas();
                break;
            case 3:
                console.log("\n\n🔎 Procurando sua conta... 🔎\n\n");
                console.log("Digite o numero da Conta: ")
                numero = readlinesync.questionInt("")

                contas.procurarPorNumero(numero);
                break;
            case 4:
                console.log("\n\n✏️ Atualize os dados da sua conta ✏️\n\n");
                break;
            case 5:
                console.log("\n\n🗑️ Deletando uma conta 🗑️\n\n");
                break;
            case 6:
                console.log("\n\n💸 Hora de sacar sua grana 💸\n\n");
                break;
            case 7:
                console.log("\n\n💰 Depositando dinheiro 💰\n\n");
                break;
            case 8:
                console.log("\n\n🔄 Transferindo dinheiro entre contas 🔄\n\n");
                break;
            default:
                console.log("\n⚠️ Opção inválida, tente novamente! ⚠️\n");
                break;
        }
    }

}


export function sobre(): void {
    console.log(colors.bg.black, colors.fg.whitestrong,
                "\n\n######### Projeto desenvolvido por: Samuel Monteiro #########");
    console.log("######### Generation Brasil - samuel.monteiro@genstudents.org #########");
    console.log("######### github.com/Monte1r0 #########");
}

main();
