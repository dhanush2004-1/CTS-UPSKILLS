const events = [
  { name: "Jazz Night", category: "Music", seats: 5 },
  { name: "Baking Workshop", category: "Cooking", seats: 0 },
  { name: "Tech Conference", category: "Technology", seats: 20 }
];

// Access DOM container
const container = document.querySelector("#events-container");

// Render each event as a card
function renderEvents() {
  container.innerHTML = ""; // Clear container before rendering

  events.forEach((event, index) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.padding = "10px";
    card.style.margin = "10px 0";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p>Category: ${event.category}</p>
      <p>Seats available: ${event.seats}</p>
    `;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.disabled = event.seats === 0;

    registerBtn.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(); // Update UI
      }
    };

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.marginLeft = "10px";

    cancelBtn.onclick = () => {
      event.seats++;
      renderEvents(); // Update UI
    };

    card.appendChild(registerBtn);
    card.appendChild(cancelBtn);
    container.appendChild(card);
  });
}

// Initial render
renderEvents();
