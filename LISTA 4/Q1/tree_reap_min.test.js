const tree_min = require("./tree_reap_min")
let tr_min

beforeEach(()=>{
    tr_min  = new tree_min('dado' , -9999999) 
    tr_min.insert('F',1)
    tr_min.insert('L',10)
    tr_min.insert('M',7)
    tr_min.insert('A',8)
})

test('insert',()=>{
 
 expect(tr_min.length()).toBe(4)
})
test('print',()=>{
//'F L M < A' = 'F A M L'
    console.log(tr_min.print())
    expect(tr_min.print()).toBe('. F A M L ')
})
//test('',){}
//test('',){}
//test('',){}
//test('',){}