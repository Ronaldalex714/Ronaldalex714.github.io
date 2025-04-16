function startTimer(paymentMethod) {
    // Hide payment options and show timer
    document.querySelector('.payment-options').style.display = 'none';
    const timerDiv = document.getElementById('timer');
    timerDiv.style.display = 'block';

    let timeLeft = 120; // Timer set for 5 seconds
    timerDiv.textContent = `Redirecting to ${paymentMethod} payment... ${timeLeft} seconds remaining`;

    const timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Selected Mode ${paymentMethod} payment... ${timeLeft} seconds remaining`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // Redirect to the payment page (replace 'payment-processing.html' with your actual payment page)
            window.location.href = 'payment-processing.html';
        }
    }, 1000);
}