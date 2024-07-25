document.addEventListener('DOMContentLoaded', function() {
    // Obtener los botones por su ID
    let boton1 = document.getElementById('image-user-btn');
    let boton2 = document.getElementById('UserPicture');

    // Agregar un evento de clic al primer botón
    boton1.addEventListener('click', function() {
        // Simular un clic en el segundo botón
        boton2.click();
    });
});