'use strict';
// varibles
const text = document.getElementById('text');
const leaft = document.getElementById('leaft');
const hill1 = document.getElementById('hill1');
const hill4 = document.getElementById('hill4');
const hill5 = document.getElementById('hill5');
// limitations for user scroll
let limit = document.body.offsetHeight - window.innerHeight;

// function
/**
 * effevt for scroll on images & text
 */
window.addEventListener("scroll", (e) => {
    // get value of scrollY
    let value = window.scrollY;
    // set condition to don't scroll more that limitation
    if (limit > value) {
        // set effect on images & text when user scrolls down & up
        text.style.marginTop = value * 2.5 + "px";
        leaft.style.top = value * -1.5 + "px";
        leaft.style.left = value * 1.5 + "px";
        hill1.style.top = value * 1 + "px";
        hill4.style.left = value * -1.5 + "px";
        hill5.style.left = value * 1.5 + "px";
    }

});