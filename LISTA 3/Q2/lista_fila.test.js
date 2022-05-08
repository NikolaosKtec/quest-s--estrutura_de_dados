const lista_Fila = require("./Lista_fila.");
let lf
beforeEach(()=>{
    lf = new lista_Fila()
})



test('enqueue',()=>{
    lf.enqueue('H')
    lf.enqueue('o')
    lf.enqueue('o')
    
    expect(lf.length()).toBe(3)
})
test('dequeue',()=>{
    lf.enqueue('H')
    lf.enqueue('o')
    lf.enqueue('o')

    lf.dequeue()
    lf.dequeue()

    expect(lf.length()).toBe(1)
})
test('front',()=>{
    lf.enqueue('H')
    lf.enqueue('o')
    lf.enqueue('o')

    expect(lf.front()).toBe('H')
})
//test('')
//test('')