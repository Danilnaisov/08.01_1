document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger_menu img");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      burgerMenu.src = "img/burg_menu_active.svg"; // Меняем иконку на активную
    } else {
      burgerMenu.src = "img/burg_menu.svg"; // Возвращаем стандартную иконку
    }
  });
});

//
//
//

const slider = document.querySelector(".card__slider");
const prevButton = document.querySelector(".prev__button");
const nextButton = document.querySelector(".next__button");
const slides = Array.from(slider.querySelectorAll(".card"));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

// Установить начальное состояние
updateSlider();
