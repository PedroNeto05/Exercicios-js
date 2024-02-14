export default class ValidateCpf {
  constructor(cpf) {
    this.cpf = cpf
  }

  static validateFirstNumber(cpfArray) {
    let count = 10
    return (
      11 -
      (cpfArray.reduce((acc, value) => {
        acc += Number(value) * count
        count--
        return acc
      }, 0) %
        11)
    )
  }

  static validateSecondNumber(cpfArray) {
    let count = 11
    return (
      11 -
      (cpfArray.reduce((acc, value) => {
        acc += Number(value) * count
        count--
        return acc
      }, 0) %
        11)
    )
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

    const validatedFirstNumber = this.validateFirstNumber(cpfArray)

    const firstNumber = validatedFirstNumber > 9 ? 0 : validatedFirstNumber

    cpfArray.push(String(firstNumber))

    const validatedSecondNumber = this.validateSecondNumber(cpfArray)

    const secondNumber = validatedSecondNumber > 9 ? 0 : validatedSecondNumber
    cpfArray.push(String(secondNumber))

    const validatedCpf = cpfArray.join('')

    return validatedCpf === cleanCpf
  }
}
