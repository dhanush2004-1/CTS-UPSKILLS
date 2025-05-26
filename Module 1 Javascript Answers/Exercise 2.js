const eventName = "Community Meetup";
const eventDate = "2025-06-15";
let availableSeats = 100;

console.log(`Event: ${eventName}`);
console.log(`Date: ${eventDate}`);
console.log(`Available Seats: ${availableSeats}`);

// Simulate a registration
availableSeats--;

// Log updated seat count
console.log(`Seats left after registration: ${availableSeats}`);
