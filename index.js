const grande = document.querySelector("#grande");
let imgs = document.querySelectorAll(".imgs");
let imgsLast = imgs[imgs.length -1];

let left = document.querySelector(".left");
let right = document.querySelector(".right");
const punto = document.querySelectorAll(".punto")
grande.insertAdjacentElement('afterbegin', imgsLast)

function Next() {
let imgsFisrt = document.querySelectorAll(".imgs")[0];
grande.style.marginLeft = "-200%";
grande.style.transition = "0.5s";
setTimeout(function () {
    grande.style.transition = "none";
    grande.insertAdjacentElement('beforeend', imgsFisrt);
}, 500);
}

function prev() {
let imgs = document.querySelectorAll(".imgs");
let imgsLast = imgs[imgs.length -1];
grande.style.marginLeft = "0";
grande.style.transition = "all 0.5s";
setTimeout(function () {
    grande.style.transition = "none";
    grande.insertAdjacentElement('afterbegin', imgsLast)
}, 500);
}
left.addEventListener('click', function(){
    prev();
});

right.addEventListener('click', function(){
    Next();
});
setInterval(function(){
    Next()
}, 5000);