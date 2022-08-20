window.addEventListener("load", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
      return;
    menu && menu.classList.remove("is-show");
  }
});
window.addEventListener("load", function () {
  const sliderItems = document.querySelectorAll(".testimonial-item");
  const sliderItemWidth = sliderItems[0].clientWidth;
  console.log("sliderItemWidth", sliderItemWidth);
  const slider = document.querySelector(".testimonial-list");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  let positionX = 0;
  let index = 0;
  arrowRight.addEventListener("click", function () {
    arrowLeft.classList.remove("disabled");
    if (index >= sliderItems.length - 1) {
      this.classList.add("disabled");
      return;
    }
    positionX += sliderItemWidth;
    index++;
    slider.setAttribute("style", `transform:translateX(-${positionX}px);`);
  });
  arrowLeft.addEventListener("click", function () {
    arrowRight.classList.remove("disabled");

    if (index <= 0) {
      this.classList.add("disabled");
      return;
    }
    positionX -= sliderItemWidth;
    index--;
    slider.setAttribute("style", `transform:translateX(-${positionX}px);`);
  });
});