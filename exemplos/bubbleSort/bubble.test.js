//import {bubbleSort} from "./bubbleSort"
const bubbleSort = require('./bubbleSort')

let bbSort
beforeEach(()=>{
     bbSort =  bubbleSort
   
})

test('melhor caso',()=>{
    let dados = [0,1,5,8,10,20,30,90,120,500]
    //let d = bbSort(dados)
    //console.log(d)
    expect(bbSort(dados)).toStrictEqual([0,1,5,8,10,20,30,90,120,500])

})
test('pior caso',()=>{
    let dados = [600,200,30,14,12,7,6,5,3,1,0]
    let d = bbSort(dados)
    console.log(d)
    expect(d).toStrictEqual([0,1,3,5,6,7,12,14,30,200,600])

})
//é assim mesmo
test('pior c2',()=>{
    let dados = [30,12,7,200,600,3,1,0,6,5,14]
    let d = bbSort(dados)
    console.log(d)
    expect(d).toStrictEqual([0,1,3,5,6,7,12,14,30,200,600])

})