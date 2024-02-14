import ValidateCpf from './ValidateCpf'

export default class GeraCpf {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  format(cpf) {
    return (
      cpf.slice(0, 3) +
      '.' +
      cpf.slice(3, 6) +
      '.' +
      cpf.slice(6, 9) +
      '-' +
      cpf.slice(9, 11)
    )
  }

  cpfGerado() {
    const nineDigits = Array.from(this.rand())
    const tenDigit = ValidateCpf.validateFirstNumber(nineDigits)
    nineDigits.push(tenDigit)
    const elevenDigit = ValidateCpf.validateSecondNumber(nineDigits)
    nineDigits.push(elevenDigit)
    return this.format(nineDigits.join(''))
  }
}
