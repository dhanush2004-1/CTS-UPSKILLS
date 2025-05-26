const events = [
  { name: "Jazz Night", category: "Music", seats: 5 },
  { name: "Baking Workshop", category: "Cooking", seats: 2 },
  { name: "Tech Conference", category: "Technology", seats: 10 },
];

// Function with default parameters and destructuring
function filterEventsByCategory(eventList = [], category = "all") {
  // Clone array with spread operator to avoid mutating original
  const clonedEvents = [...eventList];

  return category === "all"
    ? clonedEvents
    : clonedEvents.filter(({ category: cat }) => cat === category);
}

// Example usage:
const musicEvents = filterEventsByCategory(events, "Music");
console.log("Music Events:", musicEvents);

const allEvents = filterEventsByCategory(events);
console.log("All Events:", allEvents);
