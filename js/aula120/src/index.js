import GeraCpf from './modules/GeraCpf'
import './assets/styles/styles.css'

const cpf = new GeraCpf()

const resultado = document.querySelector('.resultado')

resultado.innerHTML = cpf.cpfGerado()
