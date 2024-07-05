const mobileMenu = document.getElementById('mobile-menu');
let display = 0;

function hideShow() {
    if (display == 1) {
        mobileMenu.style.display = 'none';
        display = 0;
    } else {
        mobileMenu.style.display = 'block';
        display = 1;
    }
}
