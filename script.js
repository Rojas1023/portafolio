document.addEventListener("DOMContentLoaded", () => {
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

    const heroText = document.querySelector(".hero-content h2");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
        heroText.style.transition = "all 1s ease-in-out";
    }, 500);
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
