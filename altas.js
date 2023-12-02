const URL = "http://127.0.0.1:5000/"
// Capturamos el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function
    (event) {
    event.preventDefault(); // Evitamos que se envie el form
    var formData = new FormData();
    formData.append('provincia','Capital');
    formData.append('nombre', document.getElementById('nombre').value);
    formData.append('comentario',document.getElementById('comentario').value);

    // Realizamos la solicitud POST al servidor
    fetch(URL + 'comentarios', {
        method: 'POST',
        body: formData // Aquí enviamos formData en lugar de JSON
    })
        //Después de realizar la solicitud POST, se utiliza el método then() para manejar la respuesta del servidor.
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                // Si hubo un error, lanzar explícitamente una excepción
                // para ser "catcheada" más adelante
                throw new Error('Error al agregar el comentario.');
            }
        })
        // Respuesta OK
        .then(function () {
            // En caso de éxito
            alert('Comentario posteado correctamente.');
        })
        .catch(function (error) {
            // En caso de error
            alert('Error al agregar el comentario.');
            console.error('Error:', error);
        })
        .finally(function () {
            // Limpiar el formulario en ambos casos (éxito o error)
            document.getElementById('nombre').value = "";
            document.getElementById('comentario').value = "";

        });
})


// Realizamos la solicitud GET al servidor para obtener todos los
productos
fetch(URL + 'comentarios')
    .then(function (response) {
        if (response.ok) {
            return response.json();

        } else {
            // Si hubo un error, lanzar explícitamente una excepción
            // para ser "catcheada" más adelante
            throw new Error('Error al mostrar los comentarios.');
        }
    })
    .then(function (data) {
        let tablacomentarios = document.getElementById('tablacomentarios');
        // Iteramos sobre los productos y agregamos filas a la tabla
        for (let comentario of data) {
            let fila = document.createElement('tr');
            fila.innerHTML = '<td>' + comentario.nombre + '</td>' +
                '<td>' + comentario.comentario + '</td>';
//Una vez que se crea la fila con el contenido del producto, se agrega a la tabla utilizando el método appendChild del elemento tablacomentarios.
                tablacomentarios.appendChild(fila);
        }
    })
    .catch(function (error) {
        // En caso de error
        alert('Error al mostrar los comentarios.');
        console.error('Error:', error);
    })