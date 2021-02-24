const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`

document.addEventListener('DOMContentLoaded', () => {
  loadCharts()
  // const chartForm = document.querySelector("#chart-dropdown-js-form")
  // chartForm.addEventListener("submit", (e) => chartHandler(e))
  fetchChart()
})

function fetchChart(){
  fetch(`${CHARTS_URL}/1`)
  .then(resp => resp.json())
  .then(json => {
    renderChart(json.data);
  })
}

function renderChart(chart){
  const div = document.getElementById('chart')
  const h2 = document.createElement('h2')
  const jobs = chart.attributes.jobs

  h2.innerText = `These are the ${chart.attributes.name} Chart jobs:`
  div.append(h2)

  renderJobs(jobs)
}

function renderJobs(chart_jobs){
  const ul = document.createElement('ul')
  const div = document.getElementById('chart')

  for (i = 0; i < chart_jobs.length; i++) {
    let li = document.createElement('li')
    li.innerText = chart_jobs[i].title
    ul.append(li)
    div.append(ul)
  }

}

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

  select.append(option)
}

function chartHandler(e){
  e.preventDefault
  const chartChoice = document.querySelector("#chart-dropdown-js-select").value
  const chartId = parseInt(chartChoice, 10)
  postFetch(chartId)
}

function postFetch(chart_id){
  //debugger
  //get or post?
  fetch(`${CHARTS_URL}/${chart_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      chart_id: chart_id
      //add jobs
    })
  })
  .then(resp => resp.json())
  .then(json => {
    renderJobs(json.data);
  })
}


// function renderJobs(chart) {
//   const div = document.getElementById('job-list')
//   const p = document.createElement('p')
//
//   p.innerText = `These are the ${chart.attributes.name} Chart jobs:`
//   div.append(p)
// }
