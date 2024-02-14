const inpJob = document.querySelector('#inpJob')
const btnSubmit = document.querySelector('#btn-submit')
const ulJobs = document.querySelector('ul')
const form = document.querySelector('form')

document.addEventListener('click', e => {
  const element = e.target
  if (element.classList.contains('delete-btn')) {
    element.parentNode.remove()
    saveJobs()
  }
})

form.addEventListener('submit', e => {
  e.preventDefault()
})

btnSubmit.addEventListener('click', () => {
  validateJobs()
})

function validateJobs() {
  const job = inpJob.value

  if (job.length === 0) {
    return
  }
  createJob(job)
}

function createJob(job) {
  const li = createLi()
  li.innerText = job
  createDeleteBtn(li)
  ulJobs.appendChild(li)
  cleanInput()
  saveJobs()
}

function saveJobs() {
  const liJobs = document.querySelectorAll('li')
  const allJobs = []

  for (let i of liJobs) {
    let textJob = i.innerText
    allJobs.push(textJob.replace('Delete', '').trim())
  }

  saveInLocalStorage(allJobs)
}

function saveInLocalStorage(listJobs) {
  localStorage.setItem('Jobs', JSON.stringify(listJobs))
}

function cleanInput() {
  inpJob.value = ''
}

function createDeleteBtn(li) {
  const btn = document.createElement('button')

  btn.innerText = 'Delete'
  btn.classList.add('delete-btn')
  li.innerText += ' '
  li.appendChild(btn)
}

function createLi() {
  const li = document.createElement('li')
  return li
}

function initializeJobs() {
  const localJobs = JSON.parse(localStorage.getItem('Jobs'))

  if (!localJobs) {
    return []
  }

  for (let i of localJobs) {
    createJob(i)
  }
  return localJobs
}

initializeJobs()
