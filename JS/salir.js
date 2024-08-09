let btn_salir_cuenta = document.getElementById('logout');


btn_salir_cuenta.addEventListener('click', salir);

if (localStorage.getItem('userID') !== null) {
    btn_salir_cuenta.classList.remove('noAccount');
} else {
    btn_salir_cuenta.classList.add('noAccount');
}


let btn_salir_cuentaMobil = document.getElementById('logoutMobil');
btn_salir_cuentaMobil.addEventListener('click', salir);

if (localStorage.getItem('userID') !== null) {
    btn_salir_cuentaMobil.classList.remove('noAccount');
} else {
    btn_salir_cuentaMobil.classList.add('noAccount');
}



function salir(){
    localStorage.removeItem('userID');
}