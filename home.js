let jobs = [];

async function loadJobs() {
  const response = await fetch("C:\Users\hp\Desktop\Job_hunting\jobs.json");
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
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("currentUser");

  window.location.href = "login.html";
});

//* waxaan soo select gareyn buttonka iyo bodyga
// script.js

// Hel button-ka iyo body-ga
const modeButton = document.getElementById("modeButton");
const body = document.body;

// Hubi haddii mode-ka hore u kaydsanaa
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
  modeButton.textContent = "Switch to Light Mode";
} else {
  body.classList.remove("dark-mode");
  modeButton.textContent = "Switch to Dark Mode";
}

// Marka button-ka la riixo, beddel dark mode iyo light mode
modeButton.addEventListener("click", function () {
  if (body.classList.contains("dark-mode")) {
    // U beddel light mode
    body.classList.remove("dark-mode");
    modeButton.textContent = "Switch to Dark Mode";
    body.style.color = "white";
    localStorage.setItem("mode", "light"); // Kaydi xaaladda light mode
  } else {
    // U beddel dark mode
    body.classList.add("dark-mode");
    modeButton.textContent = "Switch to Light Mode";
    localStorage.setItem("mode", "dark"); // Kaydi xaaladda dark mode
  }
});
