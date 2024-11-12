document.addEventListener('DOMContentLoaded', () => {
    // Toggle project details visibility
    const toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        const isHidden = details.style.display === 'none' || details.style.display === '';
        details.style.display = isHidden ? 'block' : 'none';
        button.textContent = isHidden ? 'Hide Details' : 'Show Details';
      });
    });
  
    // Form validation
    const form = document.getElementById('contact-form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
  
    const validateField = (field, message) => {
      const errorMessage = field.nextElementSibling;
      if (field.value.trim() === '') {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        return false;
      }
      errorMessage.style.display = 'none';
      return true;
    };
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const isNameValid = validateField(nameField, 'Please enter your name.');
      const isEmailValid = validateField(emailField, 'Please enter a valid email.');
      const isMessageValid = validateField(messageField, 'Please enter your message.');
  
      if (isNameValid && isEmailValid && isMessageValid) {
        alert('Message sent successfully!');
        form.reset();
      }
    });
  
    // Custom Greeting Based on User Location
    const displayLocationGreeting = (city, country) => {
      const locationGreeting = document.getElementById('location-greeting');
      locationGreeting.textContent = `Hello from ${city}, ${country}! We look forward to connecting with you.`;
    };
  
    const fetchLocationDetails = (latitude, longitude) => {
      const apiKey = 'YOUR_API_KEY_HERE';  // Replace with your API key
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&lat=${latitude}&long=${longitude}`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const city = data.city;
          const country = data.country_name;
          displayLocationGreeting(city, country);
        })
        .catch(error => {
          console.error('Error fetching location details:', error);
        });
    };
  
    const useGeolocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchLocationDetails(latitude, longitude);
          },
          () => {
            const locationGreeting = document.getElementById('location-greeting');
            locationGreeting.textContent = 'Hello! We look forward to connecting with you.';
          }
        );
      } else {
        const locationGreeting = document.getElementById('location-greeting');
        locationGreeting.textContent = 'Hello! We look forward to connecting with you.';
      }
    };
  
    // Call the Geolocation function on load
    useGeolocation();
  });
  