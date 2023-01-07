let slideIndex = 1;
let slides = document.querySelectorAll(".slideshow__item");
let dots = document.querySelectorAll(".slideshow__dot");
let slidePrevButton = document.querySelector('.slideshow__prev');
let slideNextButton = document.querySelector('.slideshow__next');

const nextSlide = (n) => {
    showSlide((slideIndex += n));
};

const currentSlide = (n) => {
    showSlide((slideIndex = n));
};

const showSlide = (index) => {
    if (index > slides.length) {
        slideIndex = 1;
    }

    if (index <= 0) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => {
        item.classList.remove("slideshow__item_active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("slideshow__dot_active");
    });

    slides[slideIndex - 1].classList.add("slideshow__item_active");
    dots[slideIndex - 1].classList.add("slideshow__dot_active");
};

showSlide(slideIndex);

slideNextButton.addEventListener('click', () => {
    nextSlide(1);
});

slidePrevButton.addEventListener('click', () => {
    nextSlide(-1);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide(i + 1);
    });
});
