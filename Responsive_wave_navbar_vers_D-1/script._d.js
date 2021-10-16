// Javascript for make navbar responsive
let openMenu = document.getElementsByClassName('fa-bars')[0]
let closeMenu = document.getElementsByClassName('fa-times')[0]
let navlinks = document.getElementsByClassName('nav-links')[0]

openMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("0")
});

closeMenu.addEventListener('click', ()=>{
    navlinks.style.left = ("100%")
});





