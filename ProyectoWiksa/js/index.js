function triggerbtninisup(){ document.getElementById("metro").click();  }
function triggerbtnclick(){ document.getElementById("wong").click();  }
function triggerbtnmetro(){ document.getElementById("metro").click();  }

function showInfo(supermarket) {
  // Ocultar todos los productos
  document.getElementById('metroProducts').style.display = 'none';
  document.getElementById('plazaVeaProducts').style.display = 'none';
  document.getElementById('tottusProducts').style.display = 'none';
  document.getElementById('wongProducts').style.display = 'none';

  // Mostrar los productos del supermercado seleccionado
  if (supermarket === 'metro') {
      document.getElementById('metroProducts').style.display = 'block';
  } else if (supermarket === 'plazaVea') {
      document.getElementById('plazaVeaProducts').style.display = 'block';
  } else if (supermarket === 'tottus') {
      document.getElementById('tottusProducts').style.display = 'block';
  } else if (supermarket === 'wong') {
      document.getElementById('wongProducts').style.display = 'block';
  }
}

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
                <button id="${producto.id}">Agregar al carro</button>
            </div>
        `;
        contenerdorProductos.append(nuevoProducto);
    });
};

CargarProductos(productos);

console.log(linksCategorias)

linksCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

    const productosFilter = productos.filter( producto => producto.origin_name.id === e.currentTarget.id);
    CargarProductos(productosFilter);



  })
})


//CargarProductos(productosFilter);