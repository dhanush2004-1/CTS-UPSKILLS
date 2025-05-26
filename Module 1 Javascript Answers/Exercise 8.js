const events = [
  { name: "Jazz Night", category: "Music", seats: 5 },
  { name: "Baking Workshop", category: "Cooking", seats: 2 },
  { name: "Tech Conference", category: "Technology", seats: 10 },
  { name: "Rock Concert", category: "Music", seats: 0 }
];

const container = document.querySelector("#events-container");
const categoryFilter = document.querySelector("#categoryFilter");
const searchBox = document.querySelector("#searchBox");

let currentFilter = "all";
let searchQuery = "";

// Render event cards
function renderEvents() {
  container.innerHTML = "";

  const filteredEvents = events.filter(event => {
    const matchesCategory = currentFilter === "all" || event.category === currentFilter;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  filteredEvents.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px 0";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Seats: ${event.seats}</p>
    `;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0;

    // 🖱️ onclick event
    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents();
      }
    };

    card.appendChild(registerBtn);
    container.appendChild(card);
  });
}

// 🔄 onchange event
categoryFilter.onchange = function () {
  currentFilter = this.value;
  renderEvents();
};

// ⌨️ keydown event for live search
searchBox.addEventListener("keydown", function () {
  searchQuery = this.value;
  renderEvents();
});

// Initial render
renderEvents();
