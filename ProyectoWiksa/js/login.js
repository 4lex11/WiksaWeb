document.addEventListener("DOMContentLoaded", () => {
    // Verificar si SpeechRecognition está disponible
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = "es-ES"; // Idioma español
        recognition.interimResults = false; // Solo resultados finales
        recognition.continuous = false; // Detener tras reconocer un comando

        const micButtonEmail = document.getElementById("mic-button-email");
        const micButtonPassword = document.getElementById("mic-button-password");
        const correoInput = document.getElementById("correo");
        const contraseñaInput = document.getElementById("contraseña");

        // Función para manejar los eventos de reconocimiento de voz
        function startRecognition(inputField) {
            recognition.start();
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                inputField.value = transcript; // Insertar el texto reconocido en el campo
            };
        }

        // Configurar el botón de micrófono para el campo de correo
        micButtonEmail.addEventListener("click", () => {
            startRecognition(correoInput);
        });

        // Configurar el botón de micrófono para el campo de contraseña
        micButtonPassword.addEventListener("click", () => {
            startRecognition(contraseñaInput);
        });

        recognition.onstart = () => {
            micButtonEmail.textContent = "🎙️ Escuchando..."; // Cambiar icono mientras escucha
            micButtonPassword.textContent = "🎙️ Escuchando..."; // Cambiar icono mientras escucha
        };

        recognition.onend = () => {
            micButtonEmail.textContent = "Dictar"; // Restaurar icono
            micButtonPassword.textContent = "Dictar"; // Restaurar icono
        };

        recognition.onerror = (event) => {
            console.error("Error de reconocimiento de voz:", event.error);
            alert("Hubo un problema al reconocer la voz. Inténtalo nuevamente.");
        };
    } else {
        alert("Lo sentimos, tu navegador no soporta reconocimiento de voz.");
    }
});
