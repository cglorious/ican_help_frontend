const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`
// const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', () => {
  loadCharts()
  const chartForm = document.querySelector("#chart-dropdown-js-form")
  chartForm.addEventListener("submit", (e) => chartHandler(e))
})

function loadCharts(){
  fetch(CHARTS_URL)
  .then(resp => resp.json())
  .then(json => {
    json.data.forEach(chart => loadDropdown(chart));
  })
}

function loadDropdown(chart){
  const select = document.getElementById('chart-dropdown-js-select')
  const option = document.createElement('option')

  option.setAttribute('value', chart.id)
  option.innerText = `${chart.attributes.name} Chart`
  // option.addEventListener('click', console.log(chart.attributes.jobs))

  select.append(option)
}

function chartHandler(e){
  e.preventDefault
  const chartId = document.querySelector("#chart-dropdown-js-select").value
  console.log(chartId)
}

// function renderChart(chart) {
//   const div = document.getElementById('dropdown')
//   const p = document.createElement('p')
//   const btn = document.createElement('button')
//
//   btn.setAttribute('data-id', chart.id)
//   btn.innerText = chart.attributes.name
//   btn.addEventListener("click", (chart) => renderJobs(chart))
//
//   p.append(btn)
//   div.append(p)
//   main.append(div)
// }

// function renderJobs(chart) {
//   const div = document.getElementById('job-list')
//   const p = document.createElement('p')
//
//   p.innerText = `These are the ${chart.attributes.name} jobs.`
//   div.append(p)
// }
