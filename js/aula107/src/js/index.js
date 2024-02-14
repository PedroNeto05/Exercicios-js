const form = document.querySelector('form')
const submit = document.querySelector('#submit-btn')

form.addEventListener('submit', e => {
  e.preventDefault()
})

class ValidateCpf {
  constructor(cpf) {
    this.cpf = cpf
  }

  validateCpf() {
    const cleanCpf = this.cpf.replace(/\D+/g, '')
    const cpfDuplicates = cleanCpf.match(/^(\d)\1*$/)

    if (cpfDuplicates) {
      return false
    }

    if (cleanCpf.length < 11) {
      return false
    }

    const cpfArray = Array.from(cleanCpf.slice(0, -2))

    let count1 = 10
    const validateFirstNumber = cpfArray => {
      return (
        11 -
        (cpfArray.reduce((acc, value) => {
          acc += Number(value) * count1
          count1--
          return acc
        }, 0) %
          11)
      )
    }

    const validatedFirstNumber = validateFirstNumber(cpfArray)

    const firstNumber = validatedFirstNumber > 9 ? 0 : validatedFirstNumber

    cpfArray.push(String(firstNumber))

    let count2 = 11
    const validateSecondNumber = cpfArray => {
      return (
        11 -
        (cpfArray.reduce((acc, value) => {
          acc += Number(value) * count2
          count2--
          return acc
        }, 0) %
          11)
      )
    }

    const validatedSecondNumber = validateSecondNumber(cpfArray)

    const secondNumber = validatedSecondNumber > 9 ? 0 : validatedSecondNumber
    cpfArray.push(String(secondNumber))

    const validatedCpf = cpfArray.join('')

    return validatedCpf === cleanCpf
  }
}

class From extends ValidateCpf {
  constructor(name, lastName, cpf, user, password, confirmPassword) {
    super(cpf.value)
    this.cpfDiv = cpf
    this.name = name
    this.lastName = lastName
    this.user = user
    this.password = password
    this.confirmPassword = confirmPassword
  }

  start() {
    console.log()
    const validatedCpf = this.validateCpf()
    if (!validatedCpf) {
      this.createMessage(this.cpfDiv.parentElement, 'CPF Invalido')
      return
    }
    const validatedUser = this.validateUser()
    const validatedPassword = this.validatePassword()
    const validatedName = this.validateName()
    const validatedLastName = this.validateLastName()
    if (
      validatedPassword &&
      validatedUser &&
      validatedName &&
      validatedLastName
    ) {
      alert('Login Efetuado com sucesso!')
    }
  }

  validateUser() {
    if (this.user.value.length < 3 || this.user.value.length > 12) {
      this.createMessage(
        this.user.parentElement,
        'Usuário devera ter entre 3 e 12 caracteres'
      )
      return false
    }
    const onlyNumbersAndLetters = this.user.value.match(/^[a-zA-Z0-9]+$/)

    if (!onlyNumbersAndLetters) {
      this.createMessage(
        this.user.parentElement,
        'Usuário so poderá conter letrar ou números'
      )
      return false
    }

    return true
  }
  validatePassword() {
    if (this.password.value.length < 3 || this.password.value.length > 12) {
      this.createMessage(
        this.password.parentElement,
        'Senha devera ter entre 3 e 12 caracteres'
      )
      return false
    }
    if (this.password.value !== this.confirmPassword.value) {
      this.createMessage(
        this.password.parentElement,
        'As senhas precisam ser iguais'
      )
      return false
    }
    return true
  }

  validateName() {
    if (this.name.value.length === 0) {
      this.createMessage(this.name.parentElement, 'Nome deve ser preenchido')
      return false
    }
    return true
  }
  validateLastName() {
    if (this.lastName.value.length === 0) {
      this.createMessage(
        this.lastName.parentElement,
        'Sobrenome deve ser preenchido'
      )
      return false
    }
    return true
  }

  createParagraph() {
    const p = document.createElement('p')
    p.classList.add('error')
    return p
  }

  createMessage(local, message) {
    const p = this.createParagraph()
    p.innerText = message
    local.appendChild(p)
  }
}

submit.addEventListener('click', e => {
  const name = document.querySelector('#name')
  const lastName = document.querySelector('#last-name')
  const cpf = document.querySelector('#cpf')
  const user = document.querySelector('#user')
  const password = document.querySelector('#password')
  const confirmPassword = document.querySelector('#confirm-password')

  // console.log(name.parentElement)
  // console.log(lastName.parentElement)
  // console.log(cpf.parentElement)
  // console.log(user.parentElement)
  // console.log(password.parentElement)
  // console.log(confirmPassword.parentElement)

  const validateForm = new From(
    name,
    lastName,
    cpf,
    user,
    password,
    confirmPassword
  )

  validateForm.start()
})
