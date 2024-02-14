const body = document.body
const { backgroundColor: bodycolor } = getComputedStyle(body)
const paragraphs = document.querySelectorAll('.container p')

for (let i of paragraphs) {
  i.style.backgroundColor = bodycolor
}

console.log(bodycolor, 'teste')
