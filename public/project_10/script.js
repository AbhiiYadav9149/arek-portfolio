//---------------navigaton-bar----------------//

function open_nav() {
    document.getElementById('nav').style.translate = "102%"
}

function close_nav() {
    document.getElementById('nav').style.translate = "-100%"
}

//-------------header-scroll------------//

function bg_change() {
    nav_bar = document.querySelector('header')

    if (window.scrollY > 50) {
        nav_bar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'
    } else if (window.scrollY < 60) {
        nav_bar.style.backgroundColor = 'transparent'
    }
}

//------------------carousal----------------//

document.addEventListener('DOMContentLoaded', () => {
    const carousal = document.querySelector('.testimonials');
    const slides = carousal.querySelector('.testimonials-slides');
    const items = carousal.querySelectorAll('.testimonials-item');
    const indicators = carousal.querySelectorAll('.testimonials-indicators span');
    let currentIndex = 0;

     // Update active slide
     const updateActiveSlide = (index) => {
        slides.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
    };

    // Indicator click functionality
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateActiveSlide(currentIndex);
        });
    });

    // Auto-slide (optional)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateActiveSlide(currentIndex);
    }, 2500);
});
