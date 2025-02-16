const point__one = document.querySelector(".point__one");
const point__two = document.querySelector(".point__two");
const point__three = document.querySelector(".point__three");
const arrLeft = document.querySelector(".arrLeft");
const arrRight = document.querySelector(".arrRight");
const img__one = document.querySelector(".img__one");
const img__two = document.querySelector(".img__two");
const img__three = document.querySelector(".img__three");
const cityList = document.querySelector(".list__city");
const cityItems = cityList.querySelectorAll(".main__item");
const arenaList = document.querySelector(".list__area");
const arenaItems = arenaList.querySelectorAll(".main__item");
const timeList = document.querySelector(".list__time");
const timeItems = timeList.querySelectorAll(".main__item");
const header__list = document.querySelector(".header__list");
const headerIten = header__list.querySelectorAll(".header__item");

img__two.style.display = "none";
img__three.style.display = "none";

arrLeft.addEventListener("click", () => {
  pressLeft();
});

arrRight.addEventListener("click", () => {
  pressRight();
});

headerIten[0].addEventListener("click", () => {
  cityItems[0].textContent = "Rostov-on-Don";
  cityItems[1].textContent = "LCD admiral";
  arenaItems[0].textContent = "81 m2";
  timeItems[0].textContent = "3.5 months";

  headerIten[0].classList.add("header__item-home");
  headerIten[2].classList.remove("header__item-home");
  headerIten[1].classList.remove("header__item-home");

  img__three.style.display = "none";
  img__two.style.display = "none";
  img__one.style.display = "block";

  point__one.style.backgroundImage = `url("img/The point is painted.png")`;
  point__two.style.backgroundImage = `url("img/The point.png")`;
  point__three.style.backgroundImage = `url("img/The point.png")`;
});

headerIten[1].addEventListener("click", () => {
  cityItems[0].textContent = "Sochi";
  cityItems[1].textContent = "Thieves";
  arenaItems[0].textContent = "105 m2";
  timeItems[0].textContent = "4 months";

  headerIten[0].classList.remove("header__item-home");
  headerIten[2].classList.remove("header__item-home");
  headerIten[1].classList.add("header__item-home");

  img__one.style.display = "none";
  img__three.style.display = "none";
  img__two.style.display = "block";

  point__one.style.backgroundImage = `url("img/The point.png")`;
  point__two.style.backgroundImage = `url("img/The point is painted.png")`;
  point__three.style.backgroundImage = `url("img/The point.png")`;
});

headerIten[2].addEventListener("click", () => {
  cityItems[0].textContent = "Rostov-on-Don";
  cityItems[1].textContent = "Patriotic";
  arenaItems[0].textContent = "93 m2";
  timeItems[0].textContent = "3 months";

  headerIten[0].classList.remove("header__item-home");
  headerIten[2].classList.add("header__item-home");
  headerIten[1].classList.remove("header__item-home");

  img__two.style.display = "none";
  img__one.style.display = "none";
  img__three.style.display = "block";

  point__one.style.backgroundImage = `url("img/The point.png")`;
  point__two.style.backgroundImage = `url("img/The point.png")`;
  point__three.style.backgroundImage = `url("img/The point is painted.png")`;
});

function pressLeft() {
  if (img__one.style.display === "block" || img__one.style.display === "") {
    cityItems[0].textContent = "Rostov-on-Don";
    cityItems[1].textContent = "Patriotic";
    arenaItems[0].textContent = "93 m2";
    timeItems[0].textContent = "3 months";

    headerIten[0].classList.remove("header__item-home");
    headerIten[2].classList.add("header__item-home");
    headerIten[1].classList.remove("header__item-home");

    img__one.style.display = "none";
    img__three.style.display = "block";

    point__one.style.backgroundImage = `url("img/The point.png")`;
    point__two.style.backgroundImage = `url("img/The point.png")`;
    point__three.style.backgroundImage = `url("img/The point is painted.png")`;
  } else if (img__three.style.display === "block") {
    cityItems[0].textContent = "Sochi";
    cityItems[1].textContent = "Thieves";
    arenaItems[0].textContent = "105 m2";
    timeItems[0].textContent = "4 months";

    headerIten[0].classList.remove("header__item-home");
    headerIten[2].classList.remove("header__item-home");
    headerIten[1].classList.add("header__item-home");

    img__three.style.display = "none";
    img__two.style.display = "block";

    point__one.style.backgroundImage = `url("img/The point.png")`;
    point__two.style.backgroundImage = `url("img/The point is painted.png")`;
    point__three.style.backgroundImage = `url("img/The point.png")`;
  } else if (img__two.style.display === "block") {
    cityItems[0].textContent = "Rostov-on-Don";
    cityItems[1].textContent = "LCD admiral";
    arenaItems[0].textContent = "81 m2";
    timeItems[0].textContent = "3.5 months";

    headerIten[0].classList.add("header__item-home");
    headerIten[2].classList.remove("header__item-home");
    headerIten[1].classList.remove("header__item-home");

    img__two.style.display = "none";
    img__one.style.display = "block";

    point__one.style.backgroundImage = `url("img/The point is painted.png")`;
    point__two.style.backgroundImage = `url("img/The point.png")`;
    point__three.style.backgroundImage = `url("img/The point.png")`;
  }
}

function pressRight() {
  if (img__one.style.display === "block" || img__one.style.display === "") {
    cityItems[0].textContent = "Sochi";
    cityItems[1].textContent = "Thieves";
    arenaItems[0].textContent = "105 m2";
    timeItems[0].textContent = "4 months";

    headerIten[0].classList.remove("header__item-home");
    headerIten[2].classList.remove("header__item-home");
    headerIten[1].classList.add("header__item-home");

    img__one.style.display = "none";
    img__two.style.display = "block";

    point__one.style.backgroundImage = `url("img/The point.png")`;
    point__two.style.backgroundImage = `url("img/The point is painted.png")`;
    point__three.style.backgroundImage = `url("img/The point.png")`;
  } else if (img__two.style.display === "block") {
    cityItems[0].textContent = "Rostov-on-Don";
    cityItems[1].textContent = "Patriotic";
    arenaItems[0].textContent = "93 m2";
    timeItems[0].textContent = "3 months";

    headerIten[0].classList.remove("header__item-home");
    headerIten[2].classList.add("header__item-home");
    headerIten[1].classList.remove("header__item-home");

    img__two.style.display = "none";
    img__three.style.display = "block";

    point__one.style.backgroundImage = `url("img/The point.png")`;
    point__two.style.backgroundImage = `url("img/The point.png")`;
    point__three.style.backgroundImage = `url("img/The point is painted.png")`;
  } else if (img__three.style.display === "block") {
    cityItems[0].textContent = "Rostov-on-Don";
    cityItems[1].textContent = "LCD admiral";
    arenaItems[0].textContent = "81 m2";
    timeItems[0].textContent = "3.5 months";

    headerIten[0].classList.add("header__item-home");
    headerIten[2].classList.remove("header__item-home");
    headerIten[1].classList.remove("header__item-home");

    img__three.style.display = "none";
    img__one.style.display = "block";

    point__one.style.backgroundImage = `url("img/The point is painted.png")`;
    point__two.style.backgroundImage = `url("img/The point.png")`;
    point__three.style.backgroundImage = `url("img/The point.png")`;
  }
}
