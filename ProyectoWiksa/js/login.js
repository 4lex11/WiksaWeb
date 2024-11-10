function validarLogin() {
    // Obtener los valores de los campos
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    // Validar que los campos no estén vacíos
    if (correo === "" || contraseña === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validar el formato del correo (usando expresión regular simple)
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!correoRegex.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Aquí puedes agregar una lógica para comprobar las credenciales con una API o base de datos

    // Si todo está bien, puedes permitir el envío del formulario (o hacer la acción que corresponda)
    alert("Inicio de sesión exitoso.");
    return true; // o redirigir a otra página si es necesario
}
