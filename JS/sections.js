let sections = document.querySelectorAll('.user-sec')
let usforms = document.querySelectorAll('.usform')


sections.forEach((section, index) => {
    section.addEventListener('click', () => {
        if (!section.classList.contains('user-active')) {
            sections.forEach(section2 => {
                section2.classList.remove('user-active');
            });
            section.classList.add('user-active');
        }

        let pos = index;

        formsUpdate(pos);
    });
});

function formsUpdate(pos){
    
    usforms.forEach(form => {
        form.classList.remove('mostra-form');
        form.classList.add('ocultar-form');
    });  

    usforms[pos].classList.add('mostra-form');
    usforms[pos].classList.remove('ocultar-form');
}