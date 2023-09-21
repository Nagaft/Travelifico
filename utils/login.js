
// const loginForm = document.getElementById('my-form');
// const loginButton = document.getElementById('my-form_button');


// loginForm.addEventListener('submit', async function (event) {
//     event.preventDefault(); 

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Create an object with the form data
//     const formData = {
//         email: email,
//         password: password
//     };

//     try {
//         // Send the form data to the server using the fetch API
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json' // Specify JSON content type
//             },
//             body: JSON.stringify(formData) // Convert the data to JSON
//         });

//         if (response.ok) {
            
//             window.location.href = '/profile'; // Redirect to the profile page
//         } else {
//             console.error('Login failed. Please check your credentials.');
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
//         loginButton.addEventListener('click', function (event) {
//                 loginForm.submit();

//     });

// });
