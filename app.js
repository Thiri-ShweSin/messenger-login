const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const container = document.querySelector(".container");
const footer = document.querySelector(".footer");

window.addEventListener("scroll",()=> {
    if(window.pageYOffset>0)
        document.querySelector("header").style.borderBottom = "1px solid rgba(0, 0, 0, .1)";
    else
        document.querySelector("header").style.borderBottom = "none";
})

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    container.classList.toggle("hidden");
    footer.classList.toggle("hidden");
})