import generateRandomPassword from './generators'

export default class Form {
  constructor() {
    this.result = document.querySelector('.resultado')
    this.form = document.querySelector('form')
    this.button = document.querySelector('#submit')
    this.numbers
    this.symbols
    this.letterLowercase
    this.letterUppercase
    this.passwordLength
  }

  start() {
    this.form.addEventListener('submit', e => {
      e.preventDefault()
    })

    this.button.addEventListener('click', e => {
      this.passwordLength = document.querySelector('#passwordLength')
      this.letterUppercase = document.querySelector('#letterUppercase')
      this.letterLowercase = document.querySelector('#letterLowercase')
      this.symbols = document.querySelector('#symbols')
      this.numbers = document.querySelector('#numbers')

      this.validateInputs(this.passwordLength.value)
    })
  }

  setPassword() {
    this.result.innerHTML = generateRandomPassword(
      this.passwordLength.value,
      this.letterUppercase.checked,
      this.letterLowercase.checked,
      this.numbers.checked,
      this.symbols.checked
    )
  }

  validateInputs() {
    if (this.passwordLength.value === '') {
      this.result.innerHTML = 'Informe um valor para a senha!'
      return
    }
    if (Number.isNaN(Number(this.passwordLength.value))) {
      this.result.innerHTML = 'O tamanho da senha deve ser um numero!'
      return
    }
    if (
      !this.letterUppercase.checked &&
      !this.letterLowercase.checked &&
      !this.numbers.checked &&
      !this.symbols.checked
    ) {
      this.result.innerHTML = 'Informe qual carácter sua senha vai conter!'
      return
    }

    this.setPassword()
  }
}
