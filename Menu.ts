import readlinesync = require("readline-sync");
import { colors } from "./src/util/Color";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    
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
