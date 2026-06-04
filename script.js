console.log("Website geladen");

// Fade-in animatie
const sections = document.querySelectorAll(".info-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold:0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// Actieve navigatie-link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

let lastScroll = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){

        navbar.style.transform =
        "translateX(-50%) translateY(-120px)";

    } else {

        navbar.style.transform =
        "translateX(-50%) translateY(0)";
    }

    lastScroll = currentScroll;

});

});