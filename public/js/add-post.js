// creating async function of newFormHandler to create new post.
// it is geting the values entried to the title and content fields
// it is using the POST method to send the data to the API endpoint
// if the response is ok, the user is redirected to the dashboard
// if not, an alert is displayed with the error message
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);