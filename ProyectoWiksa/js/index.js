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

function CargarProductos(productosElejidos) {
  contenerdorProductos.innerHTML = "";
  productosElejidos.forEach(producto => {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "menu-plato";
      const descripcionCompleta = `${producto.name}, ${producto.description}, tiempo de entrega: ${producto.delivery_time}`;
      nuevoProducto.innerHTML = `
          <img src="../../img/productos/${producto.imgUrl}"
               tabindex="0" 
               alt="${descripcionCompleta} precio: ${producto.price} soles" 
               aria-label="${descripcionCompleta} precio: ${producto.price} soles" 
               class="producto-imagen">
          <div class="menu-des">
              <span aria-label="${producto.name}">${producto.name}</span>
              <h4 aria-label="Precio: S/ ${producto.price}">Precio: S/ ${producto.price}</h4>
              <a href="#" class="producto-agregar" id="${producto.id}" tabindex="0" 
                 aria-label="Agregar ${producto.name} al carro">Agregar al carro</a>
          </div>
      `;
      contenerdorProductos.append(nuevoProducto);
  });
  actualizarBotonesAgregar();
  configurarAccesibilidadImagenes();
}

function configurarAccesibilidadImagenes() {
  const imagenes = document.querySelectorAll(".producto-imagen");
  imagenes.forEach(imagen => {
      imagen.addEventListener("focus", () => {
          const descripcion = imagen.getAttribute("aria-label");
          if (typeof speakText === "function" && descripcion) {
              speakText(descripcion); // Llama a speakText si está disponible
          } else {
              console.warn("speakText no está definida o descripción vacía.");
          }
      });

      imagen.addEventListener("click", () => {
          const descripcion = imagen.getAttribute("aria-label");
          if (typeof speakText === "function" && descripcion) {
              speakText(descripcion);
          } else {
              console.warn("speakText no está definida o descripción vacía.");
          }
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
          if (typeof speakText === "function" && descripcion) {
              speakText(descripcion);
          } else {
              console.warn("speakText no está definida o descripción vacía.");
          }
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
