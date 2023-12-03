
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
        for (let comentario of data) {
            console.log(comentario)
            let fila = document.createElement('div');
            fila.classList.add('opinion')
            fila.innerHTML = '<div class="nombre">' + comentario.nombre + '</div>' +
                '<div class="comentario">' + comentario.comentario + '</div>';
                console.log(fila)
//Una vez que se crea la fila con el contenido del producto, se agrega a la tabla utilizando el método appendChild del elemento tablacomentarios.
            tablacomentarios.appendChild(fila);
        }
    })
    .catch(function (error) {
        // En caso de error
        console.log(error)
        alert('Error al mostrar los comentarios.');
        console.error('Error:', error);
    })