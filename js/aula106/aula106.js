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

const cpf = new ValidateCpf('704.181.744-07')
console.log(cpf.validateCpf())
