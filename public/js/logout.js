// creating async function for logout
async function logout() {
  // sending a post request to the /api/users/logout by fetch method
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  // when clicking on logout button the the logout function is called
  document.querySelector('#logout').addEventListener('click', logout);