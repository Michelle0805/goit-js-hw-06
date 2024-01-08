const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission and page reload

  const emailInput = this.elements['email'];
  const passwordInput = this.elements['password'];

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Please fill in all fields.'); // Display an alert for empty fields
    return;
  }

  // If all fields are filled, collect field values into an object
  const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  // Display the object with entered data in the console
  console.log(formData);

  // Clear the values of the form fields using the reset method
  this.reset();
});
