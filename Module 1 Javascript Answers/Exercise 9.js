const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5"; // Simulated event list


Using .then().catch()
---------------------


const spinner = document.querySelector("#spinner");
const container = document.querySelector("#events-container");

spinner.style.display = "block";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    spinner.style.display = "none";
    renderEvents(data);
  })
  .catch(error => {
    spinner.textContent = "Failed to load events.";
    console.error("Error fetching events:", error);
  });

function renderEvents(events) {
  events.forEach(event => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.margin = "10px";
    card.style.padding = "10px";

    card.innerHTML = `<h3>${event.title}</h3><p>${event.body}</p>`;
    container.appendChild(card);
  });
}

Using async/await
-----------------

const spinner = document.querySelector("#spinner");
const container = document.querySelector("#events-container");

async function fetchEvents() {
  spinner.style.display = "block";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    renderEvents(data);
  } catch (error) {
    spinner.textContent = "Failed to load events.";
    console.error("Error:", error);
  } finally {
    spinner.style.display = "none";
  }
}

function renderEvents(events) {
  events.forEach(event => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.margin = "10px";
    card.style.padding = "10px";

    card.innerHTML = `<h3>${event.title}</h3><p>${event.body}</p>`;
    container.appendChild(card);
  });
}

fetchEvents(); // Call it


