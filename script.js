let header = `
<a href="index.html"><i class="fa-solid fa-utensils"></i></a>
<h1> Sabores que conquistan</h1>

<input type="checkbox" id="menu-check"> 
<label id="menu" for="menu-check"></label>  
<span id="menu-abrir">&#9776;</span>
<span id="menu-cerrar">X</span>

<nav>
    <ul class="menuSuperior">
        <li><a href="capital.html">Capital</a></li>
        <li><a href="santafe.html">Santa Fe</a></li>
        <li><a href="misiones.html">Misiones</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>
`;

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

let footer = `
<p>© Copyright 2023 Sabores que Conquistan. Todos los derechos reservados.</p>
<div class="socialmedia">
    <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
</div>
<a href="http://">Contacto</a>
`;

document.getElementById("idfooter").innerHTML = footer;