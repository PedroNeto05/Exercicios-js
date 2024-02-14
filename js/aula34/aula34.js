const button = document.querySelector('#enviar')
const form = document.querySelector('#form')
const content = document.querySelector('#content')
const clientes = []

form.addEventListener('submit', function (event) {
  event.preventDefault()
  let nome = document.querySelector('#nome').value
  let sobrenome = document.querySelector('#sobrenome').value
  let altura = Number(
    String(document.querySelector('#altura').value).replace(',', '.')
  )
  let peso = Number(
    String(document.querySelector('#peso').value).replace(',', '.')
  )
  getInfos(nome, sobrenome, altura, peso)
  console.log(clientes)
})

function getInfos(nome, sobrenome, altura, peso) {
  content.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}<p/>`
  pessoa_obj = {
    nome,
    sobrenome,
    altura,
    peso,
  }
  clientes.push(pessoa_obj)
}
