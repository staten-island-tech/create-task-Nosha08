import './style.css'

const DOMSelectors = {
  app: document.querySelector('#app')
}

const api = 'https://opentdb.com/api.php?amount=10'
const response = await fetch(api)
const data = await response.json()
console.log(data.results)

for (let i=0; i<data.results.length;) {
  console.log(data.results[i])
  DOMSelectors.app.insertAdjacentHTML('beforeend', 
  `<h1>${data.results[i].question}</h1>`)
}
