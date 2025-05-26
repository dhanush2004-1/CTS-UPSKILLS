const form = document.getElementById("registrationForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Clear previous messages
  messageDiv.textContent = "";

  // Gather form data
  const { name, email, event: selectedEvent } = form.elements;

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: selectedEvent.value
  };

  // Simulate delay using setTimeout wrapped in a Promise
  function delayedFetch(url, options) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url, options)
          .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
          })
          .then(resolve)
          .catch(reject);
      }, 2000); // 2-second delay
    });
  }

  // POST data to mock API endpoint
  delayedFetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then(data => {
      messageDiv.style.color = "green";
      messageDiv.textContent = `Registration successful! ID: ${data.id}`;
      form.reset();
    })
    .catch(error => {
      messageDiv.style.color = "red";
      messageDiv.textContent = "Registration failed. Please try again.";
      console.error("Error:", error);
    });
});
