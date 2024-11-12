document.addEventListener("DOMContentLoaded", function() {
    // Geolocation API for displaying user location
    const locationInfo = document.getElementById("location-info");

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                locationInfo.innerHTML = `Your location: Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)}`;
            },
            () => {
                locationInfo.innerHTML = "Location access denied.";
            }
        );
    } else {
        locationInfo.innerHTML = "Geolocation is not supported by your browser.";
    }

    // Project Gallery Toggle
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function() {
            const details = button.nextElementSibling;
            details.style.display = details.style.display === "none" || details.style.display === "" ? "block" : "none";
            button.textContent = details.style.display === "block" ? "Hide Details" : "Show Details";
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById("contact-form");
    const formError = document.getElementById("form-error");

    contactForm.addEventListener("submit", function(event) {
        formError.style.display = "none";
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            formError.textContent = "All fields are required!";
            formError.style.display = "block";
        }
    });

    // Canvas Animation
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.clientWidth;
    canvas.height = 200;

    let xPos = 0;

    function drawAnimation() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0984e3";
        ctx.beginPath();
        ctx.arc(xPos, 100, 30, 0, Math.PI * 2);
        ctx.fill();

        xPos += 2;
        if (xPos > canvas.width) xPos = 0;

        requestAnimationFrame(drawAnimation);
    }
    drawAnimation();
});
