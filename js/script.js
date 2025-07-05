const images = [];
let current = 0;

const img = document.getElementById('slider-image');
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const fileInput = document.getElementById('file');
const form = document.getElementById('form');
const error = document.getElementById('error');

function showCurrentImage() {
    img.src = images[current];
    slider.classList.remove('hide');
}
function showPrevious() {
    current = (current - 1 + images.length) % images.length;
    showCurrentImage();
}
function showNext() {
    current = (current + 1) % images.length;
    showCurrentImage();
}

function toggleFullscreen() {
    slider.classList.toggle('fullscreen');
}

/**
 *  Checking the file
  * @param file
 * @returns {boolean}
 */
function isValidImage(file) {
    return file.type.startsWith('image/') && file.size <= 3.1 * 1024 * 1024;
}

/**
 * Обробка форми
 * @param e
 */
form.onsubmit = function (e) {
    e.preventDefault();
    const file = fileInput.files[0];
    if (!file) {
        error.textContent = "Select a file";
        return;
    }
    if (!isValidImage(file)) {
        error.textContent = "Error type or size";
        return;
    }
    error.textContent = "";
    const reader = new FileReader();
    reader.onload = function (e) {
        images.push(e.target.result);
        current = images.length - 1;
        showCurrentImage();
    };
    reader.readAsDataURL(file);
};
/**
 * Initialisation
 * @type {showPrevious}
 */
prevBtn.onclick = showPrevious;
nextBtn.onclick = showNext;
img.onclick = toggleFullscreen;

