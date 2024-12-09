const amarillo = document.getElementById("amarillo")
const azul = document.getElementById("azul")
const rojo = document.getElementById("rojo")
const verde = document.getElementById("verde")
const keyDiv = document.getElementById("keyDiv")
const nuevoDiv = (color) =>{
    const divNuevo = document.createElement('div')
    divNuevo.style.width = '200px'
    divNuevo.style.height = '200px'
    divNuevo.style.border = '1px solid #000'
    divNuevo.style.backgroundColor = color
    divNuevo.style.margin = '20px'
    document.body.appendChild(divNuevo)
}


function cambiarColorNegro(elemento) {
    elemento.style.backgroundColor = "black";
}

amarillo.addEventListener("click", () => cambiarColorNegro(amarillo));
azul.addEventListener("click", () => cambiarColorNegro(azul));
rojo.addEventListener("click", () => cambiarColorNegro(rojo));
verde.addEventListener("click", () => cambiarColorNegro(verde));



document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        keyDiv.style.backgroundColor = "pink"
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = "orange"
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = "aqua"
    } else if (event.key === 'q') {
        nuevoDiv("purple")
    } else if (event.key === 'w') {
        nuevoDiv("gray")
    } else if (event.key === 'e') {
        nuevoDiv("brown")
    }
    })
