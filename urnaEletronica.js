function urnaEletronica() {

console.log('Insira seu voto');
    
    let opcao;
    let nome1;
    let nome2;
    let nome3;

    nome1 = prompt('Digite o nome do candidato');
    nome2 = prompt('Digite o nome do candidato');
    nome3 = prompt('Digite o nome do candidato');
    
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let brancos = 0;
    let nulos = 0;

    do {
        opcao = parseInt(prompt('Digite a opção:'));
        console.log('Linha de instrução');
        contador++;
        if (opcao == 1){
            candidato1++;
            console.log('Voto processado');
        }else if (opcao == 2){
            candidato2++;
            console.log('Voto processado');
        }else if (opcao == 3){
            candidato3++;
            console.log('Voto processado');
        }else if (opcao == 5){
            brancos++;
            console.log('Voto processado');
        }else if (opcao == 8){
            nulos++;
            console.log('Voto processado');
        }

    } while (opcao !== 0);

        contador--;

    console.log('Contagem:', contador);

}

urnaEletronica()