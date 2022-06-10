//dados nao ordenado ex dados = [2,6,3,6,0,5] ordene em ordem decrescente
//metódo bubbleSort
//let dados = [1,2,3,4,5]
//dados.length()
function bubbleSort(dados){
    
    let escolhido
    let j=0
    //let meio = i.length
    

    for(i=0; i<dados.length; i++){
        escolhido = dados[j+1]
        while(j < dados.length-i-1 && escolhido <= dados[j]){

           // if( escolhido <= dados[j]){
                dados[j+1] = dados[j]
                dados[j] = escolhido
           // }
            j++
            escolhido = dados[j+1]
        }
        j=0
    }
    return dados
}


module.exports = bubbleSort