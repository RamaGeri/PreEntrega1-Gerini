/* //register de usario y contraseña
const USER_REGISTER = prompt("Registre un nombre de usuario")
const PASSWORD_REGISTER = prompt("Registre una contraseña")

if ((USER_REGISTER != "") && (PASSWORD_REGISTER != "")){
    alert("se registro: | " + USER_REGISTER + " | como nombre de usuario y: | " + PASSWORD_REGISTER + " | como contraseña")
    console.log("Usuario: " + USER_REGISTER + " / Contraseña: " + PASSWORD_REGISTER)
}else{
    alert("No se registraron correctamente los datos, usar acceso de administrador (Usuario: admin / Contraseña: admin)")
    console.log("Usuario: admin / Contraseña: admin")
}



// Login de usuario y contraseña
let repetir;
do {
    const USER_LOGIN = prompt("Ingrese su nombre de usuario");
    const PASSWORD_LOGIN = prompt("Ingrese su contraseña");

    if (((USER_LOGIN === "admin") && (PASSWORD_LOGIN === "admin")) || ((USER_LOGIN === USER_REGISTER) && (PASSWORD_LOGIN === PASSWORD_REGISTER))){
        alert("Felicidades, ahora necesitamos conocerte!");
        console.log("Iniciaste sesion correctamente, ahora necesitamos conocerte!")
        repetir = false;
    }else{
        alert("El usuario o contraseña es incorrecto :c");
        repetir = true;
    }
}while (repetir === true); */

// Saludo al cliente
class Cliente {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    darMensaje() {
        return `¡Bienvenido, ${this.nombre} ${this.apellido}! \nQue vas a pedir hoy?`;
    }
}

let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");

let mensajeBienvenida = new Cliente(nombre, apellido);

alert(mensajeBienvenida.darMensaje());
console.log(mensajeBienvenida.darMensaje()); 

// Carrito de compras
class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto, precio) {
        this.productos.push({ producto, precio });
    }

    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
}

let carrito = new Carrito();

do {
    let pedido = parseInt(prompt("¿Qué vas a querer? (Elegi un número) 1) Hamburguesa con queso - 1400$ 2) Papas fritas - 800$ 3) Gaseosa - 500$ 4) Agua - 400$"));

    switch (pedido) {
        case 1:
            carrito.agregarProducto("Hamburguesa con queso", 1400);
            break;
        case 2:
            carrito.agregarProducto("Papas fritas", 800);
            break;
        case 3:
            carrito.agregarProducto("Gaseosa", 500);
            break;
        case 4:
            carrito.agregarProducto("Agua", 400);
            break;
        default:
            alert("Ingresa un número válido");
            break;
    }

    let continuar = prompt("¿Quieres agregar otro producto? SI / NO").toLowerCase();
    if (continuar === "no") {
        break;
    }
} while (true);

//Mensajes

let mensajePedido = "Tu pedido:\n";

carrito.productos.forEach(producto => {
    mensajePedido += `- ${producto.producto}: ${producto.precio}$\n`;
});

alert(mensajePedido);

alert(`El total de tu compra es: ${carrito.calcularTotal()}$`);

console.log("Tu pedido:");
carrito.productos.forEach(producto => {
    console.log(`- ${producto.producto}: ${producto.precio}$`);
});

console.log(`Total: ${carrito.calcularTotal()}$`);