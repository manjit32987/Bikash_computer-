// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = '#ffffff';
        navLinks.style.padding = '1.5rem 0';
        navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
        navLinks.style.textAlign = 'center';
        
        const links = navLinks.querySelectorAll('li');
        links.forEach(link => link.style.margin = '15px 0');
    }
});

// 2. Auto-Playing Image Slider Logic
const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function nextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

// Changes image every 3.5 seconds
if(slides.length > 0) {
    setInterval(nextSlide, 3500); 
}