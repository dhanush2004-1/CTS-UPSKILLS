const today = new Date("2025-05-26");

const events = [
  { name: "Tech Talk", date: "2025-06-10", seats: 30 },
  { name: "Community Cleanup", date: "2025-04-15", seats: 10 },
  { name: "Hackathon", date: "2025-07-01", seats: 0 },
];

function register(event) {
  try {
    if (event.seats <= 0) {
      throw new Error("No seats available");
    }
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming Event: ${event.name} on ${event.date} (${event.seats} seats available)`);
    // Simulate a registration attempt
    register(event);
  } else {
    console.log(`Event '${event.name}' is either in the past or full.`);
  }
});
