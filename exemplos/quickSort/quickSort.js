

function quickSort(dados){
   
    let pivo_pos
    let superior = dados.length-1
    let inferior = 0
    let i,j
    if(inferior < superior){
        let pivo = dados[superior] //pivo escolhido foi 'superior', mas podia se qualquer...
        
        i = inferior -1

        while(j= inferior; j <= superior) {
            if (dados[j] <= pivo) {
                i++
                j++
                let aux = dados[j+1] 
                dados[j+1] = dados[i]
                aux = dados[i]
            }

        }
    }
    let aux = dados[j+1] 
    dados[j+1] = dados[superior]
    dados[superior] = aux
    pivo_pos = i+1;

    return dados
}

/*function troca( array1, array2 ){

    let aux = array1
    array1 = array2
    array2 = aux

    return [array1,array2]
}*/

module.exports=quickSort




/*
int pivo_pos;
if (inferior < superior){
    int pivo = vetor[superior];
    int i, j;
    i = inferior - 1;
    
    for (j = inferior; j <= superior- 1; j++) {
        if (vetor[j] <= pivo) {
            i++;
            troca(vetor[j], vetor[i])
        }
    }
    troca(vetor[superior], vetor[i+1]);
    pivo_pos = i+1;
    (...)*/