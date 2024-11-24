let productosEnCarrito = localStorage.getItem("productos_en_carro");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contentcarritovacio = document.querySelector("#carrito_vacio");
const contentcarritolleno = document.querySelector("#carrito_productos");
const contentcarritototal = document.querySelector("#total_pagar");
const contentcarritoinfopago = document.querySelector("#info_pago");

let botonEliminar = document.querySelectorAll(".eliminar_producto");
const botonvaciar = document.querySelector("#vaciar_carrito");
const contentTotal = document.querySelector("#carrito_total");
const contentMontoTotal = document.querySelector("#carrito_montototal");


function cargarProductosCarrito(){
    if(productosEnCarrito && productosEnCarrito.length > 0){
        contentcarritovacio.classList.add("disabled");
        contentcarritolleno.classList.remove("disabled");
        contentcarritototal.classList.remove("disabled");
        contentcarritoinfopago.classList.remove("disabled");
        contentcarritolleno.innerHTML="";
    
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito_item");
            div.innerHTML= `
                <span>${producto.name}</span>
                <span>Cant: ${producto.cantidad}</span>
                <span>Precio: S/${producto.price}</span>
                <div>
                    <span>Total: S/ ${producto.price *producto.cantidad}</span>
                    <button id="${producto.id}" class="eliminar_producto"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                    </button>
                </div>
            `;
            contentcarritolleno.append(div);
        });
        
    }else{
        contentcarritovacio.classList.remove("disabled");
        contentcarritolleno.classList.add("disabled");
        contentcarritototal.classList.add("disabled");
        contentcarritoinfopago.classList.add("disabled");
    }
    actualizarBotonesElimnar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesElimnar(){
    botonEliminar = document.querySelectorAll(".eliminar_producto");
    botonEliminar.forEach(boton => {
      boton.addEventListener("click", elimnarDelCarrito);
    });
}

function elimnarDelCarrito(e){
    const idboton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => String(producto.id) === idboton);
    productosEnCarrito.splice(index,1);
    cargarProductosCarrito();
    localStorage.setItem("productos_en_carro", JSON.stringify(productosEnCarrito));
}

botonvaciar.addEventListener("click",vaciarCarrito)

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos_en_carro", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totalcalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0).toFixed(2);
    contentTotal.innerHTML = `S/ ${totalcalculado}`;
    const montoTotal = (parseFloat(totalcalculado) + 5.00).toFixed(2);
    console.log(montoTotal);
    contentMontoTotal.innerHTML = `Monto Total: S/ ${montoTotal}`;
}
