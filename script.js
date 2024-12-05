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
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".card__slider");
  const dots = document.querySelectorAll(".card__explorer .dot");

  slider.addEventListener("scroll", () => {
    const cardWidth = slider.scrollWidth / dots.length; // Ширина одного "слайда"
    const scrollLeft = slider.scrollLeft; // Текущее смещение

    // Определяем индекс текущего слайда
    const activeIndex = Math.round(scrollLeft / cardWidth);

    // Переключаем активный класс у точек
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.parentNode.classList.add("selected");
      } else {
        dot.parentNode.classList.remove("selected");
      }
    });
  });
});
