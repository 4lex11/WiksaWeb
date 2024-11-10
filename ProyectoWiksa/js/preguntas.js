// JavaScript para manejar el despliegue de las respuestas
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Cerrar todas las respuestas
        document.querySelectorAll('.faq-answer').forEach(answer => answer.style.display = 'none');

        // Abrir la respuesta seleccionada si no está visible
        if (!isVisible) {
            answer.style.display = 'block';
        }
    });
});
