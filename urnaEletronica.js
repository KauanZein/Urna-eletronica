function urnaEletronica() {

    console.log('Votação')
    
    console.log('Insira seu voto');
    
    let opcao = 0;
    let contador = 0;
    let nomeC1;
    let nomeC2;
    let nomeC3;

    nomeC1 = prompt('Digite o nome do candidato:');
    console.log(nomeC1);
    nomeC2 = prompt('Digite o nome do candidato:');
    console.log(nomeC2);
    nomeC3 = prompt('Digite o nome do candidato:');
    console.log(nomeC3);
    
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let brancos = 0;
    let nulos = 0;
    let encerrar;
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

        contador = contador - 1;
        console.log('Contagem:', contador);
        console.log('total de votos do', nomeC1, candidato1);
        console.log('total de votos do', nomeC2, candidato2);
        console.log('total de votos do', nomeC3, candidato3);
        console.log('total de votos brancos', brancos);
        console.log('total de votos nulos', nulos);

        const totalvotos = (candidato1 + candidato2 + candidato3 + brancos + nulos);
        console.log('Total de votos', totalvotos);

        console.log('percentual de votos candidato 1:', ((candidato1 / totalvotos * 100).toFixed(2)) + '%');
        console.log('percentual de votos candidato 2:', ((candidato2 / totalvotos * 100).toFixed(2)) + '%');
        console.log('percentual de votos candidato 3:', ((candidato3 / totalvotos * 100).toFixed(2)) + '%');
        console.log('percentual de votos em branco:', ((brancos / totalvotos * 100).toFixed(2)) + '%');
        console.log('percentual de votos nulos:', ((nulos / totalvotos * 100).toFixed(2)) + '%');
        
        
}

urnaEletronica()