const paragraph = document.querySelector('#timer')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let timerW
let count = 0

start.addEventListener('click', () => {
  paragraph.classList.remove('pausado')
  clearInterval(timerW)
  timer()
})
stop.addEventListener('click', () => {
  paragraph.classList.add('pausado')
  clearInterval(timerW)
})
reset.addEventListener('click', () => {
  paragraph.classList.remove('pausado')
  clearInterval(timerW)
  paragraph.innerHTML = '00:00:00'
  count = 0
})

function timer() {
  timerW = setInterval(() => {
    let data = new Date('1-1-2001 00:00:00' + count)
    paragraph.innerHTML = data.toLocaleTimeString()
    count++
  }, 1000)
}
