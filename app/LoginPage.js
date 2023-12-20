// Login.js

document.addEventListener("DOMContentLoaded", function () {
    // Select the form and attach an event listener
    const loginForm = document.querySelector('form');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the entered username and password
      const usernameInput = document.querySelector('input[name="text"]');
      const passwordInput = document.querySelector('input[name="password"]');
      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;
  
      // Check if both username and password meet your criteria (you can customize this)
      if (enteredUsername === 'aaaaa' && enteredPassword === '12345') {
        // Redirect to the home page for successful login
        window.location.href = 'home.html';
      } else {
        // Handle incorrect username or password (you can customize this)
        alert('Incorrect username or password. Please try again.');
      }
    });
  
    // Select the signup link and attach an event listener
    const signupLink = document.querySelector('.signup_link a');
  
    signupLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
  
      // Redirect to the signup page
      window.location.href = 'Create account.html';
    });
  });
  