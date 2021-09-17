const navToggle=document.querySelector(".nav-toggle");
const list=document.querySelector(".nav__list");
navToggle.addEventListener("click",function(){
    list.classList.toggle('show-links');
})