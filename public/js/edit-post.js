// it is creating an async function to handle edit a post in database

async function editFormHandler(event) {
  // starting with preventing the default behavior of the form submit event.
    event.preventDefault();
// extracting value of post title and content and assigning to the title and content variables
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();
    console.log(title);
    console.log(content);
// extracting the post id
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    // using the fetch api with Put request to /api/posts/:id where id
    // is the id of the post to be edited
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id,
          title,
          content
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
// when the form is submited then editFormHandler is executed
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
// I tried this code but it is not working properly