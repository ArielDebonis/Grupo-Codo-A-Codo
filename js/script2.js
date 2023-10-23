let header = `
<a href="index.html"><i class="fa-solid fa-utensils"></i></a>

<input type="checkbox" id="menu-check"> 
<label id="menu" for="menu-check">
  <span id="menu-abrir">&#9776;</span>
  <span id="menu-cerrar">X</span>
</label>  
<nav>
    <ul class="menuSuperior">
        <li class="itemsmenu"><a href="index.html">Inicio</a></li>
        <li class="itemsmenu"><a href="santafe.html">Santa Fe</a></li>
        <li class="itemsmenu"><a href="capital.html">Misiones</a></li>
        <li class="itemsmenu"><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>
`;

document.getElementById("idheader").innerHTML = header;


let map;

async function initMap() {
    const position = { lat: -25.5985964088189, lng: -54.57055400131922 };

    try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

        // The map, centered at Holy
        map = new Map(document.getElementById("map"), {
            zoom: 17,
            center: position,
            mapId: "map",
        });

        // The marker, positioned at Holy
        const marker = new AdvancedMarkerView({
            map: map,
            position: position,
            title: "Holy",
        });
    } catch (error) {
        console.error("Error initializing Google Map:", error);
    }
}

initMap();

let footer = `
<p id="copyright">© Copyright 2023 Sabores que Conquistan. Todos los derechos reservados.</p>
<div class="socialmedia">
    <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
</div>
<a href="http://">Contacto</a>
`;

document.getElementById("idfooter").innerHTML = footer;
