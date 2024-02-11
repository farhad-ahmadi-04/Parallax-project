/**
 * 'use strict' => It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict"
is to indicate that the code should be executed in "strict mode".
With strict mode, you can not,
for example, use undeclared variables.
 */
"use strict";
/**
 * This project includes several sections, in each section you will see different examples of parallax.
 * Date : Wed Feb 07 2024 11:28:43 GMT+0330 (Iran Standard Time)
 * owner : Farhad Ahmadi
 * References : https://www.w3schools.com/howto/howto_css_parallax.asp
 */
// Variables
let section_Count = document.querySelector(".section-count>li:first-of-type");
const header = document.querySelector("header");
const text = document.querySelector(".parallax>span")
// events
window.addEventListener("scroll", srolling)
// function
function srolling(e) {
    if (window.scrollY > 0) {
        header.style.top = (window.scrollY * (-1)) + "px"
    }
}