// //DARK THEME
const container = document.querySelector(".container");
const toggle = document.querySelector(".header__theme");
const headerLogo = document.querySelector(".header__logo");

toggle.addEventListener("click", (event) => {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        headerLogo.src = ".././img/white-logo1.webp";
    } else {
        headerLogo.src = ".././img/logo1.webp";
    }
});
