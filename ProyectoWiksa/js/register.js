function validarFormulario() {
    // Obtenemos los valores de los campos
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmarContraseña').value;

    // Verificar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Verificar que el teléfono tenga 9 dígitos y empiece con 9
    const telefono = document.getElementById('telefono').value;
    const telefonoPattern = /^9\d{8}$/;
    if (!telefonoPattern.test(telefono)) {
        alert("El número de teléfono debe comenzar con 9 y tener 9 dígitos.");
        return false;
    }

    // Verificar que la fecha de nacimiento sea mayor o igual a 1/1/1924 y menor o igual a 1/1/2006
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const fechaMinima = new Date("1924-01-01");
    const fechaMaxima = new Date("2006-01-01");
    const fechaUsuario = new Date(fechaNacimiento);

    if (fechaUsuario < fechaMinima || fechaUsuario > fechaMaxima) {
        alert("La fecha de nacimiento debe ser posterior al 1 de enero de 1924 y anterior al 1 de enero de 2006.");
        return false;
    }

    return true;  // Si todo está bien, se envía el formulario
}

// Cambiar el formato de la fecha a día/mes/año
document.addEventListener("DOMContentLoaded", function() {
    const fechaNacimiento = document.getElementById('fechaNacimiento');
    
    // Establecer el formato de la fecha de nacimiento a día/mes/año (en el input visualmente)
    fechaNacimiento.addEventListener('input', function() {
        const fecha = new Date(fechaNacimiento.value);
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const año = fecha.getFullYear();
        fechaNacimiento.setAttribute('placeholder', `${dia}/${mes}/${año}`);
    });
});
