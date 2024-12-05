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

const cardContainer = document.getElementById(".card__wrapper2");
let isDragging = false;
let startX;
let scrollLeft;

cardContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - cardContainer.offsetLeft;
  scrollLeft = cardContainer.scrollLeft;
  cardContainer.classList.add("active");
});

cardContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  cardContainer.classList.remove("active");
});
cardContainer.addEventListener("mouseup", () => {
  isDragging = false;
  cardContainer.classList.remove("active");
});
cardContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - cardContainer.offsetLeft;
  const walk = (x - startX) * 1.5;
  cardContainer.scrollLeft = scrollLeft - walk;
});
