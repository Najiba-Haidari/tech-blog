// creating an async function starting with preventDefault
async function signupFormHandler(event) {
    event.preventDefault();
// assiging the values of username, email and password for signup to the variables
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
// if the username, email and password are provided then it will fetch a Post request to /api/users
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}
//when submitting a signup form then the signupFormHandler function is called.
document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);