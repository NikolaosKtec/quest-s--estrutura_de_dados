import { beforeEach, test, expect } from '@jest/globals';
import Pilha_fila from './pilha_fila';
let pl_f;

beforeEach(()=>{
    pl_f  = new Pilha_fila() 
})

test('push & length',()=>{

    pl_f.enqueue_a('Q')
    pl_f.enqueue_a('U')
    pl_f.enqueue_b('J')
    pl_f.enqueue_b('O')
    console.log(pl_f.dados)
    expect(pl_f.length()).toBe(4)
})
test('stack a & b',()=>{

    pl_f.enqueue_a('Q')
    pl_f.enqueue_a('U')
    pl_f.enqueue_a('E')
    pl_f.enqueue_a('I')
    pl_f.enqueue_a('J')
    
    console.log(pl_f.dados)

    pl_f.enqueue_b('M')
    pl_f.enqueue_b('A')
    pl_f.enqueue_b('N')
    pl_f.enqueue_b('G')
    pl_f.enqueue_b('A')
    console.log(pl_f.dados)

    expect(()=>{
       
        pl_f.enqueue_a('O')
    }).toThrowError("stack overflow")

    expect(()=>{
        pl_f.enqueue_b('.')
    }).toThrowError("stack overflow")

})
test('underflow a & b',()=>{

    pl_f.enqueue_b('M')
    pl_f.enqueue_b('A')
    pl_f.enqueue_a('N')
    pl_f.enqueue_a('G')
    
    expect(()=>{
        pl_f.dequeue_a('.')
        pl_f.dequeue_a('.')
        pl_f.dequeue_a('.')
    }).toThrowError("stack underflow")

    expect(()=>{
        pl_f.dequeue_b('.')
        pl_f.dequeue_b('.')
        pl_f.dequeue_b('.')
    }).toThrowError("stack underflow")
})
