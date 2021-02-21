const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`
const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', () => {
  loadCharts()
})

function loadDropdown(){
  
}

function loadCharts(){
  fetch(CHARTS_URL)
  .then(resp => resp.json())
  .then(json => {
    json.data.forEach(chart => renderChart(chart));
  })
}

function renderChart(chart) {
  const div = document.getElementById('dropdown')
  const p = document.createElement('p')
  const btn = document.createElement('button')

  btn.setAttribute('data-id', chart.id)
  btn.innerText = chart.attributes.name
  btn.addEventListener("click", (chart) => renderJobs(chart))

  p.append(btn)
  div.append(p)
  main.append(div)
}

function renderJobs(chart) {
  const div = document.getElementById('job-list')
  const p = document.createElement('p')

  p.innerText = `These are the ${chart.attributes.name} jobs.`
  div.append(p)
}
