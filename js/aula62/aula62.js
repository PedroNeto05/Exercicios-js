function fizz(num) {
  if (Number.isNaN(num) || num === 0) return num
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
  if (num % 3 === 0) return 'Fizz'
  if (num % 5 === 0) return 'Buzz'
  return num
}

for (let i = 0; i <= 100; i++) {
  console.log(`${i} ${fizz(i)}`)
}
