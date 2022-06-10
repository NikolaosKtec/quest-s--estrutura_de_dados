const merge_sort = require("./merge_sort")
//import merge_sort from "./merge_sort"

//beforeEach(()=>{
    //ms = merge_sort()

//})
test('default',()=>{

    
    //console.log(merge_sort([4,7,8,5,3,2]))
expect(merge_sort([4,7,8,5,3,2]))
.toStrictEqual([2,3,4,5,7,8])

})

test('melhor caso',()=>{

    expect(merge_sort([0,1,2,3,4,5]))
    .toStrictEqual([0,1,2,3,4,5])

})

test('pior caso',()=>{

    expect(merge_sort([12,10,13,15,11,7,5,6,2]))
    .toStrictEqual([2,5,6,7,10,11,12,13,15])

})