let nav = `

<nav id="idnav">
    <ul class="nav-principal">
        <li><a href="capital.html">Capital</a></li>
        <li><a href="misiones.html">Misiones</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>
`;

document.getElementById("idnav").innerHTML = nav;


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

// COMENTARIOS////////////////////////////////

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
