const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks");
    const bg = document.querySelector(".navbar-darkBG");

    burger.addEventListener("click", () => {
       nav.classList.toggle("navActive");
       burger.classList.toggle("change");
       bg.classList.toggle("show");

    });

    bg.addEventListener("click", () => {
        nav.classList.toggle("navActive");
        burger.classList.toggle("change");
        bg.classList.remove("show");
    });
}

navSlide();

$(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 0);
});