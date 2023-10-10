function urnaEletronica() {

    let opcao
    let contador = 0;

    do {
        opcao = parseInt(prompt('Digite a opção:'));
        
        console.log('Repetição');
        
        contador++;

    } while (opcao !== 0);

    contador--;

    console.log('Contagem:', contador);

}

urnaEletronica();