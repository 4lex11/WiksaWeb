/*const contenerdorProductos = document.getElementById("productos-container");

function CargarProductos(productos){
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "menu-plato";
        nuevoProducto.innerHTML = `
            <img src="../../img/${producto.imgUrl}">
            <div class="menu-des">
                <span>${producto.name}</span>
                <span>Precio: ${producto.price}</span>
                <span>Tiempo de entrega: ${producto.delivery_time}</span>
                <span>Precio de entrega: ${producto.delivery_price}</span>
                <button class="abrirmodal" id="${producto.id}">Agregar al carro</button>
            </div>
        `;
        contenerdorProductos.append(nuevoProducto);
    });
};

CargarProductos(productos);*/

document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones y enlaces que quieras hacer accesibles
    const elements = document.querySelectorAll("a, button");
  
    // Función para hablar el texto
    function speakText(text) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
      } else {
        console.warn("API de síntesis de voz no soportada en este navegador.");
      }
    }
  
    // Agrega el evento de foco a cada elemento seleccionado
    elements.forEach((element) => {
      element.addEventListener("focus", () => {
        const text = element.innerText || element.getAttribute("aria-label") || "Elemento sin nombre";
        speakText(text);
      });
    });
  });
  