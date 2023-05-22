// it is creating an async function of commentFormHandler to create new comment
// 
async function commentFormHandler(event) {
    event.preventDefault();
// extracting the post Id and comment text
    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
// if any comment_text then it is sending a post request to the /api/comments by fetch API
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
// if the response is okay the page is reloaded to check new comment
        if (response.ok) {
            document.location.reload();
// otherwise it is displaying error message 
        } else {
            alert(response.statusText);
            document.querySelector('#comment-form').style.display = "block";
        }
    }
}
// when submitting the commentFormHandler will be executed.
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);