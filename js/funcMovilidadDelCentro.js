let img3 = document.querySelector(".img-3")
let centroPagina = document.querySelector(".centro-contair")
let img4 = document.querySelector(".img-4")

img3.addEventListener("click", () =>{
    centroPagina.className += " centro-contair1";
    img3.className += " img-3-3";
    img4.className += " img-4-4";
})

img4.addEventListener("click", () => {
    centroPagina.className = "centro-contair";
    img3.className = "img-3";
    img4.className = "img-4";
})