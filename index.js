const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`
const main = document.querySelector('body')

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
  const p = document.createElement('p')
  p.innerText = chart.attributes.name
  main.append(p)
}
