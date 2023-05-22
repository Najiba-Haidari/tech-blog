// it is creating an async function to handle form submission to login 
async function loginFormHandler(event) {
  //starting with a preventDefault
    event.preventDefault();
  // extracting the value of username and password for login and assigning to variables
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  // if username and password are true then a fetch request of post is made to /api/user/login
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
// when the login form is submitted the the loginFormHandler is called
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
