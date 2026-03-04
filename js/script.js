console.log("✅ script.js cargado")
const formulario = document.getElementById("formularioCuenta");
formulario.addEventListener("submit", function(event){
    event.preventDefault();

const nombre = document.getElementById("nombre").value;
const apellido1 = document.getElementById("apellido1").value;
const fechaNacimiento = document.getElementById("fechaNacimiento").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const repetirPassword = document.getElementById("repetirPassword").value;

if (nombre === "" || apellido1 === "" || fechaNacimiento === "" || email === "" || password === "" || repetirPassword === "") {
  alert("Todos los campos obligatorios deben estar completos.");
  return;  
}


const expresionEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+/;
if (!expresionEmail.test(email)){
    alert("El formato del correo electrónico no es válido.");
    return;
}
const hoy = new Date();
const fechaSeleccionada = new Date(fechaNacimiento);

if (fechaSeleccionada > hoy) {
    alert("La fecha de nacimiento no puede ser futura.");
    return;
}

let edad = hoy.getFullYear() - fechaSeleccionada.getFullYear();

const mesActual = hoy.getMonth();
const diaActual = hoy.getDate();
const mesNacimiento = fechaSeleccionada.getMonth();
const diaNacimiento = fechaSeleccionada.getDate();

if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)){
    edad--;
}

if (edad < 18) {
    alert("Debes ser mayor de edad para crear una cuenta.");
    return;
}

if (password !== repetirPassword) {
    alert("Las contraseñas no coinciden.");
    return;
}

if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
}

alert("Se ha creado correctamente la cuenta de " + nombre + " " + apellido1);
document.body.style.backgroundColor = "#d4edda";

});

const foto = document.getElementById("foto");
const preview = document.getElementById("preview");

foto.addEventListener("change", function(){
    const archivo = foto.files[0];
    if (archivo) {
        const reader = new FileReader();
    ReadableStream.onload = function(e) {
        preview.src = e.target.result;
    };
    ReadableStream.readAsDataURL(archivo);
}
});
