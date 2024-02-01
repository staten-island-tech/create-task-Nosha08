import './style.css'

const DOMSelectors = {
  app: document.querySelector('#app'),
  button: document.querySelector('button')
}

const api = 'https://opentdb.com/api.php?amount=10'
const response = await fetch(api)
const data = await response.json()

for (let i=0; i<10;) {
  console.log(data.results[i])
  DOMSelectors.app.insertAdjacentHTML('beforeend', 
  `<h1>${data.results[i].question}</h1>`)
  DOMSelectors.button.addEventListener('click', (event) => {
    event.preventDefault()
    i++
  })
}
