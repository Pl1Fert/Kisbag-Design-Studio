let items = document.querySelectorAll(".reveal");

window.onload = () =>
    items.forEach((item) => {
        item.classList.add("active");
    });
