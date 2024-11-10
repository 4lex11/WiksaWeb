const contenerdorProductos = document.getElementById("productos-container");

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

CargarProductos(productos);