let cambio = document.getElementById('C-D-L')

let fondos = document.querySelectorAll('.light')
let textos = document.querySelectorAll('.light-text') 
let links = document.querySelectorAll('.light-link')
let btns = document.querySelectorAll('.light-btn')
let btns2 = document.querySelectorAll('.light-btn2')
let svgs = document.querySelectorAll('.fig_svg')
let imglog = document.querySelectorAll('.fig_log')
let cards = document.querySelectorAll('.light-card')
let tabs = document.querySelectorAll('.light-tab') 
let borders = document.querySelectorAll('.light-borders') 
let bordersgen = document.querySelectorAll('.light-borders2') 

cambio.addEventListener('click', function() {
    console.log('Hola');

    fondos.forEach(function(elemento) {
        elemento.classList.toggle('dark');
    });
    textos.forEach(function(elemento) {
        elemento.classList.toggle('dark-text');
    });
    links.forEach(function(elemento) {
        elemento.classList.toggle('dark-link');
    });
    btns.forEach(function(elemento) {
        elemento.classList.toggle('dark-btn');
    });
    btns2.forEach(function(elemento) {
        elemento.classList.toggle('dark-btn2');
    });
    svgs.forEach(function(elemento) {
        elemento.classList.toggle('dark-svg');
    });
    imglog.forEach(function(elemento) {
        elemento.classList.toggle('dark-img');
    });
    cards.forEach(function(elemento) {
        elemento.classList.toggle('dark-card');
    });
    tabs.forEach(function(elemento) {
        elemento.classList.toggle('dark-tab');
    });
    borders.forEach(function(elemento) {
        elemento.classList.toggle('dark-borders');
    });
    bordersgen.forEach(function(elemento) {
        elemento.classList.toggle('dark-borders2');
    });
});
