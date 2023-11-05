const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("acitve");
    navMenu.classList.remove('active');
}))