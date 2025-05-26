form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submission started");

  const { name, email, event: selectedEvent } = form.elements;
  console.log("Form values:", {
    name: name.value,
    email: email.value,
    event: selectedEvent.value,
  });

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: selectedEvent.value,
  };

  console.log("Prepared user data for submission:", userData);

  delayedFetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then(data => {
      console.log("Fetch successful, response data:", data);
      messageDiv.style.color = "green";
      messageDiv.textContent = `Registration successful! ID: ${data.id}`;
      form.reset();
    })
    .catch(error => {
      console.error("Fetch failed:", error);
      messageDiv.style.color = "red";
      messageDiv.textContent = "Registration failed. Please try again.";
    });
});
