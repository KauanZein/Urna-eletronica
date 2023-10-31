function dataHoraAtual() {
    
    const dataAtual = new Date();
    return dataAtual;
}

function verificarIntegridadeUrna() {
    
    fetch('./urnaEletronica2.js')
        .then(conteudo => conteudo.text())
        .then(conteudo => CryptoJS.SHA256(conteudo).toString())
        .then(hashUrnaAtual => {
            fetch('./hashVerificado')
                .then(conteudo => conteudo.text())
                .then(hashVerificado => {
                    if (hashUrnaAtual === hashVerificado) {
                        console.log('Hash verificado, urna íntegra.')
                        
                    } else {
                        console.log('HASHES DIFERENTES, URNA ADULTERADA!');
                        console.log('hash esperado: ${hashVerificado}');
                        console.log('hash da urna: ${hashUrnaAtual}');
                    }
                })

        });

}

function urnaEletronica() {
    
    let votosCandidato1 = 0, votosCandidato2 = 0, votosCandidato3 = 0, votosBrancos = 0, votosNulos = 0, totalVotos = 0, voto, ganhador = true, nomeGanhador = "", votosGanhador, nomeCandidato1, nomeCandidato2, nomeCandidato3, encerrarVotacao, senhaMesario, confirmarVoto, opcaoNome, primeiraConfiguração = true, dataHoraInicial, dataHoraFinal;

    
    console.log('Inicio do programa ');
    dataHoraInicial = dataHoraAtual();

    console.log('** CONFIGURAÇÃO DA URNA **');

    senhaMesario = parseInt(prompt('Digite a sua senha do mesario:'));
    
    do {
        if (primeiraConfiguração) {
            nomeCandidato1 = prompt('Digite o nome do candidato 1:');
            nomeCandidato2 = prompt('Digite o nome do candidato 2:');
            nomeCandidato3 = prompt('Digite o nome do candidato 3:');
            primeiraConfiguração = false;
        } else {
            opcaoNome = parseInt(prompt(
                'Qual dos nomes deseja alternar?\n\n' +
                '(1) - ' + nomeCandidato1 + '\n' +
                '(2) - ' + nomeCandidato2 + '\n' +
                '(3) - ' + nomeCandidato3 + '\n' 
            ));

            if (opcaoNome === 1)
                nomeCandidato1 = prompt('Digite o nome do candidato 1:');
            else if (opcaoNome === 2)
                nomeCandidato2 = prompt('Digite o nome do candidato 2:');
            else if (opcaoNome === 3)
                nomeCandidato3 = prompt('Digite o nome do candidato 3:');
            else
                console.log('Opção inválida!');
        }
        
        console.clear();        
        console.log('** NOMES DOS CANDIDATOS **');
        console.log('Candidato 1: ' + nomeCandidato1);
        console.log('Candidato 2: ' + nomeCandidato2);
        console.log('Candidato 3: ' + nomeCandidato3);

    } while (!confirm('Se os nomes dos candidatos estão corretos, clique "OK" para continuar ou "CANCELAR" para voltar e digitar novamente'));

    do {
        
        console.clear();
        console.log('Opções de voto');
        console.log('(1) Candidato 1: ' + nomeCandidato1);
        console.log('(2) Candidato 2: ' + nomeCandidato2);
        console.log('(3) Candidato 3: ' + nomeCandidato3);
        console.log('(5) Voto em branco');
        
        voto = parseInt(prompt('digite sua opção de voto: \n'));
        
        totalVotos++;
        
        if (voto === 1) {
            confirmarVoto = confirm(' O seu voto realmente é em ' + nomeCandidato1);
            if (confirmarVoto) {
                votosCandidato1++;
                alert(' Voto confirmado com sucesso para ' + nomeCandidato1);
            } else {
                totalVotos--;
            }
            
        } else if (voto === 2) {
            confirmarVoto = confirm(' O seu voto realmente é em ' + nomeCandidato2);
            if (confirmarVoto) {
                votosCandidato2++;
                alert(' Voto confirmado com sucesso para ' + nomeCandidato2);
            } else {
                totalVotos--;
            }

        } else if (voto === 3) {
            confirmarVoto = confirm(' O seu voto realmente é em ' + nomeCandidato3);
            if (confirmarVoto) {
                votosCandidato3++;
                alert(' Voto confirmado com sucesso para ' + nomeCandidato3);
            } else {
                totalVotos--;
            }

        } else if (voto === 5) {
            confirmarVoto = confirm(' O seu voto realmente é em branco ');
            if (confirmarVoto) {
                votosBrancos++; 
                alert(' Voto confirmado com sucesso para');
            } else {
                totalVotos--;
            }
                
        } else if (voto === senhaMesario) {
            
        
           encerrarVotacao = prompt('Deseja REALMENTE encerrar a votação? Digite [S] para Sim ou [N] para Não').toUpperCase();

           if (encerrarVotacao !== 'S' && encerrarVotacao !== 'N') {
                alert('Opção inválida');
            }
        
            totalVotos--;
        
        } else {
            
         if (confirm('ATENÇÃO: o seu voto será anulado. Deseja prosseguir?')) {
            votosNulos++;
        } else {
            totalVotos--;
        }
    }
    
    } while (encerrarVotacao !== 'S');

    dataHoraFinal = dataHoraAtual();
    
    console.clear();
    console.log('** BOLETIM DE URNA **');
    console.log('Total de votos: ' + totalVotos);
    
    if (totalVotos > 0) {
        
        console.log('Total de votos do candidato(a) ' + nomeCandidato1 + ': ' + votosCandidato1 + ' votos (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato(a) ' + nomeCandidato2 + ': ' + votosCandidato2 + ' votos (' + (votosCandidato2 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato(a) ' + nomeCandidato3 + ': ' + votosCandidato3 + ' votos (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos em branco: ' + votosBrancos + ' votos (' + (votosBrancos / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos nulos: ' + votosNulos + ' votos (' + (votosNulos / totalVotos * 100).toFixed(2) + '%)');
    
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = nomeCandidato1;
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = nomeCandidato2;
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if ( votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = nomeCandidato3;
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }
    
    console.log('-------');
    if (ganhador) {
        console.log('O ganhador desta urna foi: ' + nomeGanhador + ' com ' + votosGanhador + ' votos (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos');
    }
} else {
    console.log('Não houve votação nesta urna');
    
}

console.log(`Data e hora do início da votação: ${dataHoraInicial}`);
console.log(`Data e hora do fim da votação: ${dataHoraFinal}`);

verificarIntegridadeUrna();

console.log('Fim do programa ');

}
