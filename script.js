document.addEventListener('DOMContentLoaded', () => {
    // Project gallery toggle functionality
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === 'none') {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            } else {
                details.style.display = 'none';
                button.textContent = 'Show Details';
            }
        });
    });

    // Contact form validation
    const form = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Validate fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            errorMessage.textContent = "All fields must be filled!";
        } else {
            // You could add more validation for email format here
            errorMessage.textContent = "";
            // Submit the form or process the data here
            console.log('Form submitted');
        }
    });
});
