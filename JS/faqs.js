document.querySelectorAll('.detalles').forEach(detalle => {
    detalle.addEventListener('click', () => {
        const textDetalles = detalle.querySelector('.text-detalles');
        const iconInteraction = detalle.querySelector('.icon-interaction');
        textDetalles.style.height = '0';
        if (textDetalles.classList.contains('mostrar-text')) {
            textDetalles.classList.remove('mostrar-text');
            iconInteraction.classList.remove('giro');
            textDetalles.style.height = '0';
        } else {
            textDetalles.classList.add('mostrar-text');
            iconInteraction.classList.add('giro');
            textDetalles.style.height = `${textDetalles.scrollHeight}px`;
        }
    });
});