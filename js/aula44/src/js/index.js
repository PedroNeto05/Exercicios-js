const form = document.querySelector('form')
const button = document.querySelector('#submit')
const result = document.querySelector('.result')
const result_imc = [
  'Abaixo do peso',
  'Peso Normal',
  'Sobrepeso',
  'Obesidade grau 1',
  'Obesidade grau 2',
  'Obesidade grau 3',
]

form.addEventListener('submit', e => {
  e.preventDefault()
})

button.addEventListener('click', () => {
  let { weight, height } = getInfos()
  setResult(weight, height)
})

function setResult(weight, height) {
  result.innerHTML = ''
  let p = createP()
  result.appendChild(p)
  valid = validate(weight, height)
  if (valid !== true) {
    p.innerHTML = valid
    p.classList.add('error')
    return
  }

  if (p.classList.contains('error')) {
    p.classList.remove('error')
  }

  let imc = calcImc(weight, height)

  p.innerHTML = imc
}

function getInfos() {
  let weight = Number(
    String(document.querySelector('#weight').value).replace(',', '.')
  )
  let height = Number(
    String(document.querySelector('#height').value).replace(',', '.')
  )
  return {
    weight: weight ? weight : NaN,
    height: height ? height : NaN,
  }
}

function createP() {
  let p = document.createElement('p')
  return p
}

function calcImc(weight, height) {
  let imc = (weight / height ** 2).toFixed(2)

  if (imc < 18.5) {
    msg = `Seu imc é ${imc} (${result_imc[0]})`
    return msg
  } else if (imc >= 18.5 && imc <= 24.9) {
    msg = `Seu imc é ${imc} (${result_imc[1]})`
    return msg
  } else if (imc >= 25 && imc <= 29.9) {
    msg = `Seu imc é ${imc} (${result_imc[2]})`
    return msg
  } else if (imc >= 30 && imc <= 34.9) {
    msg = `Seu imc é ${imc} (${result_imc[3]})`
    return msg
  } else if (imc >= 35 && imc <= 39.9) {
    msg = `Seu imc é ${imc} (${result_imc[4]})`
    return msg
  } else {
    msg = `Seu imc é ${imc} (${result_imc[5]})`
    return msg
  }
}

function validate(weight, height) {
  if (!weight && !height) {
    return 'Peso e Altura estão errados'
  } else if (!weight) {
    return 'Peso está errado'
  } else if (!height) {
    return 'Altura está errado'
  }
  return true
}
