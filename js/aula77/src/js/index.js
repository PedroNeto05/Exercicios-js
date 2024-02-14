function Calc() {
  display = document.querySelector('#display')

  this.start = () => {
    catchBtnClick()
    enter()
  }

  catchBtnClick = () => {
    document.addEventListener('click', e => {
      const element = e.target

      if (element.classList.contains('btn-num')) {
        addNumInDisplay(element.innerText)
        return
      }
      if (element.classList.contains('clear-display')) {
        clearDisplay()
        return
      }

      if (element.classList.contains('clear-display')) {
        clearDisplay()
        return
      }
      if (element.classList.contains('delete')) {
        deleteLast()
        return
      }
      if (element.classList.contains('equals')) {
        realizeExpression()
        return
      }
    })
  }

  enter = () => {
    display.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        realizeExpression()
      }
    })
  }

  realizeExpression = () => {
    expression = display.value

    if (!expression) {
      return
    }

    display.value = eval(expression)
  }

  deleteLast = () => {
    display.value = String(display.value).slice(0, -1)
  }

  addNumInDisplay = valor => {
    display.value += valor
  }

  clearDisplay = () => {
    display.value = ''
  }
}

const calc = new Calc()
calc.start()
