'use strict';

const menuButton= document.querySelector('.nav-trigger');
const nav= document.querySelector('.nav');
const closeBtn= document.querySelector('.nav-close');

function handleMenu () {
    nav.classList.toggle('show');
    menuButton.classList.toggle('hide');
}

menuButton.addEventListener('click', handleMenu);
closeBtn.addEventListener('click', handleMenu);

