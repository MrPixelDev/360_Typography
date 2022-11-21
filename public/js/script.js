// import $ from "jquery";

$(document).ready(function () {
  $(".slider-review").slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    easing: "ease",
  });
});

$(document).ready(function () {
  $(".slider-customers").slick({
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    easing: "ease",
  });
});

$(document).ready(function () {
  $(".menu__burger").click(function (event) {
    console.log(1);
    $(".menu__burger,.nav__ul").toggleClass("active");
  });
});

$(document).ready(function () {
  $("menu__burger").click(function (event) {
    $(".menu__burger").toggleClass("active");
  });
});

let dropdown = document.getElementsByClassName("nav__li");
let dropdownItems = document.getElementsByClassName("dropdown__item");

document.addEventListener("DOMContentLoaded", () => {
  for (let j = 0; j < dropdownItems.length; j++) {
    dropdownItems[j].addEventListener("click", () => {
      let dropdownMenuElement = dropdownItems[j];
      dropdownMenuElement.classList.toggle("transparent_layer--30");
    });
  }

  for (let j = 0; j < dropdownItems.length; j++) {
    dropdownItems[j].addEventListener("mousedown", () => {
      let dropdownMenuElement = dropdownItems[j];
      dropdownMenuElement.classList.toggle("transparent_layer--30");
    });
  }

  for (let j = 0; j < dropdownItems.length; j++) {
    dropdownItems[j].addEventListener("mouseup", () => {
      let dropdownMenuElement = dropdownItems[j];
      dropdownMenuElement.classList.remove("transparent_layer--30");
    });
  }

  for (let j = 0; j < dropdownItems.length; j++) {
    dropdownItems[j].addEventListener("mouseenter", () => {
      let dropdownMenuElement = dropdownItems[j];
      dropdownMenuElement.classList.toggle("transparent_layer--30");
    });
  }

  for (let j = 0; j < dropdownItems.length; j++) {
    dropdownItems[j].addEventListener("mouseleave", () => {
      let dropdownMenuElement = dropdownItems[j];
      dropdownMenuElement.classList.remove("transparent_layer--30");
    });
  }

  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", () => {
      let menuElement = document.getElementsByClassName("nav__li")[i];
      let dropdownContainer =
        document.getElementsByClassName("dropdown-container")[i];

      // why is it block by default?

      if (dropdownContainer.style.display === "block") {
        dropdownContainer.style.display = "none";
        menuElement.classList.remove("transparent_layer--30");
      } else {
        dropdownContainer.style.display = "block";
        menuElement.classList.toggle("transparent_layer--30");
      }
    });
    dropdown[i].addEventListener("mouseenter", () => {
      let menuElement = document.getElementsByClassName("nav__li")[i];
      menuElement.classList.toggle("transparent_layer--30");
      if (i < 4) {
        let dropdownContainer =
          document.getElementsByClassName("dropdown-container")[i];
        dropdownContainer.style.display = "block";
      }
    });
    dropdown[i].addEventListener("mouseleave", () => {
      let menuElement = document.getElementsByClassName("nav__li")[i];
      menuElement.classList.remove("transparent_layer--30");

      if (i < 4) {
        let dropdownContainer =
          document.getElementsByClassName("dropdown-container")[i];
        dropdownContainer.style.display = "none";
      }
    });
  }
});
