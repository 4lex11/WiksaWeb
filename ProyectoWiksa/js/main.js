document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelector("#cambiar_modo");
    let voiceModeEnabled = false; // bandera para habilitar/deshabilitar síntesis de voz

    // Función para activar el modo de voz
    function toggleVoiceMode() {
        voiceModeEnabled = !voiceModeEnabled;
        if (voiceModeEnabled) {
            console.log("Modo de voz activado.");
        } else {
            console.log("Modo de voz desactivado.");
            window.speechSynthesis.cancel(); // Detener cualquier síntesis en curso al desactivar
        }
    }

    // Función para hablar el texto
    function speakText(text) {
        if (voiceModeEnabled && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        } else if (!voiceModeEnabled) {
            console.log("Modo de voz está desactivado.");
        }
    }

    // Agregar evento de foco a cada elemento para hablar el texto al ser enfocado
    elements.forEach((element) => {
        element.addEventListener("focus", () => {
            const text = element.innerText || element.getAttribute("aria-label") || "Elemento sin nombre";
            speakText(text);
        });
    });

    // Evento para el botón "Cambiar Modo"
    document.querySelector('nav ul li:nth-child(2) a').addEventListener("click", (e) => {
        e.preventDefault(); // Evitar redirección, ya que es un enlace sin href
        toggleVoiceMode();
    });

    // Detectar combinación de teclas F y J simultáneamente
    let fKeyPressed = false;
    let jKeyPressed = false;

    document.addEventListener("keydown", (e) => {
        if (e.key === "f" || e.key === "F") fKeyPressed = true;
        if (e.key === "j" || e.key === "J") jKeyPressed = true;

        if (fKeyPressed && jKeyPressed) {
            toggleVoiceMode();
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "f" || e.key === "F") fKeyPressed = false;
        if (e.key === "j" || e.key === "J") jKeyPressed = false;
    });
});
