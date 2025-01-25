window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Cambia "50" al valor que prefieras
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

