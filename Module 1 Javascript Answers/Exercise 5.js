// Event class definition
class Event {
  constructor(name, date, category, seats) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.seats = seats;
  }
}

// Add method to the prototype
Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Seats available" : "Event is full";
};

// Create event instances
const event1 = new Event("Coding Camp", "2025-08-10", "Technology", 25);
const event2 = new Event("Painting Class", "2025-06-01", "Art", 0);

// Use checkAvailability method
console.log(`${event1.name}: ${event1.checkAvailability()}`);
console.log(`${event2.name}: ${event2.checkAvailability()}`);

// List keys and values using Object.entries
console.log("Event 1 Details:");
Object.entries(event1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
