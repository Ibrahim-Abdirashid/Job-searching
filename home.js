let jobs = [];

// Function to load jobs from the JSON file
async function loadJobs() {
  const response = await fetch("/jobs.json");
  jobs = await response.json();
  localStorage.setItem("jobs", JSON.stringify(jobs)); // Fixed typo here
}

// Function to search jobs based on query
function searchJobs() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
  const results = savedJobs.filter((job) =>
    job.title.toLowerCase().includes(query) ||
    job.company.toLowerCase().includes(query) ||
    job.location.toLowerCase().includes(query) ||
    job.type.toLowerCase().includes(query) ||
    job.salary.toLowerCase().includes(query)
  );

  displayResults(results);
}

// Function to display the search results
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

// Log out functionality
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
});

// Load jobs when the page loads
window.onload = function() {
  loadJobs(); 
};

// Dark Mode Functionality
const modeButton = document.getElementById("modeButton");
const body = document.body;

// Check if the mode was previously saved
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
  modeButton.textContent = "Switch to Light Mode";
} else {
  body.classList.remove("dark-mode");
  modeButton.textContent = "Switch to Dark Mode";
}

// Toggle between dark mode and light mode when the button is clicked
modeButton.addEventListener("click", function () {
  if (body.classList.contains("dark-mode")) {
    // Switch to light mode
    body.classList.remove("dark-mode");
    modeButton.textContent = "Switch to Dark Mode";
    localStorage.setItem("mode", "light"); // Save light mode state
  } else {
    // Switch to dark mode
    body.classList.add("dark-mode");
    modeButton.textContent = "Switch to Light Mode";
    localStorage.setItem("mode", "dark"); // Save dark mode state
  }
});
