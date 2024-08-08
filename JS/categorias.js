
function getURLParameters() {
    let params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    if (type) {
        console.log(type);
    } else {
        type = 0;
        window.location.href = '404.html';
    }

    return type;
}

getURLParameters();


function Rutas(type){
    const RUTAS = {
        'restaurants': '/JSON/restaurants.json',
        'culture': '/JSON/culture.json',
        'night': '/JSON/night.json',
        'fun': 'JSON/fun.json',
        'health': '../JSON/health.json'
    }

    let tipo = RUTAS[type];
    return tipo;
} 

function HeaderInformation(type, category){
    const INFO = {
        'restaurants': { header: 'fondo-restaurants', title: 'Restaurantes' },
        'culture': { header: 'fondo-culture', title: 'Cultura y Arte' },
        'night': { header: 'fondo-night', title: 'Vida nocturna' },
        'fun': { header: 'fondo-fun', title: 'Recreación y Diversión' },
        'health': { header: 'fondo-health', title: 'Salud y Bienestar' },
    };

    return INFO[type][category];
} 


async function loadJSON() {
    try{
        let type = getURLParameters();
        let ruta = Rutas(type);

        let headerColor = HeaderInformation(type, 'header');
        let textTitles = HeaderInformation(type, 'title');

        let archivo = await fetch(`${ruta}`);
        let data = await archivo.json();

        let contenedor = document.getElementById('categoria_contenedor_principal');

        let header = document.getElementById('header-categoria-background')
        header.classList.add(headerColor)
        let textoH = document.getElementById('text-header-categoria-background')
        textoH.innerText = textTitles;

        data.places.forEach(place => {

            //? CONTENEDOR
                let placeContainer = document.createElement('a');
                placeContainer.classList.add('carousel-slide');
                placeContainer.classList.add('trans');
                placeContainer.href = `lugar.html?type=${type}&place=${place.name}`;
            //? CONTENEDOR

            //* INFORMACIÓN
                let imageBack = document.createElement('img');
                imageBack.classList.add('card-img-back');
                imageBack.classList.add('trans');
                imageBack.src = place.img;
                imageBack.alt = 'Imagen alusiva al lugar';
                
                let gradient = document.createElement('div');
                gradient.classList.add('card-gradient-back');
                gradient.classList.add('trans');

                
                let figureLogo = document.createElement('figure');
                figureLogo.classList.add('card-carrusel-logo');

                    let imgLogo = document.createElement('img');
                    imgLogo.classList.add('card-logo');
                    imgLogo.src = place.logo;
                    imgLogo.alt = 'Logo del lugar';

                    let namePlace = document.createElement('h4');
                    namePlace.classList.add('card-carrusel-text');
                    namePlace.classList.add('trans');
                    namePlace.textContent = place.name;

                let diccPlace = document.createElement('div');
                diccPlace.classList.add('card-carrusel-info');

                    let diccPlaceText = document.createElement('p');
                    diccPlaceText.classList.add('card-carrusel-text');
                    diccPlaceText.classList.add('trans');
                    diccPlaceText.textContent = place.direction;

                let tagsPlace= document.createElement('div');
                tagsPlace.classList.add('card-carrusel-tags');

                    place.words.forEach(wordsItem => {
                        let tagsPlaceText = document.createElement('div');
                        tagsPlaceText.classList.add('tags');
                        tagsPlaceText.textContent = wordsItem.palabra;
                        tagsPlace.appendChild(tagsPlaceText);
                    });
            //* INFORMACIÓN
            

            //* INSERTAR INFORMACIÓN
                placeContainer.appendChild(imageBack);
                placeContainer.appendChild(gradient);

                placeContainer.appendChild(figureLogo);
                    figureLogo.appendChild(imgLogo);
                    figureLogo.appendChild(namePlace);

                placeContainer.appendChild(diccPlace);
                    diccPlace.appendChild(diccPlaceText);
                

                placeContainer.appendChild(tagsPlace);

            //* INSERTAR INFORMACIÓN

            contenedor.appendChild(placeContainer);
        });
    }
    catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

loadJSON();


