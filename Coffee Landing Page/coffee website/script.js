document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero .content h1');

    // Add event listeners for hover effect
    heroTitle.addEventListener('mouseover', () => {
        heroTitle.style.transform = 'translateX(-20px)'; // Move the H1 20px to the left
        heroTitle.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
    });

    heroTitle.addEventListener('mouseout', () => {
        heroTitle.style.transform = 'translateX(0)'; // Move back to original position
    });
});
