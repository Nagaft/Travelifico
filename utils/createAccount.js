// RegisterForm.js
const registerForm = document.getElementById('create-account-form');
const registerButton = document.getElementById('createButton');


registerForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Create an object with the registration data
    const formData = {
        email: email,
        password: password,
        phoneNumber: phoneNumber
    };
    try {
        // Send the registration data to the server using the fetch API
        const response = await fetch('/create-account', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify JSON content type
            },
            body: JSON.stringify(formData) // Convert the data to JSON
        });
        if (response.ok) {
            // Registration successful, you can redirect to a success page or perform any other action
            window.location.href = '/home'; //CAMBIAR POR UNA RUTA VERDADERA//MODAL SUCCESS
        } else {
            // Registration failed, handle error (e.g., display an error message to the user)
            console.error('Registration failed. Please check your data.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});

registerButton.addEventListener('click', function (event) {
    registerForm.submit();
});