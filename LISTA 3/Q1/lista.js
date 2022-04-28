class node{
    constructor(dado){
        this.dado = dado
        this.proximo = null
    }

    /*setDado(dado){
        this.dado = dado
    }
    setProximo(no){
        this.proximo = no
    }*/
}

class lista{
    constructor(){
        this.head = new node()
    }

    add(dado){
        let novo_no = new node(dado)
        
        novo_no.proximo = this.head.proximo
        this.head.proximo = novo_no
    }

    append(dado){

        if(!this.isEmpty()){
            let novo_no = new node(dado)
        
            let aux = this.head.proximo
            while (aux.proximo != null){
                aux = aux.proximo
            }
            aux.proximo = novo_no

        }else throw new Error('lista vazia!')
            
    }

    clear(){
        this.head.proximo = null
    }

    removeFirst(){
        if(!this.isEmpty()){
            
            let aux = this.head.proximo
    
            this.head.proximo = aux.proximo
        }else throw new Error('lista vazia!')
            
    }

    removeLast(){
        if(!this.isEmpty()){
            let aux = this.head.proximo
            const size = this.length()
            const cont = 0
        
            while(aux != null){
                cont++
                aux = aux.proximo

                if(size-1 == cont){
                    aux.proximo = null
                    this.head.proximo = aux
                    //this.head.proximo = null
                }
            }
        }else throw new Error('lista vazia!')     
    }

    isEmpty(){
        
        return this.head.proximo === null

    }

    //isF

    /*removeAt(index){
        
        while()
    }*/

    search(dado){
        let achou = false 
        let aux = this.head.proximo
        while(aux != null){
            
            if (aux.dado === dado){
                achou = true
            }
            aux = aux.proximo
        }
        return achou 
    }

    length(){
        let cont = 0
        let aux = this.head.proximo
        while (aux != null){

            aux = aux.proximo
            cont++
        }
        return cont
    }
}
module.exports = lista;
