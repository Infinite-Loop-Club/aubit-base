$(document).ready(function () {
  $("nav").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $(".nav-container").css("padding", "1.5rem 0");
      } else {
        $("nav").removeClass("sticky");
        $(".nav-container").css("padding", "3rem 0");
      }
    },
    {
      offset: "-10rem",
    }
  );
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__list");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    document.querySelector("nav").classList.toggle("white-bg");
    document.querySelector(".burger__line").classList.toggle("toggle");
  });
};

navSlide();
