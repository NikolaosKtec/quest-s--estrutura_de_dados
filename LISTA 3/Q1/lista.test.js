//import {beforeEach, expect, test} from "@jest/globals"
const lista = require('./lista')


beforeEach(()=>{
    l = new lista()
})

test('add?',()=>{
    l.add('A')
    l.add('B')
    l.add('C')
    //console.log(l.dado)
    expect(l.length()).toBe(3)
})
test('append?',()=>{
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
   
})

test('e vazio?',()=>{
    l.add('h')
    l.add('i')

    l.removeFirst()
    l.removeFirst()
    expect(()=>{
        l.removeFirst()
    }).toThrowError('lista vazia!')
})

test('length?',()=>{
    l.add('h')
    l.add('i')
    l.add('i')
    l.add('i')
    expect(l.length()).toBe(4)
})

test('search?',()=>{
    l.add('h')
    l.add('e')
    l.add('l')
    l.add('l')
    l.add('o')
    l.add('!')

    expect(l.search('!')).toBe(true)
    expect(l.search('o')).toBe(true)
    expect(l.search('h')).toBe(true)
    expect(l.search('i')).toBe(false)
})