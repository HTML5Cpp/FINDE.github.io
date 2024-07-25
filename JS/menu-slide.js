let menu = document.getElementById('menu-slide');
let btnCerrar = document.getElementById('close-nav')
let btnAbrir= document.getElementById('open-nav')

btnCerrar.addEventListener('click', ocultar);
btnAbrir.addEventListener('click', mostrar);

btnCerrar.classList.add('ocultar-nav');
menu.classList.add('regresar-nav');

function ocultar(){
    menu.classList.add('regresar-nav');
    menu.classList.remove('mover-nav');

    btnAbrir.classList.add('mostrar-nav');
    btnAbrir.classList.remove('ocultar-nav');

    btnCerrar.classList.add('ocultar-nav');
    btnCerrar.classList.remove('mostrar-nav');
}

function mostrar(){
    menu.classList.add('mover-nav');
    menu.classList.remove('regresar-nav');

    btnAbrir.classList.add('ocultar-nav');
    btnAbrir.classList.remove('mostrar-nav');

    btnCerrar.classList.add('mostrar-nav');
    btnCerrar.classList.remove('ocultar-nav');
}

