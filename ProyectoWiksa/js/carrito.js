const productosEnCarrito = JSON.parse(localStorage.getItem("productos_en_carro"));

const contentcarritovacio = document.querySelector("#carrito_vacio");
const contentcarritolleno = document.querySelector("#carrito_lleno");
const contentcarritototal = document.querySelector("#carrito_total");
//const contentcarritoacciones = document.querySelector("#");

if(productosEnCarrito){
    contentcarritovacio.classList.add("disabled");
    contentcarritolleno.classList.remove("disabled");
}
else{

}