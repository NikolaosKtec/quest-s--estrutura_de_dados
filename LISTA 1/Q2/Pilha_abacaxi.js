const Pilha = require("../Q3/Pilha")
class Pilha_abacaxi extends Pilha{
   

    space(){
        return  this.maxSize - this.length;
    }

    
    print(index){
        if(!this.isEmpty() & index <= this.length() ){
            return this.dados[index-1];
        }else throw new Error ('pilha é vazia! ou seu index é invalido!')
    }

    inverter(string) {

        let rString = '';
        let i  = (string.length -1); 

        if(!this.isEmpty()){
            let space = this.space();
            while( space != 0){
            this.pop();
            space--;
        }}

        if((string.length <= this.maxSize)){
            
            while(i > -1) {  
                 rString +=  string[i];
                 i--
            }

             for (let item of rString) {
                 this.push(item)
             }
         }else throw new Error ("String é maior que a lista!");
        
        }

}

module.exports = Pilha_abacaxi;