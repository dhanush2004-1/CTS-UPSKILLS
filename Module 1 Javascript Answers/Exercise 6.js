
let events = [
  { name: "Rock Concert", category: "Music" },
  { name: "JavaScript Bootcamp", category: "Technology" },
  { name: "Painting Workshop", category: "Art" }
];

// 1. Add new events using .push()
events.push({ name: "Jazz Night", category: "Music" });
events.push({ name: "Baking Workshop", category: "Cooking" });

// 2. Filter only music events using .filter()
const musicEvents = events.filter(event => event.category === "Music");
console.log("🎵 Music Events:");
console.log(musicEvents);

// 3. Format event display using .map()
const eventCards = events.map(event => `Workshop on ${event.name}`);
console.log("🪪 Event Cards:");
console.log(eventCards);
