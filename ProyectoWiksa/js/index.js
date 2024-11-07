/*const contenerdorProductos = document.getElementById("productos-container");
const modal = document.getElementById("platoModal");

const openModal = () => {
    modal.showModal();
}

const closeModal = () => {
    modal.close();
}


function crearTarjetasProductos(productos){
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
                <button onclick="openModal(${JSON.stringify(producto)})">Agregar al carro</button>
            </div>
            <dialog class="modal" id="platoModal">
                    <button onclick="closeModal()" class="btn-close-modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                          </svg>
                    </button>
                        <img src="https://pedidosya.dhmedia.io/image/pedidosya/products/af244dc5-7566-4591-ae8e-7c0f1540b0be.jpg?quality=90&width=768">
                    <div class="modal-info">  
                        <span>Plato 1</span>  
                        <p>Descripcion</p>
                        <input type="number">
                        <button class="btnagrpedido">Agregar al pedido</button>
                    </div>

            </dialog>
        `;
        contenerdorProductos.append(nuevoProducto);
    });
};

crearTarjetasProductos(productos);*/
const contenerdorProductos = document.getElementById("productos-container");
const modal = document.getElementById("platoModal");
const modalContent = document.getElementById("modalContent");

const openModal = (producto) => {
    modalContent.innerHTML = `
        <button onclick="closeModal()" class="btn-close-modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
        </button>
        <img src="../../img/${producto.imgUrl}">
        <div class="modal-info">
            <span>${producto.name}</span>
            <p>Descripción: ${producto.description}</p>
            <input type="number" placeholder="Cantidad">
            <button class="btnagrpedido">Agregar al pedido</button>
        </div>
    `;
    nuevoModal.append(dialog);
    modal.showModal();
};

const closeModal = () => {
    modal.close();
};


function crearTarjetasProductos(productos){
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
                <button onclick="openModal(${JSON.stringify(producto)})">Agregar al carro</button>
            </div>
        `;
        contenerdorProductos.append(nuevoProducto);
    });
};

crearTarjetasProductos(productos);


/*
function crearTarjetasProductos(productos) {
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
                <button onclick="openModal(${JSON.stringify(producto)})">Agregar al carro</button>
            </div>
        `;
        contenerdorProductos.append(nuevoProducto);
    });
};
*/