const { test, beforeEach, expect } = require('@jest/globals');
const Pilha_dobble = require('./Pilha_dobble');
let pD;
beforeEach(()=>{
   pD = new Pilha_dobble(3,5)
})

test('push',()=>{

    pD.push_a('N');
    pD.push_a('I');
    pD.push_b('K');
    pD.push_b('O');
    console.log(pD.dados);
    console.log(pD.dados[2],pD.dados[3]);
    console.log(pD.dados[4],pD.dados[5]);

    expect(pD.length_dobble()).toBe(4)
})

test('pop',()=>{
    pD.push_a('N');
    pD.push_a('I');
    pD.push_b('K');
    pD.push_b('O');
    pD.pop_a();
    pD.pop_b();
    console.log(pD.dados);
    console.log(pD.dados[2],pD.dados[3]);
    console.log(pD.dados[4],pD.dados[5]);
    expect(pD.length_dobble()).toBe(2);

})

test('is COMPLETE?',()=>{
    pD.push_a('N');
    pD.push_a('I');
    pD.push_a('K');
    pD.push_a('L');
    pD.push_a('A');
    pD.push_a('O');
    pD.push_a('S');
    pD.push_a('I');
   
    expect(pD.length_dobble()).toBe(8);
})

test('is full?',()=>{
     
    pD.push_a('N');
    pD.push_a('I');
    pD.push_a('K');
    pD.push_a('L');
    pD.push_a('A');
    pD.push_a('O');
    pD.push_a('S');
    pD.push_a('I');

    console.log(pD.dados);
    console.log(pD.dados[2],pD.dados[3]);
    console.log(pD.dados[7],pD.dados[8]);

    expect(()=>{
        
        pD.push_b('G');
        
    }).toThrowError("stack Overflow!");


})



