const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`

document.addEventListener('DOMContentLoaded', () => {
  loadCharts()
  // const chartForm = document.querySelector("#chart-dropdown-js-form")
  // chartForm.addEventListener("submit", (e) => chartHandler(e))
  fetchChart()
})

// individual chart
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

  h2.setAttribute('class', 'chart-title')
  h2.innerText = `These are the ${chart.attributes.name} Chart jobs:`
  div.append(h2)

  renderJobs(jobs)
}

function renderJobs(chart_jobs){
  const chartDiv = document.getElementById('chart')
  const rowDiv = document.createElement('div')

  for (i = 0; i < chart_jobs.length; i++) {
    const columnDiv = document.createElement('div')
    const jobDiv = document.createElement('div')
    const image = document.createElement('img')
    const containerDiv = document.createElement('div')
    const title = document.createElement('h4')
    const description = document.createElement('p')

    rowDiv.setAttribute('class', 'row')
    columnDiv.setAttribute('class', 'column')
    jobDiv.setAttribute('class', 'card')
    containerDiv.setAttribute('class', 'container')
    image.setAttribute('src', chart_jobs[i].image_url)
    image.setAttribute('alt', chart_jobs[i].title)
    image.setAttribute('style', 'width:100%')

    title.innerText = chart_jobs[i].title
    description.innerText = chart_jobs[i].description

    containerDiv.append(title, description)
    jobDiv.append(image, containerDiv)
    columnDiv.append(jobDiv)
    rowDiv.append(columnDiv)
  }
  chartDiv.append(rowDiv)
}

// chart options - dropdown
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

// function chartHandler(e){
//   e.preventDefault
//   const chartChoice = document.querySelector("#chart-dropdown-js-select").value
//   const chartId = parseInt(chartChoice, 10)
//   postFetch(chartId)
// }
//
// function postFetch(chart_id){
//   //debugger
//   //get or post?
//   fetch(`${CHARTS_URL}/${chart_id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       chart_id: chart_id
//       //add jobs
//     })
//   })
//   .then(resp => resp.json())
//   .then(json => {
//     renderJobs(json.data);
//   })
// }
