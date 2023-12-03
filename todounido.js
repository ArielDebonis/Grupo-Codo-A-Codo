const URL = "http://127.0.0.1:5000/"
const app = Vue.createApp({
    data(){
        return {
            id: null,
            provincia: prov,
            nombre: '',
            comentario: '',
            comentarios: []
        }
    },
    methods: {
        obtenerComentarios() {
            fetch(URL + 'comentarios/' + prov)
                .then(response =>{
                    if (response.ok) {return response.json();}
                })
                .then(data => {
                    this.comentarios = data;
                })
                .catch(error => {
                    console.log('Error:', error);
                    alert('Error al obtener los comentarios.')
                })
        },
        agregarComentario() {
            const formData = new FormData();
            formData.append('provincia',prov);
            formData.append('nombre',this.nombre);
            formData.append('comentario',this.comentario);
            fetch (URL + 'comentarios', {
                method: 'POST',
                body: formData,
            })
            .then(function (response){
                if (response.ok){
                    return response.json();
                } else {
                    throw new Error ('Error al agregar el comentario.');
                }
            })
            .then (function (){
                alert('Comentario agregado correctamente.');
            })
            .catch(function (error) {
                // En caso de error
                alert('Error al agregar el comentario.');
                console.error('Error:', error);
            })

        },
        limpiarFormulario(){
            this.id = null,
            this.provincia = prov,
            this.nombre = '',
            this.comentario = ''
        },
        eliminarComentario(id) {
            if (confirm('¿Estás seguro de que quieres eliminar este comentario?')) {
                fetch(URL + `comentarios/eliminar/${id}`, {method: 'DELETE'})
                    .then (response => {
                        if (response.ok) {
                            this.comentarios = this.comentarios.filter(comentario => comentario.id !== id);
                            alert('Comentario eliminado correctamente.');
                        }
                    })
                    .catch(error => {
                        alert(error.message);
                    });
            }
        },
        modificarComentario() {
            const formData = new FormData();
            formData.append('provincia',this.provincia);
            formData.append('nombre',this.nombre);
            formData.append('comentario',this.comentario);
            fetch(URL + 'comentarios/modificar/' + this.id, {method: 'PUT', body: formData})
            .then(response => {
                if (response.ok){
                    return response.json()
                } else {
                    throw new Error ('Error al guardar los cambios del comentario.')
                }
            })
            .then(data => {
                alert('Comentario actualizado correctamente.');
                this.limpiarFormulario();
            })
            .catch(error => {
                console.error('Error', error);
                alert('Error al actualizar el comentario.')
            })



        }
    },
    mounted() {
        this.obtenerComentarios();
    }
});
app.mount('#seccionComentarios');
