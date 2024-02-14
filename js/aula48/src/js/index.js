// Jeito que eu fiz

// const h1 = document.querySelector('#title')

// function updateDate() {
//   h1.innerHTML = formatDate()
// }

// function formatDate() {
//   const { day, dayMonth, hour, minutes, month, year, seconds } = getDate()

//   const validatedDay = validateDay(day)
//   const validatedMonth = validateMonth(month)
//   const validatedHours = hour >= 10 ? hour : `0${hour}`
//   const validatedMinutes = minutes >= 10 ? minutes : `0${minutes}`
//   const validatedSeconds = seconds >= 10 ? seconds : `0${seconds}`

//   return `${validatedDay}, ${dayMonth} de ${validatedMonth} de ${year} ${validatedHours}:${validatedMinutes}:${validatedSeconds}`
// }

// function validateDay(day) {
//   switch (day) {
//     case 0:
//       return 'Domingo'
//     case 1:
//       return 'Segunda'
//     case 2:
//       return 'Terça'
//     case 3:
//       return 'Quarta'
//     case 4:
//       return 'Quinta'
//     case 5:
//       return 'Sexta'
//     case 6:
//       return 'Sábado'
//   }
// }

// function validateMonth(month) {
//   switch (month) {
//     case 0:
//       return 'Janeiro'
//     case 1:
//       return 'Fevereiro'
//     case 2:
//       return 'Março'
//     case 3:
//       return 'Abril'
//     case 4:
//       return 'Maio'
//     case 5:
//       return 'Junho'
//     case 6:
//       return 'Julho'
//     case 7:
//       return 'Agosto'
//     case 8:
//       return 'Setembro'
//     case 9:
//       return 'Outubro'
//     case 10:
//       return 'Novembro'
//     case 11:
//       return 'Dezembro'
//   }
// }

// function getDate() {
//   const date = new Date()
//   const day = date.getDay()
//   const dayMonth = date.getDate()
//   const month = date.getMonth()
//   const year = date.getFullYear()
//   const hour = date.getHours()
//   const minutes = date.getMinutes()
//   const seconds = date.getSeconds()

//   return {
//     day,
//     dayMonth,
//     month,
//     year,
//     hour,
//     minutes,
//     seconds,
//   }
// }

// updateDate()

// Jeito 'Certo'
const h1 = document.querySelector('#title')

let date = new Date()

h1.innerHTML = date.toLocaleString('pt-br', {
  dateStyle: 'full',
  timeStyle: 'medium',
})
