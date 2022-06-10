//import {bubbleSort} from "./bubbleSort"
const insertionSort = require('./insertionSort')

let inSort
beforeEach(()=>{
     inSort =  insertionSort
   
})
test('default',()=>{
    let dados = [5,3,7,9,10]
    let d = inSort(dados)
    console.log(d)
    expect(inSort(dados)).toStrictEqual([3,5,7,9,10])
})



test('melhor caso',()=>{
    let dados = [0,1,5,8,10]
    let d = inSort(dados)
    console.log(d)
    expect(inSort(dados)).toStrictEqual([0,1,5,8,10])

})
test('pior caso',()=>{
    let dados = [12,7,6,3,0]
    let d = inSort(dados)
    console.log(d)
    expect(inSort(dados)).toStrictEqual([0,3,6,7,12])

})