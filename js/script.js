$(document).ready(function () {
    $(".feature").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
            $(".nav-container").css("padding", "1.5rem 0");
        } else {
            $("nav").removeClass("sticky");
            $(".nav-container").css("padding", "3rem 0");
        }
    }, {
        offset: '50%'
    });
});
