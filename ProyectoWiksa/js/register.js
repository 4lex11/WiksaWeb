document.addEventListener("DOMContentLoaded", () => {
    // Verificar si SpeechRecognition está disponible
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = "es-ES"; // Idioma español
        recognition.interimResults = false; // Solo resultados finales
        recognition.continuous = false; // Detener tras reconocer un comando

        // Función para iniciar el reconocimiento de voz y poner el texto dictado en el campo correspondiente
        function startRecognition(inputElement) {
            recognition.start();

            recognition.onstart = () => {
                inputElement.nextElementSibling.textContent = "🎙️ Escuchando...";
                inputElement.nextElementSibling.disabled = true;
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                inputElement.value = transcript; // Insertar texto reconocido en el campo
                console.log("Texto reconocido:", transcript);
            };

            recognition.onerror = (event) => {
                console.error("Error de reconocimiento de voz:", event.error);
                alert("Hubo un problema al reconocer la voz. Inténtalo nuevamente.");
            };

            recognition.onend = () => {
                inputElement.nextElementSibling.textContent = "Dictar";
                inputElement.nextElementSibling.disabled = false;
            };
        }

        // Asociar los botones de micrófono con los campos
        document.getElementById("mic-nombre").addEventListener("click", () => {
            startRecognition(document.getElementById("nombre"));
        });
        document.getElementById("mic-apellidos").addEventListener("click", () => {
            startRecognition(document.getElementById("apellidos"));
        });
        document.getElementById("mic-correo").addEventListener("click", () => {
            startRecognition(document.getElementById("correo"));
        });
        document.getElementById("mic-contraseña").addEventListener("click", () => {
            startRecognition(document.getElementById("contraseña"));
        });
        document.getElementById("mic-confirmarContraseña").addEventListener("click", () => {
            startRecognition(document.getElementById("confirmarContraseña"));
        });
        document.getElementById("mic-fechaNacimiento").addEventListener("click", () => {
            startRecognition(document.getElementById("fechaNacimiento"));
        });
        document.getElementById("mic-sexo").addEventListener("click", () => {
            startRecognition(document.getElementById("sexo"));
        });
        document.getElementById("mic-telefono").addEventListener("click", () => {
            startRecognition(document.getElementById("telefono"));
        });

    } else {
        alert("Lo sentimos, tu navegador no soporta reconocimiento de voz.");
    }
});
