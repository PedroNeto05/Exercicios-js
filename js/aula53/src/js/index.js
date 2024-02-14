const container = document.createElement('div')
const h1 = document.createElement('h1')
const div = document.createElement('div')
h1.innerHTML = 'lorem ipsun'
container.appendChild(h1)
container.appendChild(div)
container.classList.add('container')
document.body.appendChild(container)

const elements = [
  { tag: 'p', text: 'frase 1' },
  { tag: 'div', text: 'frase 2' },
  { tag: 'section', text: 'frase 1' },
  { tag: 'footer', text: 'frase 3' },
]

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i]
  let element = document.createElement(tag)
  element.innerHTML = text
  div.appendChild(element)
}
