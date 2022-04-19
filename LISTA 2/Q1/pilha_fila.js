class Pilha_fila {
    constructor(size = 10) {
        this.top = 0;
        this.dados = [];
        this.maxSize = size;
        this.ini_I = 0;
        this.end_I = 0;
        this.ini_II = (size/2);
        this.end_II = (size/2);
        this.lim_a = (this.maxSize/2)
        this.lim_b = (this.maxSize)
    }
    enqueue_a(dado) {
        if ((!this.isFull_a()) & (this.end_I != this.lim_a)) {
            this.dados[this.end_I] = dado
            this.end_I++

        }else if((!this.isFull_a() )& (this.end_I === this.lim_a)){
            this.end_I = 0;
            this.dados[this.end_I] = dado
            this.end_I++
            
        }
         else {
            throw new Error("stack overflow")
        }
    }
    enqueue_b(dado) {
        if ((!this.isFull_b())&(this.end_II != this.lim_b)) {
            this.dados[this.end_II] = dado
            this.end_II++
        }else if((!this.isFull_b()) &( this.end_II === this.lim_b)){
            this.end_II = this.maxSize/2;
            this.dados[this.end_II] = dado
            this.end_II++
        }
        else {
            throw new Error("stack overflow")
        }
    }

    dequeue_a() {
        if (!this.isEmpty_a()& this.ini_I === this.lim_a ) {
            this.ini_I= 0;
        }else if(!this.isEmpty_a()& this.ini_I != this.lim_a)
            this.ini_I+=1
        else {
            throw new Error("stack underflow")
        }
    }
    dequeue_b() {
        if (!this.isEmpty_b()& this.ini_II === this.lim_b ) {
            this.ini_II= (this.maxSize/2);
        }else if(!this.isEmpty_b()& this.ini_II != this.lim_b)
            this.ini_II+=1
        else {
            throw new Error("stack underflow")
        }
    }

    isFull_a() {
        if(this.end_I - this.ini_I === this.lim_a)
            return true
        else if ((this.end_I - this.ini_I) === -1)
            return true
        else return false
    }
    isFull_b() {
        if(this.end_II - this.ini_II === this.lim_a)
        return true
    else if ((this.end_II - this.ini_II) === -1)
        return true
    else return false
    }

    isEmpty_a() {
        return  this.ini_I === this.end_I
    }
    isEmpty_b() {
        return this.ini_II === this.end_II
    }

    length() {
        let length_a,length_b;
        let size_a = this.maxSize/2;
        if(this.isEmpty_a() & this.isEmpty_b())
            return 0;
        else{
        if(this.isEmpty_a() & !this.isEmpty_b()){
            
            if(this.end_II > this.ini_II)
                length_b = this.end_II - this.ini_II
            
            else length_b = ((this.maxSize-this.ini_II) +(this.end_II - size_d))
        }
        else if (!this.isEmpty_a() & this.isEmpty_b()){
            
            if(this.end_I > this.ini_I)
                
                length_a = this.end_I - this.ini_I
            
            else length_a = ((size_d- this.ini_I) +this.end_I)
        }
            else if(!this.isEmpty_a() & !this.isEmpty_b()){
            
            if(this.end_I > this.ini_I & this.end_II > this.ini_II){
                
                length_a = this.end_I - this.ini_I
                length_b = this.end_II - this.ini_II
                
            }else if(this.end_I > this.ini_I & this.end_II < this.ini_II){
                
                length_a = this.end_I - this.ini_I
                length_b = ((this.maxSize-this.ini_II) +(this.end_II - size_d))

            }else if(this.end_I < this.ini_I & this.end_II > this.ini_II){

                length_a = ((size_d- this.ini_I) +this.end_I)
                length_b = this.end_II - this.ini_II

            }else{
                length_b = ((this.maxSize-this.ini_II) +(this.end_II - size_d))
                length_a = ((size_d- this.ini_I) +this.end_I)
            }}
            return length_a + length_b
            }
        }
          
    }
    module.exports = Pilha_fila;








