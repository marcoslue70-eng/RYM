/*==================================
        MENU HAMBURGUESA
==================================*/


const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("activo");

    });

}





// Cerrar menú al seleccionar una opción

const enlacesMenu = document.querySelectorAll(".nav-menu a");


enlacesMenu.forEach(enlace=>{


    enlace.addEventListener("click",()=>{


        navMenu.classList.remove("activo");


    });


});





/*==================================
          CARRITO DE COMPRAS
==================================*/


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



const botonesCarrito = document.querySelectorAll(".btn-carrito");



botonesCarrito.forEach((boton)=>{


    boton.addEventListener("click",()=>{


        const producto = boton.parentElement;


        const nombre = producto.querySelector("h3").textContent;


        const precio = producto.querySelector("p").textContent;



        const nuevoProducto = {


            nombre:nombre,

            precio:precio


        };



        carrito.push(nuevoProducto);



        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );



        alert(
            "✅ "+nombre+" agregado al carrito"
        );



    });


});





/*==================================
        ANIMACION AL CARGAR
==================================*/


window.addEventListener("load",()=>{


    document.body.style.opacity="1";


});