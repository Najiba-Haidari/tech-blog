// it is creating an async function to handle form submission to delete a post from database
// it is getting the id of the post to be deleted from the url
// it is using the DELETE method to send the data to the API endpoint
// if the response is ok, the user is redirected to the dashboard
// if not, an alert is displayed with the error message
// if the user clicks the cancel button, the form is reset
async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
      
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);