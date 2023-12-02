//////////////////////// HEADER  /////////////////////
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

////////////////////////FORMULARIO DE CONTACTO /////////////////////

function validador (){
    const validadorMail = new RegExp (/^([a-z0-9\.!#$%&'*+-/=?^_`{|}~]+)@([a-z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)
    let ElementoMail = document.querySelector("#mail")
    let mail = ElementoMail.value
    let formulario = document.querySelector("form")

    let nombre = document.querySelector("#nombre")
    let valorNombre = nombre.value

    let apellido = document.querySelector("#apellido")
    let valorApellido = apellido.value

    let asunto = document.querySelector("#asunto")
    let valorAsunto = asunto.value

    let mensaje = document.querySelector("#msg")
    let valorMensaje = mensaje.value


    if (validadorMail.test(mail) == false){
        alert ("Ingrese un mail valido")
    } else if (valorNombre == ""){
        alert ("Ingrese su nombre")
    } else if (valorApellido == ""){
        alert ("Ingrese su apellido")
    } else if (valorAsunto == ""){
        alert ("Ingrese un asunto")
    } else if (valorMensaje == ""){
        alert ("No ha escrito aun ningun comentario. Por favor escribanos un comentario")
    }
}


function valores () {
    let otrosCampos = document.querySelector("#nombre")
    let valorCampo = otrosCampos.value
    return console.log(valorCampo !== "")
}

let form = document.querySelector("form")
let formatributo = form.getAttribute("action")

function tiene (){
    let form = document.querySelector("form")
    let formatributo = form.getAttribute("action")
    if (formatributo == ""){
        validador()
        event.preventDefault()
    } else {
        validador()
    }
}

form.addEventListener("submit",tiene)


// let boton = document.querySelector(".boton")
// boton.addEventListener("click", validador)

//////////////////////// FOOTER /////////////////////

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

// let boton = document.querySelector(".boton")
// boton.addEventListener("click", validador)