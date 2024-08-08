let btn_salir_cuenta = document.getElementById('logout');

btn_salir_cuenta.addEventListener('click', salir);


if (localStorage.getItem('userID') !== null) {
    btn_salir_cuenta.classList.remove('noAccount')
} else {
    btn_salir_cuenta.classList.add('noAccount')
}

function salir(){
    localStorage.removeItem('userID');
}