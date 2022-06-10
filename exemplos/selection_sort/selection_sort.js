
class Selection_sort{
    constructor(){
        this.dados

    }




selection_sort(dados){
    this.dados = dados
    let indiceMenor
    let i,j

    for(i=0; i<this.dados.length; i++){

        indiceMenor = i

        for(j=i; j<this.dados.length; j++){
            if(this.dados[indiceMenor] > this.dados[j]){
                indiceMenor = j
            }
        }

        if( i != indiceMenor){
            this.troca(i,indiceMenor)
        }

    }

    return this.dados
}

    troca(d1, d2){
        let aux
        aux = this.dados[d1]
        this.dados[d1] = this.dados[d2]
        this.dados[d2] = aux
    }
}


/*PARA (i = 0; i < TAMANHO_VETOR; i++){
    indiceMenor= i;
    PARA (j = i ; j < TAMANHO_VETOR; j++){
    SE (vetor[indiceMenor] > vetor[j]) {
    indiceMenor = j;
    }
    }
    SE (i != indiceMenor){
    troca(vetor[i], vetor[indiceMenor];
    }
    }*/

module.exports = Selection_sort