// Snowflake animation effect
document.addEventListener('DOMContentLoaded', () => {
    const numOfSnowflakes = 100; // Adjust number if you want more/less snowflakes
    const body = document.body;

    for (let i = 0; i < numOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';  // Snowflake symbol

        // Random horizontal position for each snowflake
        snowflake.style.left = `${Math.random() * 100}%`; // Random position across the screen
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random falling speed (5-10 seconds)
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay to start falling

        body.appendChild(snowflake);
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Back to Top button
const backToTopButton = document.createElement("button");
backTo
