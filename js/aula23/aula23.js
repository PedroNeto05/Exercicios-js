let a = 'A' // B
let b = 'B' // C
let c = 'C' // A
let trade

trade = a
a = b
b = c
c = trade

console.log(a, b, c)
