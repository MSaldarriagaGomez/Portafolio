window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Cambia "50" al valor que prefieras
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    menuToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("active");
    });
});
