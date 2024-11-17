function triggerbtninisup(){ document.getElementById("metro").click();  }
function triggerbtnclick(){ document.getElementById("wong").click();  }
function triggerbtnmetro(){ document.getElementById("metro").click();  }
function triggerbtnspeedytacos(){ document.getElementById("speedytacos").click();  }
function triggerbtngoikogrill(){ document.getElementById("goikogrill").click();  }
function triggerbtnmemosushi(){ document.getElementById("memosushi").click();  }
function triggerbtnperugourmet(){ document.getElementById("perugourmet").click();  }

const contenerdorProductos = document.getElementById("productos-container");
const linksCategorias = document.querySelectorAll(".boton-categoria");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numeroCarrito = document.querySelector("#numero_carrito")
//const modal = document.getElementById("myModal");
//const closeModal = document.getElementById("closeModal");

function CargarProductos(productosElejidos){
  contenerdorProductos.innerHTML="";
  productosElejidos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "menu-plato";
        nuevoProducto.innerHTML = `
            <img src="../../img/productos/${producto.imgUrl}">
            <div class="menu-des">
                <span tabindex="7" aria-label=${producto.name}>${producto.name}</span>
                <h4 tabindex="8" aria-label=${producto.price}>Precio: S/ ${producto.price}</h4>
                <button class="producto-agregar" id="${producto.id}" tabindex="9">Agregar al carro</button>
            </div>
        `;
        contenerdorProductos.append(nuevoProducto);
    })
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
};
/*
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
*/
CargarProductos(productos);

linksCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {
    const productosFilter = productos.filter( producto => producto.origin_name.id === e.currentTarget.id);
    CargarProductos(productosFilter);
  })
})

function actualizarBotonesAgregar(){
  botonesAgregar = document.querySelectorAll(".producto-agregar");
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos_en_carro");
//const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos_en_carro"));

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
