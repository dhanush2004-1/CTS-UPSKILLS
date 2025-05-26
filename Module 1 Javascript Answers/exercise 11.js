const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("eventError").textContent = "";

  const { name, email, event: selectedEvent } = form.elements;

  let isValid = true;

  // Name validation
  if (!name.value.trim()) {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Event selection validation
  if (!selectedEvent.value) {
    document.getElementById("eventError").textContent = "Please select an event.";
    isValid = false;
  }

  if (isValid) {
    alert(`Thank you, ${name.value.trim()}! You have registered for ${selectedEvent.value}.`);
    form.reset();
  }
});
