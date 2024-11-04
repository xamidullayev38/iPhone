const   menuBtn = document.querySelector('.menu-btn');
    menuContent = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuContent.classList.toggle('d-none');
    menuContent.classList.add('showAnimate');
});
