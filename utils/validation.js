// validation.js
// Wait for the DOM to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Find the verification form element by its ID
    const verificationForm = document.getElementById('verification-form');

    // Add an event listener to the form's submit event
    verificationForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Extract verification code from the form
        const verificationCode = document.getElementById('verificationCode').value;

        try {
            // Send the verification code to the server for validation
            const response = await fetch(`/verify?code=${verificationCode}`, {
                method: 'GET',
            });

            if (response.ok) {
                // Server responded with a successful status code
                // Redirect to the success page (e.g., '/profile')
                window.location.href = '/profile';
            } else {
                // Handle validation errors (e.g., incorrect code)
                console.error('Phone number verification failed.');
                // Display an error message or take appropriate action
            }
        } catch (error) {
            console.error('Error:', error);
            // Display an error message or take appropriate action
        }
    });
});



