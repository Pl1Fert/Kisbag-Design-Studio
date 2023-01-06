let [fileName] = location.pathname.split("/").slice(-1);
let footerNavbarLinks = document.querySelectorAll(".footer-navbar__link");
let modalLinks = document.querySelectorAll(".modal__link");

footerNavbarLinks.forEach((link) => {
    if (link.getAttribute("href") === fileName) {
        link.classList.add("footer-navbar__link_active-page");
    }
});

modalLinks.forEach((link) => {
    if (link.getAttribute("href") === fileName) {
        link.classList.add("modal__link_active-page");
    }
});

let openModalButton = document.querySelector(".open-modal-button");
let closeModalButton = document.querySelector(".close-modal-button");
let modal = document.querySelector(".modal");

openModalButton.addEventListener("click", () => {
    modal.classList.add("modal_open");
});

closeModalButton.addEventListener("click", () => {
    modal.classList.remove("modal_open");
});
