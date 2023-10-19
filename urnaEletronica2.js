function urnaEletronica(){
    
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let votosBrancos = 0;
    let ganhador = true;
    let nomeGanhador;
    let votosGanhador;
    let encerrarVotacao;
    let senhaMesario;
    let totalVotos;
    let votosNulos;

    console.log('Inicio do programa');

    console.clear();
    console.log('** CONFIGURAÇÃO DA URNA **');

    senhaMesario = parseInt(prompt('Digite a sua senha do mesario:'));
    
    do {
        nomeCandidato1 = prompt('Digite o nome do candidato');
        nomeCandidato2 = prompt('Digite o nome do candidato');
        nomeCandidato3 = prompt('Digite o nome do candidato');

        console.log('** NOMES DOS CANDIDATOS **');
        console.log('Candidato 1: ' + nomeCandidato1);
        console.log('Candidato 2: ' + nomeCandidato2);
        console.log('Candidato 3: ' + nomeCandidato3);

    } while (!confirm('Se os nomes dos candidatos estão corretos, clique "OK" para continuar ou "CANCELAR" para voltar e digitar novamente'));

    do {
        console.clear();
        console.log('Opções de voto');
        console.log('(1) Candidato 1');
        console.log('(2) Candidato 2');
        console.log('(3) Candidato 3');
        console.log('(5) Brancos');
        console.log('(0) Encerrar');
        
        voto = parseInt(prompt('Digite sua opção de voto:'));
        totalVotos++
        if (voto == 1) {
            votosCandidato1++;
        } else if (voto == 2) {
            votosCandidato2++;
        } else if (voto == 3) {
            votosCandidato3++;
        } else if (voto == 5) {
            votosBrancos++;
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
    
    console.clear();
    console.log('** BOLETIM DE URNA **');
    console.log('Total de votos: ' + totalVotos);
    
    if (totalVotos > 0) {
        
        console.log('Total de votos do candidato 1:' + votosCandidato1 + ' votos (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato 1:' + votosCandidato2 + ' votos (' + (votosCandidato2 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato 1:' + votosCandidato3 + ' votos (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato 1:' + votosBrancos + ' votos (' + (votosBrancos / totalVotos * 100).toFixed(2) + '%)');
        console.log('Total de votos do candidato 1:' + votosNulos + ' votos (' + (votosNulos / totalVotos * 100).toFixed(2) + '%)');
    
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = 'Candidato 1';
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = 'Candidato 2';
        votosGanhador = votosCandidato2 = votosBrancos;
    } else if ( votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = 'Candidato 3';
        votosGanhador =votosCandidato3 = votosBrancos;
    } else {
        ganhador = false;
    }
    
    console.log('---------');
    if (ganhador) {
        console.log('O ganhador desta urna foi' + nomeGanhador + ' com ' + votosGanhador + 'votos (' + (votosGanhador / totalVotos * 100).toFixed(2) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre 2 ou mais candidatos');
    }
} else {
    console.clear()
    console.log('Total de votos: ' + totalVotos);
    console.log('Não houve votação nesta urna');
    
    }
}
