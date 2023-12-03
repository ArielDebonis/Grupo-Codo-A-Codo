<template>
    <div id="opiniones">
        <h1>Listado de comentarios</h1>
        <div id="opiniones">
            <ul>
                <li v-for="opinion in opiniones" :key="opiniones.id">
                    <div class="nombre">${comentario.nombre}</div>
                    <div class="comentario">${comentario.comentario}</div>
                    <div class="botones">
                        <button class="modificar" @click="modificarComentario(${opiniones.id})">Modificar</button>
                        <button class="eliminar" @click="eliminarComentario(${opiniones.id})">Eliminar</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name: "App",
    data: () => ({
        comentarios: [],
    }),
    methods: {
        modificarComentario(id) {
            // ...
        },
        eliminarComentario(id) {
            // ...
        },
    },
};
</script>