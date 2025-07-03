const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg'
];

let current = 0;
const img = document.getElementById('slider-image');
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Показує зображення за поточним індексом
function showCurrentImage() {
    img.src = images[current];
}

function showPrevious() {
    current = (current - 1 + images.length) % images.length;
    showCurrentImage();
}

function showNext() {
    current = (current + 1) % images.length;
    showCurrentImage();
}

// Перемикає повноекранний режим
function toggleFullscreen() {
    slider.classList.toggle('fullscreen');
}

// Прив’язуємо обробники подій
function initSlider() {
    prevBtn.onclick = showPrevious;
    nextBtn.onclick = showNext;
    img.onclick = toggleFullscreen;
    showCurrentImage();
}

initSlider();