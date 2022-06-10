//import { quickSort } from "./quickSort";
const quickSort = require('./quickSort')


//beforeEach(()=>{

    //quickSort = quickS.quickSort
//})

test('defaylt',()=>{
    
    let d = quickSort([3,2,5,6,1,4])
    console.log(d)

    expect(d).toBe([2,1,5,6,3,4])
})
/*
test('',()=>{

})
test('',()=>{

})*/