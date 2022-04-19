const { beforeEach, expect } = require("@jest/globals");
const { string } = require("yargs");
const Pilha_abacaxi = require("./Pilha_abacaxi");
let abacaxiP;


beforeEach(()=>{
   abacaxiP = new Pilha_abacaxi(10);
})



test('push + stack', ()=>{
    let A = 'a'
    let b = 'b'
    let c = 'c'
    
    abacaxiP.push(A)
    abacaxiP.push(A)
    abacaxiP.push(A)
    abacaxiP.push(b)
    abacaxiP.push(b)
    abacaxiP.push(b)
    abacaxiP.push(c)
    abacaxiP.push(c)
    abacaxiP.push(c)
    

    expect(()=>{
        
        (abacaxiP.push(c)).toThrowError('stack Overflow!')})
    
})



test('inverter String',()=>{
    abacaxiP.inverter('ABACAXI');
    

    console.log(abacaxiP.dados);
    expect(abacaxiP.length()).toBe(7);
    expect(abacaxiP.print(2)).toBe('X');
    expect(abacaxiP.print(3)).toBe('A');
    expect(abacaxiP.print(4)).toBe('C');
})

test('print',()=>{

    abacaxiP.push('A');
    abacaxiP.push('B');
    abacaxiP.push('C');
    abacaxiP.push('A');

    expect(abacaxiP.print(1)).toBe('A')
    expect(abacaxiP.print(2)).toBe('B')
    expect(abacaxiP.print(3)).toBe('C')
    expect(abacaxiP.print(4)).toBe('A')
})




