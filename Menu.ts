import readlinesync = require("readline-sync");
import { colors } from "./src/util/Color";
import { Conta } from "./src/model/ClasseConta";

export function main() {

    let opcao: number;

    //Novas Instâncias da classe Conta (Objetos) //

    const c1: Conta = new Conta(1, 1234, 1, 'Samuel', 800000.00);
    const c2: Conta = new Conta(2, 1234, 2, 'Joaozinho', 1500000.00);

    //Vizualizandoos dados das contas//
    c1.visualizar();
    c2.visualizar();
    
    //Vizualizando o Saldo da conta 01//
    console.log(`O Saldo da conta 01 é: ${c1.saldo}`);
    //Atualizando o Saldo da conta 02//
    c2.saldo = 9000000.00;
    //Vizualizando o saldo da conta 02//
    console.log(`O Saldo da conta 02 é: ${c2.saldo}`);

    // Saque na Conta 01 e 02
    console.log(`sacar 100 reais da conta c2: ${c1.sacar(20)}`);
    c1.visualizar();
    console.log(`sacar muitos reais da conta c1: ${c2.sacar(20000000000)}`);
    c2.visualizar();
    
    // Depositar na conta 01 e 02
    console.log(`Depositar 100 reais da conta c2: ${c1.depositar(20)}`);
    c1.visualizar();
    console.log(`Depositar muitos reais da conta c1: ${c2.depositar(20000000000)}`);
    c2.visualizar();

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
                break;
            case 2:
                console.log("\n\n🔍 Explorando todas as contas 🔍\n\n");
                break;
            case 3:
                console.log("\n\n🔎 Procurando sua conta... 🔎\n\n");
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
