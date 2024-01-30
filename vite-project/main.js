import './style.css'

const api = 'https://opentdb.com/api.php?amount=10'
const response = await fetch(api)
const data = await response.json()

for (let i=0; i++; i<data.length) {
  console.log(data[i])
}