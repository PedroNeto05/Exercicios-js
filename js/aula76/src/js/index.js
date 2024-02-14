function initializeCalc() {
  return {
    display: document.querySelector('#display'),

    start() {
      this.catchBtnClick()
      this.enter()
    },

    catchBtnClick() {
      document.addEventListener('click', e => {
        const element = e.target

        if (element.classList.contains('btn-num')) {
          this.addNumInDisplay(element.innerText)
          return
        }
        if (element.classList.contains('clear-display')) {
          this.clearDisplay()
          return
        }

        if (element.classList.contains('clear-display')) {
          this.clearDisplay()
          return
        }
        if (element.classList.contains('delete')) {
          this.deleteLast()
          return
        }
        if (element.classList.contains('equals')) {
          this.realizeExpression()
          return
        }
      })
    },

    enter() {
      this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          this.realizeExpression()
        }
      })
    },

    realizeExpression() {
      expression = this.display.value

      if (!expression) {
        return
      }

      this.display.value = eval(expression)
    },

    deleteLast() {
      this.display.value = String(this.display.value).slice(0, -1)
    },

    addNumInDisplay(valor) {
      this.display.value += valor
    },

    clearDisplay() {
      this.display.value = ''
    },
  }
}

const calc = initializeCalc()
calc.start()
