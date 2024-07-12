let currentSlide = 0;
const slides = document.querySelectorAll("#slideShow .slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            setTimeout(() => {
                slide.classList.add('active');
            }, 50); // Add a slight delay to allow the fade-out effect
        }
    });
};

function nextSlide() {
    slides[currentSlide].classList.remove('active'); // Start fade-out effect
    setTimeout(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide); // Show next slide with fade-in effect
    }, 500); // Adjust delay to match the fade-out transition duration
};

// Initialize the slideshow
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds

