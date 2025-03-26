document.addEventListener("DOMContentLoaded", () => {
    // Resaltado de la sección activa
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Animación de entrada para la sección Hero
    const heroText = document.querySelector(".hero-content h2");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
        heroText.style.transition = "all 1s ease-in-out";
    }, 500);
});
