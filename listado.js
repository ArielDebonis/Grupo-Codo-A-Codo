// Realizamos la solicitud GET al servidor para obtener todos los productos
fetch(URL + 'comentarios/Capital')
    .then(function (response) {
        console.log(response);
        if (response.ok) {
            return response.json();

        } else {
            // Si hubo un error, lanzar explícitamente una excepción
            // para ser "catcheada" más adelante
            throw new Error('Error al mostrar los comentarios.');
        }
    })
    .then(function (data) {
        console.log(data)
        let tablacomentarios = document.getElementById('opiniones');
        // Iteramos sobre los productos y agregamos filas a la tabla
        for (let comentario of data.comentarios) {
            let fila = document.createElement('div');
            fila.classList.add('opinion');
            fila.innerHTML = '<div class="nombre">' + comentario.nombre + '</div>' +
                '<div class="comentario">' + comentario.comentario + '</div>';
            tablacomentarios.appendChild(fila);
        }
    }
    )
    .catch(function (error) {
        // En caso de error
        console.log(error)
        alert('Error al mostrar los comentarios.');
        console.error('Error:', error);
    })



/////////// VUE

import Vue from "vue";

function getComentarios() {
    const response = fetch("http://localhost:5500/comentarios/Capital");
    response.then((res) => {
        return res.json();
    }).then((data) => {
        return data;
    });
}

function mostrarComentarios(data) {
    const tablacomentarios = document.getElementById("comentarios");

    for (let comentario of data.comentarios) {
        // Agrega los botones de modificar y eliminar
        let fila = document.createElement("div");
        fila.classList.add("opinion");
        fila.innerHTML = `
        <div class="nombre">${comentario.nombre}</div>
        <div class="comentario">${comentario.comentario}</div>
        <div class="botones"><button class="modificar" @click="modificarComentario(${comentario.id})">Modificar</button><button class="eliminar" @click="eliminarComentario(${comentario.id})">Eliminar</button>
        </div>`;
    tablacomentarios.appendChild(fila);
}

const opiniones = new Vue({
    el: "#opiniones",
    data: {
        comentarios: [],
    },
    mounted() {
        this.comentarios = getComentarios();
    },
    methods: {
        modificarComentario(id) {
            // ...
        },
        eliminarComentario(id) {
            // ...
        },
    },
})};