const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navLinks");
    const navLink = document.querySelectorAll(".navLink a");
    const bg = document.querySelector(".navbar-darkBG");

    burger.addEventListener("click", () => {
       nav.classList.toggle("navActive");
       burger.classList.toggle("change");
       bg.classList.toggle("show");

    });

    bg.addEventListener("click", () => {
        nav.classList.toggle("navActive");
        burger.classList.toggle("change");
        bg.classList.toggle("show");
    });

    navLink.forEach((navLink) => {
        navLink.addEventListener("click", () => {
            nav.classList.toggle("navActive");
            burger.classList.toggle("change");
            bg.classList.toggle("show");
        });
    });
}

navSlide();

const scroll = () => {
    const navbar = $("nav");

    if (navbar.scrollTop() > 0) {
        navbar.classList.add("scrolled");
    }
}



$(window).scroll(function () {
    $("nav").toggleClass("scrolled", $(this).scrollTop() > 0);
});

scroll();






