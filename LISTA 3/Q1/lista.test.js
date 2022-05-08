//import {beforeEach, expect, test} from "@jest/globals"
const lista = require('./lista')


beforeEach(()=>{
    l = new lista()
})

test('length?',()=>{
    l.push('h')
    l.push('i')
    l.push('i')
    l.push('i')
    expect(l.length()).toBe(4)
})
test('push?',()=>{
    l.push('A')
    l.push('B')
    l.push('C')
    //console.log(l.dado)
    expect(l.length()).toBe(3)
})
test('top',()=>{
    l.push('A')
    l.push('B')
    l.push('C')
    console.log(l.dado)
    l.top()
    l.top()

    expect(l.top()).toBe('C')
    expect(l.length()).toBe(1)
})


   

/*test('append?',()=>{
    l.add('h')
    l.add('i')
    l.append('A')
    l.append('A')
    l.append('C')
    
    expect(l.length()).toBe(5)
})

test('remove fst?',()=>{
    l.add('h')
    l.add('i')
    l.append('A')
    l.append('A')
    l.append('C')

    l.removeFirst()
    l.removeFirst()
    expect(l.length()).toBe(3)
   
})*/

test('e vazio?',()=>{
    l.push('h')
    l.push('i')
console.log(l.length())
    l.top()
    l.top()
    
    expect(l.length()).toBe(-1)
    expect(()=>{
        l.top()
    }).toThrowError('lista vazia!')
})


test('search?',()=>{
    l.push('h')
    l.push('e')
    l.push('l')
    l.push('l')
    l.push('o')
    l.push('!')

    expect(l.search('!')).toBe(true)
    expect(l.search('o')).toBe(true)
    expect(l.search('h')).toBe(true)
    expect(l.search('i')).toBe(false)
})