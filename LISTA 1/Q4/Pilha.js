class Pilha {
    constructor(size = 10) {
        this.topo = 0
        this.dados = []
        this.maxSize = size
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo] = dado
            this.topo++
        } else {
            throw new Error("stack overflow")
        }
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--
        } else {
            throw new Error("stack underflow")
        }
    }

    top() {
        if (!this.isEmpty()) {
            return this.dados[this.topo - 1]
        }
    }

    isFull() {
        return this.length() === this.maxSize
    }

    isEmpty() {
        return this.length() === 0
    }

    length() {
        return this.topo;
    }

    print(index){
        if(index > -1 & index <this.maxSize)
            return this.dados[index]
    }

    reverse() {
        let aux_p = new Pilha();
        
        if(!this.isEmpty()){
            if(this.isFull()){
                let i = (this.maxSize -1);
                //let x;
                while( i > -1){
                    //x = 10 - i;
                    aux_p.push(this.dados[i]);
                    this.pop();
                    i--
                }
                
                i = 0;
                while(i < 10){
                    
                    this.push(aux_p.dados[i]);                    
                    i++
                }
            }
        }
        
    }
}

module.exports = Pilha;