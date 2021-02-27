const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`

document.addEventListener('DOMContentLoaded', () => {
  renderChartOptions()
})

// chart options - button
function renderChartOptions(){
  loadHeader()
  loadCharts()
}

function loadHeader(){
  const choice = document.getElementById('chart-choice')
  const h2 = document.createElement('h2')
  h2.innerText = "Welcome, helper! Choose your location."

  choice.append(h2)
}


function loadCharts(){
  fetch(CHARTS_URL)
  .then(resp => resp.json())
  .then(json => {
    json.data.forEach(chart => loadButton(chart));
  })
}

function loadButton(chart){
  const choice = document.getElementById('chart-choice')
  const btn = document.createElement('button')

  btn.setAttribute('id', chart.id)
  btn.innerText = chart.attributes.name
  btn.addEventListener("click", (e) => fetchChart(e.target.id))

  choice.append(btn)
}

// individual chart
function fetchChart(value){
  fetch(`${CHARTS_URL}/${value}`)
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
  h2.innerText = `${chart.attributes.name} Chart`
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

    title.innerText = chart_jobs[i].title
    description.innerText = chart_jobs[i].description

    containerDiv.append(title, description)
    jobDiv.append(image, containerDiv)
    columnDiv.append(jobDiv)
    rowDiv.append(columnDiv)
  }
  chartDiv.append(rowDiv)
}
