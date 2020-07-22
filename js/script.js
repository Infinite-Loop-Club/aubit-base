$(document).ready(function () {
  $(".feature").waypoint(
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
      offset: "50%",
    }
  );
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav__list");

  burger.addEventListener("click", () => {
    console.log("clicked");
    nav.classList.toggle("nav-active");
  });
};

navSlide();
