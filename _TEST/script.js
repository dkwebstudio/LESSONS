'use strict';

let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    function bgColor(a, b) {
        a.style.backgroundColor = b;
    }
    bgColor(this, 'red');
});