// VARIABLES DEL PROYECTO

// VARIABLES DEL INDEX
let correo = document.querySelector(".email");
let password = document.querySelector(".password");
let img1 = document.querySelector(".usuario-img2");
let img2 = document.querySelector(".usuario-img3")
let line1 = document.querySelector(".usuario-line1");
let line2 = document.querySelector(".usuario-line2");
let form1 = document.querySelector(".usuario-contairn");

// VARIABLE DEL INDEX2

let form2 = document.querySelector(".usuario-contairn11");

// INPUTS --
let nombre = document.querySelector(".nombre");
let apellido = document.querySelector(".apellido");
let numero = document.querySelector(".numero");
let edad = document.querySelector(".edad");
let email = document.querySelector(".email1");
let password1 = document.querySelector(".password");
let passwordOficial = document.querySelector(".password-oficial");
// INPUTS --

let crearCuenta = document.querySelector(".usuario-img22")

// VARIABLE VACIA 

var email1Vacio;
var passwordOficialVacio;

// let campos = [nombre.value,apellido.value,numero.value,edad.value,email.value,password1.value,passwordOficial.value]



// VERIFICAR SI EL CORREO Y LA CONTRASENA ES CORRECTA

crearCuenta.addEventListener("click", () => {
    let ValorPasswordOficial = passwordOficial.value
    if (email.value === "" && passwordOficial.value === ""){
        alert("LLENA LOS DATOS MAS IMPORTANTES QUE SON EMAIL Y PASSWORD 'POR FAVOR' ")}
    if (email.value.indexOf("@gmail.com")!= -1 && ValorPasswordOficial.length > 7){
        email.value = email1Vacio
        passwordOficial.value = passwordOficialVacio
        alert("YA ESTAS REGISTRADO, YA PUEDES INGRESAR TU CUENTA NUEVA")
    }else {
        alert("LLENA LOS DATOS MAS IMPORTANTES QUE SON EMAIL Y PASSWORD 'CORRECTAMENTE'")
    }
})

//ACTIVAR LAS LINEAS DE LAS PALABRAS EMAIL Y PASSWORD

correo.addEventListener("click", () =>{
    line1.className += " line1";

    setTimeout(()=>{
        line1.className = "usuario-line1";
    },5000)
})

password.addEventListener("click", () =>{
    line2.className += " line2";
    
    setTimeout(()=>{
        line2.className ="usuario-line2";
    },5000)
})


// MOVER EL FORMULARIO A LA PARTE IZQUIERDA Y MOVER EL SEGUNDO FORMULARIO A LA DERECHA

img2.addEventListener("click", () =>{
    form1.className += " usuario-contairn1"
    form2.className += " usuario-contairn2"
})


// HACER QUE LOS USUARIOS NO DEJEN NINGUN CAMPO VACIO

// function noCamposVacios(){
//     for(var i = 0; i < campos.length; i++){
//         if(campos.values[i] === ""){
//             alert("No puedes dejar ningun campo vacio" + campos[i])
//         }else{
//             console.log(campos[i]);
//         }
//     }
// }

// crearCuenta.addEventListener("click", noCamposVacios);


// CREAR NUEVA CUENTA O REGISTRASE

img1.addEventListener("click", () =>{
    console.log(email1Vacio,passwordOficialVacio)
    if(correo.value === "imanol@gmail.com" && password.value === "imanol75" || 
    correo.value === email1Vacio && password.value === passwordOficialVacio){
        correo.value = "";
        password.value = "";
        window.location.href = "/index2.html"
    }else{
        correo.value = "";
        password.value = "";
        alert("CUENTA INCORRECTA")
    }

})


