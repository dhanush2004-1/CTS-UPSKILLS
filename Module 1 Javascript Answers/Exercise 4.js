let events = [];

function addEvent(name, date, category, seats) {
  events.push({ name, date, category, seats });
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event) {
    if (event.seats > 0) {
      event.seats--;
      console.log(`Registered for ${event.name}. Remaining seats: ${event.seats}`);
    } else {
      console.log(`Event '${event.name}' is full.`);
    }
  } else {
    console.log(`Event '${eventName}' not found.`);
  }
}

function filterEventsByCategory(category) {
  return events.filter(event => event.category === category);
}

function createCategoryTracker(category) {
  let totalRegistrations = 0;
  return function () {
    totalRegistrations++;
    console.log(`Total registrations for ${category}: ${totalRegistrations}`);
  };
}

function filterEvents(callback) {
  return events.filter(callback);
}

addEvent("Tech Talk", "2025-06-10", "Technology", 50);
addEvent("Art Expo", "2025-07-01", "Art", 20);
addEvent("JS Bootcamp", "2025-06-15", "Technology", 0);

registerUser("Tech Talk");
registerUser("JS Bootcamp");

const techTracker = createCategoryTracker("Technology");
techTracker(); // called after a successful registration
techTracker();

const techEvents = filterEventsByCategory("Technology");
console.log("Technology Events:", techEvents);


const juneEvents = filterEvents(event => event.date.startsWith("2025-06"));
console.log("June Events:", juneEvents);
