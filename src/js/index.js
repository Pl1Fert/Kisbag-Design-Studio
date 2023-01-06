let [fileName] = location.pathname.split("/").slice(-1);
let footerNavbarLinks = document.querySelectorAll('.footer-navbar__link');
let modalLinks = document.querySelectorAll('.modal__link');

footerNavbarLinks.forEach((link) => {
    if(link.getAttribute('href') === fileName) {
        link.classList.add('footer-navbar__link_active-page');
    }
});

modalLinks.forEach((link) => {
    if(link.getAttribute('href') === fileName) {
        link.classList.add('modal__link_active-page');
    }
});