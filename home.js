let jobs = [];

async function loadJobs() {
  const response = await fetch("C:UsershpDesktopJob_huntingjobs.json");
  jobs = await response.json();
  localStorage.setItme("jobs", json.stringify(jobs));
}

function searchJobs() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const results = savedJobs.filter((job) =>
    job.title.toLowerCase().includes(query)
  );

  displayResults(results);
}

function displayResults(results) {
  const container = document.getElementById("results");
  container.innerHTML = "";
  if (results.length === 0) {
    container.innerHTML = "<p>No jobs found.</p>";
    return;
  }
  results.forEach((job) => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <div class="job-title">${job.title}</div>
      <div class="job-info">${job.company} - ${job.location}</div>
      <div class="job-info">Type: ${job.type}</div>
      <div class="job-info">Salary: ${job.salary}</div>
    `;
    container.appendChild(div);
  });
}
