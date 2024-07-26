
let banner = document.getElementById('banner-SinCuenta');

if (localStorage.getItem('userID') !== null) {
    banner.classList.add('ocultar-form')
} else {
    banner.classList.remove('ocultar-form')
}

