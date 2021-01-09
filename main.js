const toogleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toogleBtn.addEventListener('click', function() {
    console.log("ddd");
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});