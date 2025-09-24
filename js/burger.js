const burgerToggle = document.querySelector("#burger-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const overlay = document.querySelector("#overlay");
const body = document.querySelector("body");

burgerToggle.addEventListener("click", () => {
    burgerToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    window.scrollTo(0, 0);
    body.style.overflow = body.style.overflow === "hidden" ? "" : "hidden";
});
window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
        burgerToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        body.style.overflow = "";
    }
});
