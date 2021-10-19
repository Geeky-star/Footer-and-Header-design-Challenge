const Header = document.getElementById('header')

window.onscroll = function() {
    if (window.scrollY >= 80) {
        Header.classList.add("active")
    }
    else {
        Header.classList.remove("active")
    }
}

document.getElementById('year').innerText = new Date().getFullYear()