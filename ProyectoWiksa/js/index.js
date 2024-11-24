function triggerbtnplazavea(){ document.getElementById("plazavea").click();  }
function triggerbtnwong(){ document.getElementById("wong").click();  }
function triggerbtnmetro(){ document.getElementById("metro").click();  }
function triggerbtntottus(){ document.getElementById("tottus").click();  }
function triggerbtnspeedytacos(){ document.getElementById("speedytacos").click();  }
function triggerbtngoikogrill(){ document.getElementById("goikogrill").click();  }
function triggerbtnmemosushi(){ document.getElementById("memosushi").click();  }
function triggerbtnperugourmet(){ document.getElementById("perugourmet").click();  }

const contenerdorProductos = document.getElementById("productos-container");
const linksCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numeroCarrito = document.querySelector("#numero_carrito")

function configurarAccesibilidadElementos(elementos) {
  elementos.forEach((element) => {
      element.addEventListener("focus", () => {
          // Leer texto asociado al elemento
          const text = element.placeholder || element.innerText || element.getAttribute("aria-label") || "Elemento sin nombre";
          speakText(text);
      });
  });
}

function CargarProductos(productosElejidos) {
  contenerdorProductos.innerHTML = "";
  productosElejidos.forEach(producto => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "menu-plato";
      nuevoProducto.innerHTML = `
          <img src="../../img/productos/${producto.imgUrl}" 
               alt="${producto.name}" 
               tabindex="0" 
               aria-label="${producto.name} - ${producto.description} - Precio: S/ ${producto.price} - Tiempo de entrega: ${producto.delivery_time}" 
               class="producto-imagen">
          <div class="menu-des">
              <span aria-label="${producto.name}">${producto.name}</span>
              <h4 aria-label="Precio: S/ ${producto.price}">Precio: S/ ${producto.price}</h4>
              <a href="#" class="producto-agregar" id="${producto.id}" tabindex="0" aria-label="Agregar ${producto.name} al carro">Agregar al carro</a>
          </div>
      `;
      contenerdorProductos.append(nuevoProducto);
  });
  actualizarBotonesAgregar();
  configurarAccesibilidadImagenes();
  configurarAccesibilidadElementos(nuevoProducto);
}
// Nueva función para configurar eventos de accesibilidad en imágenes
function configurarAccesibilidadImagenes() {
  const imagenes = document.querySelectorAll(".producto-imagen");
  imagenes.forEach(imagen => {
      imagen.addEventListener("focus", () => {
          const descripcion = imagen.getAttribute("aria-label");
          speakText(descripcion);
      });

      imagen.addEventListener("click", () => {
          const descripcion = imagen.getAttribute("aria-label");
          speakText(descripcion);
      });
  });
}

CargarProductos(productos);

linksCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    const productosFilter = productos.filter( producto => producto.origin_name.id === e.currentTarget.id);
    CargarProductos(productosFilter);
  })
})

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
      boton.addEventListener("focus", () => {
          const descripcion = boton.getAttribute("aria-label");
          speakText(descripcion);
      });
  });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos_en_carro");

if(productosEnCarritoLS){
  productosEnCarrito = JSON.parse(productosEnCarritoLS) ;
  actualizarNumeroCarrito();
}
else{
  productosEnCarrito = [];
}

function agregarAlCarrito(e){
  const idboton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => String(producto.id) === idboton);

  if(productosEnCarrito.some(producto => String(producto.id) === idboton)){
    const index = productosEnCarrito.findIndex(producto => String(producto.id) === idboton);
    productosEnCarrito[index].cantidad++;
  }
  else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);   
  }
  actualizarNumeroCarrito();
  localStorage.setItem("productos_en_carro", JSON.stringify(productosEnCarrito));
}

function actualizarNumeroCarrito(){
  let Nuevonumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numeroCarrito.innerHTML = Nuevonumero;
}
