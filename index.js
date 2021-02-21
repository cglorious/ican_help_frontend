const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`
const body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', () => {
  loadCharts()
})

function loadCharts(){
  fetch(CHARTS_URL)
  .then(resp => resp.json())
  .then(json => {
    json.data.forEach(chart => renderChart(chart));
  })
}

function renderChart(chart) {
  // const div = document.createElement('div')
  const p = document.createElement('p')
  // const btn = document.createElement('button')
  // const ul = document.createElement('ul')
  //
  // div.setAttribute('class', 'card')
  // div.setAttribute('data-id', trainer.id)
  // btn.setAttribute('data-trainer-id', trainer.id)

  p.innerText = chart.attributes.name
  // btn.innerText = "Add Pokemon"
  // btn.addEventListener("click", addPokemon)

  // div.append(p, btn, ul)
  body.append(p)
}
