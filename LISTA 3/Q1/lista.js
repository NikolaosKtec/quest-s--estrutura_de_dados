class Node{
    constructor(dado){
        this.dado = dado
        this.proximo = null
    }

}

class lista_Pilha{
    constructor(){
        this.head = new Node()
        
    }

    push(dado){
        if(!this.isEmpty()){
            
            this.append(dado)
        }else{
            this.add(dado)
        }
        
    }

    top(){
    let dado = 0
        if(!this.isEmpty()){
            let aux = this.head.proximo
            let cont =0 
            let size = this.length()
            while(aux != null){
                ++cont
                
                if( (size) == cont ){
                    dado = aux.dado
                    this.head.proximo = aux
                }
                aux = aux.proximo
            }
        }
        return dado
    }

    pop(){
        if(!this.isEmpty()){
            let aux = this.head.proximo
            let cont =0 
            let size = this.length()
            while(aux != null){
                ++cont
                
                if(size == cont ){
                    
                    this.head.proximo = aux
                }
                aux = aux.proximo
            }
        } 
    }

    add(dado){
        let novo_no = new Node(dado)
        
        novo_no.proximo = this.head.proximo
        this.head.proximo = novo_no
    }

    append(dado){

        if(!this.isEmpty()){
            let novo_no = new Node(dado)
        
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
            ++cont
            aux = aux.proximo
        }
        return cont
    }
}
module.exports = lista_Pilha;
