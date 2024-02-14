const num = Number(prompt('Digite seu numero').replace(',', '.'))
const div = document.querySelector('#content')

const titulo = document.querySelector('#titulo-numero')
titulo.innerHTML += num.toString().replace('.', ',')

div.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)} </p>`
div.innerHTML += `<p>${num} é um inteiro: ${Number.isInteger(num)}  </p>`
div.innerHTML += `<p>${num} é um NaN: ${Number.isNaN(num)}  </p>`
div.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}  </p>`
div.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}  </p>`
div.innerHTML += `<p>Com duas casa decimais: ${num.toFixed(2)}  </p>`
