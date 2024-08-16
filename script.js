// Function to hide all images
function hideAllImages() {
    const images = document.querySelectorAll('.kaedin-image, .chieck-image, .bidan-image, .adam-image, .omar-image');
    images.forEach(img => img.classList.remove('show'));
}

// Function to show a specific image
function showImage(imageClass) {
    hideAllImages(); // Hide all images first
    document.querySelector(`.${imageClass}`).classList.add('show'); // Show the selected image
}

// Event handler for displaying the correct image
function setupClickHandlers(className, imageClass) {
    const buttons = document.getElementsByClassName(className);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => showImage(imageClass);
    }
}

// Setup click handlers for each fun fact
setupClickHandlers('kaedin_fun_fact', 'kaedin-image');
setupClickHandlers('chieck_fun_fact', 'chieck-image');
setupClickHandlers('bidan_fun_fact', 'bidan-image');
setupClickHandlers('adam_fun_fact', 'adam-image');
setupClickHandlers('omar_fun_fact', 'omar-image');
