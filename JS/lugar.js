function getURLParameters() {
    let params = new URLSearchParams(window.location.search);
    let type = params.get('type');
    let lugar = params.get('place');

    if (type) {
        
    } else {
        type = 0;
        window.location.href = '404.html';
    }

    let btnBackPlace = document.getElementById('back-place');
    btnBackPlace.href = `categoria.html?type=${type}`;
    return { type, lugar };
}

getURLParameters();

function Rutas(type){
    const RUTAS = {
        'restaurants': '../JSON/restaurants.json',
        'culture': '../JSON/culture.json',
        'night': '../JSON/night.json',
        'fun': '../JSON/fun.json',
        'health': '../JSON/health.json'
    }

    return RUTAS[type];
} 

async function loadJSON() {
    try{
        let { type, lugar } = getURLParameters();

        let ruta = Rutas(type);
        console.log('Lugar:' + lugar);

        let archivo = await fetch(`${ruta}`);
        let data = await archivo.json();

        
        let buscarLugar = data.places.find(place => place.name == lugar);

        console.table(buscarLugar);
        
        if (buscarLugar) {
            let image = document.getElementById('image-place');
            let imageLogo = document.getElementById('logo-place');
            let name = document.getElementById('name-place');
            let direction = document.getElementById('direcction-place');
            let description = document.getElementById('description-place');
            let words = document.getElementById('words-place');
            let apertura = document.querySelectorAll('.Hapertura');
            let cierre = document.querySelectorAll('.Hcierre');

            image.src = buscarLugar.img;
            imageLogo.src = buscarLugar.logo;
            name.innerText = buscarLugar.name;
            direction.innerText = buscarLugar.direction;
            description.innerText = buscarLugar.description;

            
            buscarLugar.words.forEach(wordItem => {
                let tag = document.createElement('div');
                tag.classList.add('tags');
                tag.innerText = wordItem.palabra;
                words.appendChild(tag);
            });

            apertura.forEach((aper, index) => {
                if(buscarLugar.horario[index].estado == 'op'){
                    aper.innerText = buscarLugar.horario[index].Hapertura;
                }
                else{
                    aper.innerText = '--'
                }
                
            });

            cierre.forEach((cie, index) => {
                if(buscarLugar.horario[index].estado == 'op'){
                    cie.innerText = buscarLugar.horario[index].Hcierre;
                }
                else{
                    cie.innerText = '--'
                }
            });

        } else {
            console.error('Place not found in JSON');
        }
            
    }
    catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

loadJSON();