let header = `

<nav class="navbar" style="background-color: #FBEDE8 ">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="img/icons8-restaurante-48.png" alt="Logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENÚ</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" href="capital.html">Ciudad Autónoma de Buenos Aires</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="misiones.html">Misiones</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contacto.html">Contacto</a>
                            </li>
                        </ul>
                        </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="search">
                            <button class="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>`;

document.getElementById("idheader").innerHTML = header;

let map;

async function initMap() {
    const position = { lat: -34.55588303771516, lng: -58.451959030551556 };

    try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

        // The map, centered at Mian Rest
        map = new Map(document.getElementById("map"), {
            zoom: 17,
            center: position,
            mapId: "map",
        });

        // The marker, positioned at Mian Rest
        const marker = new AdvancedMarkerView({
            map: map,
            position: position,
            title: "Mian Rest",
        });
    } catch (error) {
        console.error("Error initializing Google Map:", error);
    }
}

initMap();



document.addEventListener("DOMContentLoaded", function () {
    const comentariosList = document.getElementById("comentarios-list");

    // Hacer una solicitud a la API de JSONPlaceholder para obtener comentarios
    fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((comentarios) => {
            // Tomar solo los primeros dos comentarios
            const comentariosLimitados = comentarios.slice(0, 2);

            // Recorrer los comentarios limitados y agregarlos a la lista en la página
            comentariosLimitados.forEach((comentario) => {
                // Hacer una solicitud adicional para obtener el nombre de usuario del comentario
                fetch(`https://jsonplaceholder.typicode.com/users/${comentario.id}`)
                    .then((response) => response.json())
                    .then((usuario) => {
                        const listItem = document.createElement("li");

                        // Agregar una clase CSS al elemento <li>
                        listItem.classList.add("opiniones"); // Reemplaza "mi-clase-css" con el nombre de tu clase CSS

                        listItem.innerHTML = `<strong>${usuario.name}</strong>: ${comentario.body}`;
                        comentariosList.appendChild(listItem);
                    });
            });
        })
        .catch((error) => {
            console.error("Error al cargar los comentarios: " + error);
        });
});


let footer = `
<footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
        <img class="footer-logo" src="img/icons8-restaurante-48.png" alt="Logo">
        <p class="footer-texto text-center"> También podes seguirnos en nuestras redes sociales <br></p>
        <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter-x"></i></a>
            <a href="https://instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
            <a href="https://facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
        </div>
    </footer>
`;

document.getElementById("idfooter").innerHTML = footer;