let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    navbar.classList.add('active');

    if(navbar.classList.contains('active')){
        console.log('Active class was added.');
        console.log(navbar.className);
    } else {
        console.log('Class not added.');
    }
}

closeBtn.onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}