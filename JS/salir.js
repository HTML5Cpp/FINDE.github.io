let btn_salir_cuenta = document.getElementById('logout').addEventListener('click', salir);

function salir(){
    localStorage.removeItem('userID');
}