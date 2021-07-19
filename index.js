const Input = document.querySelector('input')
const Form = document.querySelector('form')
const Ul = document.querySelector('ul')
const BtnExcluirConcluidos = document.querySelector('#excluir')

function addTodo(event) {
  const todo = Input.value
  const Li = document.createElement('li')
  Li.innerText = todo
  
  Ul.appendChild(Li)
  Input.value = ''
  Input.maxLength = 30

  Li.addEventListener('click', () => {
    Li.classList.toggle('done')
  })
}

Form.addEventListener('submit', event => {
  event.preventDefault()
  addTodo()
})


BtnExcluirConcluidos.addEventListener('click', () => {
  const Lis = document.querySelectorAll('li')

  for (const Li of Lis) {
    if (Li.classList.value.includes('done')) {
      Ul.removeChild(Li)
    }


  }
})