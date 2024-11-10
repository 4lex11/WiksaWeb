function triggerbtninisup(){ document.getElementById("metro").click();  }
function triggerbtnclick(){ document.getElementById("wong").click();  }
function triggerbtnmetro(){ document.getElementById("metro").click();  }

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

const contenerdorProductos = document.getElementById("productos-container");
const linksCategorias = document.querySelectorAll(".boton-categoria");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");

function CargarProductos(productosElejidos){
  contenerdorProductos.innerHTML="";
  productosElejidos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "menu-plato";
        nuevoProducto.innerHTML = `
            <img src="../../img/${producto.imgUrl}">
            <div class="menu-des">
                <span>${producto.name}</span>
                <span>Precio: ${producto.price}</span>
                <span>Tiempo de entrega: ${producto.delivery_time}</span>
                <span>Precio de entrega: ${producto.delivery_price}</span>
                <button id="${producto.id}" onclick="openModal(${producto.id})">Agregar al carro</button>
            </div>
        `;
        contenerdorProductos.append(nuevoProducto);
    });
};

function openModal(productId) {
  const producto = productos.find(prod => prod.id === productId);
  if (producto) {
      document.getElementById("modalProductName").innerText = producto.name;
      document.getElementById("modalProductImage").src = producto.imgUrl;
      document.getElementById("modalProductPrice").innerText = `Precio: ${producto.price}`;
      document.getElementById("modalDeliveryTime").innerText = `Tiempo de entrega: ${producto.delivery_time}`;
      document.getElementById("modalDeliveryPrice").innerText = `Precio de entrega: ${producto.delivery_price}`;
      modal.style.display = "block";
  }
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
      modal.style.display = "none";
  }
}

CargarProductos(productos);

linksCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    const productosFilter = productos.filter( producto => producto.origin_name.id === e.currentTarget.id);
    CargarProductos(productosFilter);
  })
})
