class Productos {
    constructor(id, nombre, precio, img, para) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.para = para;
        this.cantidad = 1;
    }
}

let burguerQueso = new Productos(1, "Hamburguesa con queso", 1400, "assets/img/hamburguesa.png", "hamburguesas");
let fritas = new Productos(2, "Papas fritas", 800, "assets/img/fritas.png", "adicionales");
let gaseosa = new Productos(3, "Gaseosa", 500, "assets/img/gaseosa.jpg", "bebida");
let agua = new Productos(4, "Agua", 400, "assets/img/agua.jpg", "bebida");

const PRODUCTOS = [burguerQueso, fritas, gaseosa, agua];

let carrito = [];

const CONTENEDOR_PRODUCTOS = document.getElementById("contenedorCards");
const CARITO_CONTENEDOR = document.getElementById('carrito-contenedor');

const MOSTRAR_PRODUCTOS = () => {
    PRODUCTOS.forEach(productos => {
        const CARD = document.createElement("div");
        CARD.classList.add("card", `${productos.para}`);
        CARD.style = "width: 18rem;";
        CARD.innerHTML =
            `
            <img src="${productos.img}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${productos.nombre}</h5>
                <p class="card-text">${productos.precio}$</p>
                <a href="#" class="btn btn-primary" id="boton${productos.id}">Pedir</a>
            </div>
        `;
        CONTENEDOR_PRODUCTOS.appendChild(CARD);

        const BOTON = document.getElementById(`boton${productos.id}`);
        BOTON.addEventListener('click', () => {
            agregarAlCarrito(productos);
        });
    });
};

const mostrarCarrito = () => {
    CARITO_CONTENEDOR.innerHTML = '';
    let totalGeneral = 0;

    const carritoEnStorage = localStorage.getItem('carrito');

    if (carritoEnStorage) {
        const carrito = JSON.parse(carritoEnStorage);

        if (carrito.length > 0) {
            carrito.forEach(producto => {
                const cardCarrito = document.createElement('div');
                cardCarrito.classList.add('card', 'mb-3');
                cardCarrito.innerHTML = `
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${producto.img}" class="img-fluid rounded-start carrito-imagen" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Precio: ${producto.precio}$ - Cantidad: ${producto.cantidad}</p>
                                <button class="btn btn-danger" id="eliminar${producto.id}">Eliminar</button>
                            </div>
                        </div>
                    </div>
                `;
                CARITO_CONTENEDOR.appendChild(cardCarrito);

                const botonEliminar = document.getElementById(`eliminar${producto.id}`);
                botonEliminar.addEventListener('click', () => {
                    eliminarDelCarrito(producto.id);
                });


                const subtotalProducto = producto.precio * producto.cantidad;
                totalGeneral += subtotalProducto;
            });

            const totalElement = document.createElement('div');
            totalElement.innerHTML = `<p class="totalCarrito">Total General: ${totalGeneral}$</p>`;
            CARITO_CONTENEDOR.appendChild(totalElement);
        } else {
            CARITO_CONTENEDOR.innerHTML = '<p>El carrito está vacío.</p>';
        }
    } else {
        CARITO_CONTENEDOR.innerHTML = '<p>Error al cargar el carrito.</p>';
    }
};

const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find(p => p.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    mostrarCarrito();
};

const eliminarDelCarrito = (id) => {
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    mostrarCarrito();
};

MOSTRAR_PRODUCTOS();
mostrarCarrito();

