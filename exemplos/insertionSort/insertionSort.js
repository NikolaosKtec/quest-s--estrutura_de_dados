//[4,3,7,5,8]



function insertionSort(dados){
    let j,escolhido
    for(let i=1; i<dados.length; i++){

        escolhido = dados[i]
        j = i-1
        while(j >= 0 && escolhido< dados[j]){
            dados[j+1] = dados[j]
            j -=1
        }
         dados[j+1]= escolhido
    }

    return dados
}
/*PARA (i = 1; i < TAMANHO_VETOR; i++){
    escolhido = vetor[i];
    j = i-1;
    ENQUANTO (j >= 0 && vetor[j] > escolhido){
    vetor[j+1] = vetor[j];
    j = j-1;
    }
    vetor[j+1] = escolhido;
    }*/
module.exports = insertionSort