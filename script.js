const menuBtn = document.getElementById("btn-nav-menu") ;
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector(".btn__nav__menu i") ;

//add a click event to the button menu
menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle("open") ;

    const isOpen = navLinks.classList.contains("open") ;
    menuBtnIcon.setAttribute("class" , isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars") ;
});

//add a click event to the links navbare 
navLinks.addEventListener('click' , ()=>{
    navLinks.classList.remove('open') ;
    menuBtnIcon.setAttribute("class" , "fa-solid fa-bars") ;
}) ; 


//scrollReveal

const scrollRevealOption = {
    distance : "50px" ,
    origin : "bottom" ,
    duration : 1000 ,
}
ScrollReveal().reveal(".header__container p",{
    ...scrollRevealOption ,
}) ;
ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOption ,
    delay : 500 ,
}) ;

ScrollReveal().reveal(".imag__about",{
    ...scrollRevealOption ,
    origin:"left"
}) ;
ScrollReveal().reveal(".about__content .section__subheader",{
    ...scrollRevealOption ,
    delay : 500 ,
}) ;
ScrollReveal().reveal(".about__content h2",{
    ...scrollRevealOption ,
    delay : 1000 ,
}) ;
ScrollReveal().reveal(".about__content .section__desc",{
    ...scrollRevealOption ,
    delay : 1500 ,
}) ;
ScrollReveal().reveal(".about__content .btn",{
    ...scrollRevealOption ,
    delay : 2000 ,
}) ;

ScrollReveal().reveal(".grid__cards__room .room__card",{
    ...scrollRevealOption ,
    interval : 500 ,
}) ;
ScrollReveal().reveal(".list__services li",{
    ...scrollRevealOption ,
    origin : "right" ,
    interval : 500 ,
}) ;