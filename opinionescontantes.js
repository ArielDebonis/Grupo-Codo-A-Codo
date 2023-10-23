const opinionesRestaurantes = [
    {
        restaurante: "AQVA RESTAURANTE",
        calificacion: 4.5,
        comentario: "Excelente comida y servicio."
    },
    {
        restaurante: "HOLY BREWERY PUERTO IGUAZÚ",
        calificacion: 3.8,
        comentario: "Buen lugar, pero la comida podría mejorar."
    },
    // Agrega más opiniones aquí
];

let.header= `
        <nav class="nav-custom" >
            <ul>
                <li><a href="capital.html">Capital</a></li>
                <li><a href="santafe.html">Santa Fe</a></li>
                <li><a href="misiones.html">Misiones</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>`
  



document.getElementsById("idheader").innerHTML= header

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
                        listItem.classList.add("comentarios"); // Reemplaza "mi-clase-css" con el nombre de tu clase CSS

                        listItem.innerHTML = `<strong>${usuario.name}</strong>: ${comentario.body}`;
                        comentariosList.appendChild(listItem);
                    });
            });
        })
        .catch((error) => {
            console.error("Error al cargar los comentarios: " + error);
        });
});