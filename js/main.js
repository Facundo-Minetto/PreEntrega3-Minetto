const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const contenedorProductos = document.querySelector("#contenedor-productos");
const numerito = document.querySelector("#numerito");
const inputBuscar = document.querySelector("#buscar");
const cambiarPrecio = document.getElementById('cambiarPrecio');
let botonesAgregar = document.querySelectorAll(".producto-agregar");
let productosEnCarrito;
let productosEnCarritoLS = recuperar("productos-en-carrito");

//verificar si carrito existe en LS
if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

//cargamos el array de objeto en el local storage
almacenar("PRODUCTOS", productos);
//usamos la funcion cargarProductos y pasamos el objeto recuperado de LS
cargarProductos(recuperar("PRODUCTOS"));

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.classList.add("col");
        div.innerHTML = `
        
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-detalles">
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <p class="producto-precio">cod. ${producto.id}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem",
        },
        offset: {
            x: "1.5rem",
            y: "1.5rem",
        },
        onClick: function () { },
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(
        (producto) => producto.id === parseInt(idBoton)
    );

    if (
        productosEnCarrito.some((producto) => producto.id === parseInt(idBoton))
    ) {
        const index = productosEnCarrito.findIndex(
            (producto) => producto.id === parseInt(idBoton)
        );

        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem(
        "productos-en-carrito",
        JSON.stringify(productosEnCarrito)
    );
}

botonesCategorias.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach((boton) => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(
                (producto) => producto.categoria === e.currentTarget.id
            );
            tituloPrincipal.innerText = productoCategoria.categoria;
            const productosBoton = productos.filter(
                (producto) => producto.categoria === e.currentTarget.id
            );
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce(
        (acc, producto) => acc + producto.cantidad,
        0
    );
    numerito.innerText = nuevoNumerito;
}

function filtrarProductos() {
    let productoBuscado = productos.filter((producto) =>
           producto.nombre
            .toLowerCase()
            .includes(inputBuscar.value.toLowerCase().trim())
            );
            productoBuscado != [] && cargarProductos(productoBuscado);
}
//buscador letra por letra
inputBuscar.addEventListener("keyup", filtrarProductos);