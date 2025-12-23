// Slideshow (only run if there are slides)
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    let currentIndex = 0;
    slides[currentIndex].classList.add('active');

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        slides[currentIndex].classList.add('exit-left');

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.remove('exit-left');
        slides[currentIndex].classList.add('active');
    }, 10000);
}

// pushdown content
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
const dropdown = item.querySelector('.dropdown');
if(dropdown){
    item.addEventListener('mouseenter', () => {
    document.querySelector('.main-content').style.transform = 'translateY(100px)';
    });
    item.addEventListener('mouseleave', () => {
    document.querySelector('.main-content').style.transform = '';
    });
}
});