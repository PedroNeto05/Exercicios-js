let nome = prompt('Qual seu nome')

document.body.innerHTML += `Seu nome é ${nome} <br />`
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]} <br />`
document.body.innerHTML += `Qual o primeiro índice da letra O no seu nome: ${nome.indexOf(
  'o'
)} <br />`
document.body.innerHTML += `Qual o ultimo índice da letra O no seu nome: ${nome.indexOf(
  'o',
  nome.length - 1
)} <br />`
document.body.innerHTML += `As 3 ultimas letras do seu nome são: ${nome.slice(
  nome.length,
  -3
)} <br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(
  ' '
)}<br />`
document.body.innerHTML += `Seu nome em maiúsculo é: ${nome.toUpperCase()} <br />`
document.body.innerHTML += `Seu nome em minusculo é: ${nome.toLowerCase()} <br />`
