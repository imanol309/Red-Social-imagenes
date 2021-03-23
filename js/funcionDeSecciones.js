let categorias = document.querySelector(".categorias")
let creador = document.querySelector(".creador")
let contacto = document.querySelector(".contacto")

// lines varibles 

let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")
let line4 = document.querySelector(".line4")

// LINEA DE SECCION CATEGORIAS

categorias.addEventListener("mouseover", () => {
    line2.className += " line22";
});

categorias.addEventListener("mouseout", () => {
    line2.className = "line2";
});

// LINEA DE SECCION CREADOR

creador.addEventListener("mouseover", () => {
    line3.className += " line33";
});

creador.addEventListener("mouseout", () => {
    line3.className = "line3";
});

// LINEA DE SECCION CONTACTO

contacto.addEventListener("mouseover", () => {
    line4.className += " line44";
});

contacto.addEventListener("mouseout", () => {
    line4.className = "line4";
});



