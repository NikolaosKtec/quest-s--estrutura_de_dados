const selection_sort = require('./selection_sort')
let Selection_sort = selection_sort
beforeEach(()=>{

    Selection_sort = new Selection_sort([])

})

test('default',()=>{

    
    //console.log(p)
    expect(Selection_sort.selection_sort([5,4,6,7,3,9])).toStrictEqual([3,4,5,6,7,9])
})


test('melhor caso',()=>{

    expect(Selection_sort.selection_sort([3,4,6,7,8,12])).toStrictEqual([3,4,6,7,8,12])

})



test('pior caso',()=>{

    expect(Selection_sort.selection_sort([15,8,12,7,6,1])).toStrictEqual([1,6,7,8,12,15])
    
})