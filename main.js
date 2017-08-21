/*jslint plusplus: true */

var images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
];


var num = 0;

function next() {
    "use strict";
    var slider = document.getElementById("slider_img");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    "use strict";
    var slider = document.getElementById("slider_img");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}