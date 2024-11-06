/*const contenerdorTarjetas = document.getElementById("supermercados-container");
const contenedorMenuWong = document.getElementById("productos-wong-container");
const contenedorSupermercados = document.getElementById("lista-restaurantes-containter");

function crearTarjetasupermercados(supermercados){
    supermercados.forEach(supermercado => {
        const nuevoSuperMercado = document.createElement("div");
        nuevoSuperMercado.classList = "logo_supermcado";
        nuevoSuperMercado.innerHTML = `
        <a href="../pages/supermercados/${supermercado.linkUrl}">
            <img src="../img/iconos/${supermercado.imgUrl}" />
            <span>${supermercado.name}</span>
        </a>
        `;
        contenerdorTarjetas.appendChild(nuevoSuperMercado);
    });
};

function crearMenuWong(prodWong){
    prodWong.forEach(producto => {
          const nuevoProdWong = document.createElement("div");
          nuevoProdWong.classList = "item_menu";
          nuevoProdWong.innerHTML = `
              <span>${producto.name}</span>
          `;
          contenedorMenuWong.appendChild(nuevoProdWong);
      });
};

function ListadoSupermercados(supermercados){
    supermercados.forEach(supermercado => {
          const nuevoSupermercadolst = document.createElement("div");
          nuevoSupermercadolst.classList = "item_menu";
          nuevoSupermercadolst.innerHTML = `
            <a href="../pages/supermercados/${supermercado.linkUrl}" >
                <span>${supermercado.name}</span>
            </a>
          `;
          contenedorSupermercados.appendChild(nuevoSupermercadolst);
      });
};

crearTarjetasupermercados(supermercados);
ListadoSupermercados(supermercados);
crearMenuWong(prodWong);*/
const contenerdorProductos = document.getElementById("productos-container");
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
            </div>
        `;
        contenerdorProductos.append(nuevoProducto);
    });
};

crearTarjetasProductos(productos);

$(document).bind('keydown', 'ctrl+q', function(){
    alert("Activado modo para....");
  });