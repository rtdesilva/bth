// Countdown Timer
function updateCountdown() {
    const countDownDate = new Date("June 15, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format with leading zeros
    const formatTime = (time) => String(time).padStart(2, '0');

    document.getElementById("countdown-timer").innerHTML = `
        ${days} DAYS : ${formatTime(hours)} HOURS : ${formatTime(minutes)} MINUTES : ${formatTime(seconds)} SECONDS
    `;

    if (distance < 0) {
        document.getElementById("countdown-timer").innerHTML = "Event Started!";
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();

// Toggle Menu Function (for navbar)
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

//////

document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript Loaded'); // Debugging log

    // Email Subscribe Form
    const emailSignupForm = document.getElementById('email-signup-form');
    if (emailSignupForm) {
        emailSignupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailInput = document.getElementById('email-input');
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailValue) {
                alert('Please enter your email address.');
                emailInput.focus();
                return;
            } else if (!emailPattern.test(emailValue)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }

            alert('Thank you for subscribing! You will receive updates soon.');
            emailInput.value = '';
        });
    }
});



