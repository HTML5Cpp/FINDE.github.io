let usuario = document.getElementById('show-user');
let restaurante = document.getElementById('show-rest');

let formUsuario = document.getElementById('form-usuario');
let formRestaurante = document.getElementById('form-restaurante');

let alerta = document.querySelectorAll('.alerta')
let inputsF = document.getElementsByTagName('input')

const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

formRestaurante.classList.toggle('ocultar', true);

usuario.addEventListener('change', function() {
    if (usuario.checked) {
        formUsuario.classList.toggle('ocultar', false);
        formRestaurante.classList.toggle('ocultar', true);   

    }
    limpiado()
});


restaurante.addEventListener('change', function() {
    if (restaurante.checked) {
        formRestaurante.classList.toggle('ocultar', false);
        formUsuario.classList.toggle('ocultar', true);
    }
    limpiado()
});

function limpiado() {
    Array.from(inputsF).forEach(function(input5) {
        input5.value = '';
    });

    alerta.forEach(function(alert) {
        alert.innerText = '¿Tienes problemas para ingresar?'
        alert.classList.toggle('alertaGOOD', false);
        alert.classList.toggle('alertaBAD', false);
    });
}