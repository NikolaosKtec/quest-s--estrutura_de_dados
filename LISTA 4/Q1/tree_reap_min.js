class Node{
    constructor(data,priority){
            this.data = data
            this.priority = priority    
    }

}




class tree_min{
    constructor(){
        this.tree = []
        this.size = 0
        this.tree[0] = new Node('.', -99999999)
    }

    insert(dado,priorit){
        this.tree[++this.size] = new Node(dado,priorit)
        let pos_filho = this.size
        let pos_pai = Math.trunc(this.size/2)
        let aux

        

        while(this.tree[pos_filho].priority < this.tree[pos_pai].priority){
            
            if(this.tree[pos_filho].priority < (this.tree[pos_pai].priority)){
                aux = this.tree[pos_pai]
                this.tree[pos_pai] = this.tree[pos_filho]
                this.tree[pos_filho] = aux
            }
            pos_filho = pos_pai
            pos_pai = Math.floor(pos_pai/2)
        }
    }

    print(){
        let string = ""
    
        for (const key in this.tree) {
            
            string += this.tree[key].data+' ';
                
        }
     
        return string
    }

    isEmpty(){
        return this.tree[1] == null
    }

    length(){
        return this.size
    }
}

module.exports = tree_min