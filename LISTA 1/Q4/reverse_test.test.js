const { beforeEach, test, expect } = require("@jest/globals")
const Pilha = require("./Pilha")

beforeEach(()=>{
    p = new Pilha();
})

test('reverse',()=>{
    p.push('A')
    p.push('A')
    p.push('A')
    p.push('A')
    p.push('A')
    p.push('B')
    p.push('B')
    p.push('B')
    p.push('B')
    p.push('B')
    
    p.reverse();
    //console.log(p.dados)
    expect(p.print(0)).toBe('B')
    expect(p.print(1)).toBe('B')
    expect(p.print(2)).toBe('B')
    expect(p.print(3)).toBe('B')
    expect(p.print(4)).toBe('B')

})