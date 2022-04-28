class Fila_Pilha{

    constructor(size = 10){
        this.ini = 0
        this.end = 0
        this.dados = []
        this.max_size = size
        this.top_I = 0
        this.top_II = (size/2)
        this.lim = (this.max_size/2)
    }

    push_a(dado) {
        if(!this.isFull() & this.end != this.lim){
         
            this.dados[this.top_I] = dado
                this.top_I += 1      
                this.end += 1
            } else throw new Error('stack Overflow!')
     }
    

     push_b(dado) {
         if(!this.isFull()){
            if(this.end >= this.lim){
                if(this.end === this.max_size)
                
                    this.end = 0
                else    this.end += 1

                this.dados[this.top_II] = dado;
                    this.top_II += 1;      
                    
                } else throw new Error('A não foi preenchido!')
        }else throw new Error('stack Overflow!')
   
     }

    top(){
        
        if(!this.isEmpty()){
            if(this.ini != this.max_size){
                this.ini += 1
            } else this.ini = 0
            
            if(end)
                return this.dados[this.top_I-1]
            //}else if(this.end >= this.lim){

                this.end -= 1
                return this.dados[this.top_II-1]
            }
        }else throw new Error('stack Underflow!')
              
    }

    pop() {
        if(!this.isEmpty()){
            if(this.end < this.lim & this.ini != this.max_size) {
                this.top_I -= 1
                this.ini+= 1

            }else if(this.end < this.lim & this.ini == this.max_size){
                this.top_I -= 1
                this.ini = 0

            }else if(this.end >= this.lim & this.ini != this.max_size){
                this.top_II -= 1
                this.ini += 1

            }else if(this.end >= this.lim & this.ini == this.max_size){
                this.top_II -= 1
                this.ini = 0

            }else throw new Error('Fila já vazia!!!')
        }else throw new Error('stack Underflow!')
            
    }
       
        isFull() {
            return ((this.end - this.ini) === -1)      
        }

        isEmpty() {
            return this.end === this.ini
        }
       
        length(){
            if(!this.isEmpty()){
                if(this.ini < this.end){
                    return (this.ini - this.end)
                }else
                    return ((this.max_size - this.ini)+ this.end)
            }else return 0
                
        }

}