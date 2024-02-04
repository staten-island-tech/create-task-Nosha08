import './style.css'

const DOMSelectors = {
  app: document.querySelector('#app'),
}

async function fetchData() {
  const api = 'https://opentdb.com/api.php?amount=10'
  const response = await fetch(api)
  const data = await response.json()
  display(data)
}

let i = 0
function display(data) {
  if (i > 9) {
    final()
  }

  let options = []
  data.results[i].incorrect_answers.forEach((x) => options.push(x))
  let random = Math.floor(Math.random() * 4)
  options.splice(random, 0, data.results[i].correct_answer)

  let html = `<h1>${data.results[i].question}</h1>`
  for (let x = 0; x < 4; x++) {
    html += `<form class='optionForm'><input type="submit" value="${options[x]}"></form>`  
  }
  DOMSelectors.app.insertAdjacentHTML('beforeend', html)
  form(data)
}

let user = []
function form(data) {
  let forms = document.querySelectorAll('.optionForm')
  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      let selected = event.target.elements[0].value
      if (selected === data.results[i].correct_answer) {
        user.push('Correct')
      } else {
        user.push('Incorrect')
      }
      i++
      DOMSelectors.app.innerHTML = ''
      display(data)
    })
  })
}

let correct = 0
function final() {
  console.log(user)
  for (let y = 0; y < user.length; y++) {
    if (user[y] === 'Correct') {
      correct++
      y++
    }
  }
  DOMSelectors.app.insertAdjacentHTML('beforeend', 
  `<h1>${correct} correct answers!</h1>`)
}

fetchData()