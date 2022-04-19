   class Pilha_dobble{

    constructor(size_a = 4, size_b = 4) {
        this.top_I = 0 ;
        this.ini_II = ((size_a + size_b) - size_b);
        this.top_II = this.ini_II;
        this.maxSize_I = (size_a -1);
        this.maxSize_II = ((size_a + size_b)-1);
        this.dados = [];
    }

    push_a(dado) {
        if(!this.isFull_dobble()){
            
            if(this.top_I <= this.maxSize_I){
                this.dados[this.top_I] = dado;
                this.top_I += 1;
            }else {
                this.dados[this.top_II] = dado;
                this.top_II += 1;
            } 
        } else throw new Error('stack Overflow!');
    }
    push_b(dado) {
        if(!this.isFull_dobble()){
            
            if(this.top_II <= this.maxSize_II){
                this.dados[this.top_II] = dado;
                this.top_II += 1;
            }else {
                this.dados[this.top_I] = dado;
                this.top_I += 1;
            } 
        } else{ 
                throw new Error("stack Overflow!");
            }
        }

    pop_a() {
        if(!this.isEmpty_a()) {
            this.top_I -= 1;
        }
        else throw new Error('pilha já vazia!!!');
    }
    pop_b() {
        if(!this.isEmpty_b()) {
            this.top_II -= 1;
        }
        else throw new Error('pilha já vazia!!!');
    }

    isFull_dobble() {
        return ((this.top_I > this.maxSize_I) & (this.top_II > this.maxSize_II));
         
    }

    isEmpty_a() {
        return this.top_I === 0;
    }
    isEmpty_b() {
        return this.top_II === this.ini_II;
    }

    length_dobble() {
        let length_a, length_b;

        if(!this.isEmpty_a() & !this.isEmpty_b()){
            length_a = this.top_I;
            length_b = (this.top_II - (this.ini_II)); 
        } else if (!this.isEmpty_a() & this.isEmpty_b()){
            length_a = this.top_I

        } else if (!this.isEmpty_b() & this.isEmpty_a()){
            length_b = (this.top_II - (this.ini_II))

        }else throw new Error('pilha é vazia!');
        
        let length = length_a + length_b;
        return length;
    }

}
module.exports = Pilha_dobble;