
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

    if (validadorMail.test(mail) && valorNombre !== "" && valorApellido !== "" && valorAsunto !== "" && valorMensaje !== ""){
        formulario.setAttribute("action","https://formsubmit.co/amelioarnon@gmail.com")
    } else if (validadorMail.test(mail) == false){
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




