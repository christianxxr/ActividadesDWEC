function validacion() {
    if (nombre.value.trim() == "") {
        alert('[ERROR] El nombre debe estar relleno')
        return false
    }

    if (direccion.value.trim() == "") {
        alert('[ERROR] La dirección debe estar rellena')
        return false
    }

    if (telefono.value.trim() == "") {
        alert('[ERROR] El teléfono debe estar relleno')
        return false
    }

    if (email.value.trim() == "") {
        alert('[ERROR] El email debe estar relleno')
        return false
    }

    tamanio = document.getElementsByName("tamanio")
    var seleccionadorTamanio = false
    for (var i = 0; i < tamanio.length; i++) {
        if (tamanio[i].checked) {
            seleccionadorTamanio = true
        }
    }

    if (!seleccionadorTamanio) {
        alert('[ERROR] Debe seleccionar el tamaño de la pizza')
        return false
    }

    ingredientes = document.getElementsByName("ingredientes")
    var seleccionadorIngredientes = false
    for (var i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].checked) {
            seleccionadorIngredientes = true
        }
    }

    if (!seleccionadorIngredientes) {
        alert('[ERROR] Debe seleccionar algún ingrediente de la pizza')
        return false
    }

    var comprobarNombrePorMayuscula = /^[A-Z]/
    esValido = comprobarNombrePorMayuscula.test(nombre.value)

    if (!esValido) {
        alert('[ERROR] El nombre debe empezar por mayúscula')
        return false;
    }

    var comprobarTelefono = /^[0-9]{9}$/
    esValido = comprobarTelefono.test(telefono.value)

    if (!esValido) {
        alert('[ERROR] Introduzca un teléfono válido')
        return false;
    }


    var comprobarCorreo = /^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/
    esValido = comprobarCorreo.test(email.value)

    if (!esValido) {
        alert('[ERROR] Introduzca un correo válido')
        return false;
    }


    return true

}

function calcularGastos() {
    var resultado = 0;
    resultado = parseInt(document.getElementsByName(tamanio)) + parseInt(document.getElementsByName(ingredientes))
    document.getElementById("resultadoCompra").innerHTML = ("Total: " + resultado + "€")
}

window.onload = function () {
    formularioPizzeria.onsubmit = validacion
    btnProcesar.onclick = calcularGastos
}

//btnProcesar.onclick = calcularGastos