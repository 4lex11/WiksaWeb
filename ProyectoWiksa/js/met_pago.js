function mostrarFormularioPago() {
    // Ocultar todos los formularios
    document.getElementById("formularioTarjeta").style.display = "none";
    document.getElementById("formularioPaypal").style.display = "none";
    document.getElementById("formularioEfectivo").style.display = "none";

    // Obtener el valor seleccionado del método de pago
    const metodoPago = document.getElementById("metodoPago").value;

    // Mostrar el formulario correspondiente
    if (metodoPago === "tarjeta") {
        document.getElementById("formularioTarjeta").style.display = "block";
    } else if (metodoPago === "paypal") {
        document.getElementById("formularioPaypal").style.display = "block";
    } else if (metodoPago === "efectivo") {
        document.getElementById("formularioEfectivo").style.display = "block";
    }
}

function validarPago() {
    const metodoPago = document.getElementById("metodoPago").value;

    // Validación para el formulario de tarjeta
    if (metodoPago === "tarjeta") {
        const numeroTarjeta = document.getElementById("numeroTarjeta").value;
        const fechaExpiracion = document.getElementById("fechaExpiracion").value;
        const codigoSeguridad = document.getElementById("codigoSeguridad").value;
        const titular = document.getElementById("titular").value;

        if (!numeroTarjeta || !fechaExpiracion || !codigoSeguridad || !titular) {
            alert("Por favor, complete todos los campos de la tarjeta.");
            return false;
        }
    }

    // Validación para el formulario de PayPal
    if (metodoPago === "paypal") {
        const correoPaypal = document.getElementById("correoPaypal").value;
        if (!correoPaypal) {
            alert("Por favor, ingrese su correo de PayPal.");
            return false;
        }
    }

    alert("Método de pago confirmado.");
    return true;
}
