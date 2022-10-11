/**
 *  Declaración de variables del formulario
 */
const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const mensaje = document.getElementById("mensaje")

//variable para la expresión regular
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log(mensaje.value);
    console.log(mensaje.value.length);

    //validar nombre
    if (!userName.value.trim() || !regUserName.test(userName.value)) {
        alert("Nombre inválido");
    }

    //validar Email
    if (!userEmail.value.trim() || !regUserEmail.test(userEmail.value)) {
        alert("Email inválido");
    }
    //validar mensaje
    if (mensaje.value.length < 1 && + mensaje.value.length < 200) {
        alert("No se permite ningun campo vacío");
    }
    console.log("los datos fueron enviados");

    //Los datos fueron enviados
    alert("Los datos fueron enviados");

});