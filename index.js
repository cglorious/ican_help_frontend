const BASE_URL = "http://localhost:3000"
const CHARTS_URL = `${BASE_URL}/api/v1/charts`
const JOBS_URL = `${BASE_URL}/api/v1/jobs`

document.addEventListener('DOMContentLoaded', () => {
  loadCharts()
})

function loadCharts(){
  fetch(CHARTS_URL)
  .then(resp => resp.json())
  .then(chart => {
    console.log(chart);
  })
}
