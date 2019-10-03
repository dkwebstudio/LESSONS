'use strict';

let menuItems = document.querySelectorAll('.menu-item'),
    menuBlock = document.querySelector('.menu');

menuBlock.insertBefore(menuItems[2], menuItems[1]);


let newMenuItem = document.createElement('li');
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = "Пятый пункт";

menuBlock.appendChild(newMenuItem);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

document.getElementById("title").textContent = "Мы продаем только подлинную технику Apple";


document.getElementsByClassName('adv')[0].remove();

let answer = prompt('Ваше отношение к технике Apple', '');

document.getElementById("prompt").textContent = answer;