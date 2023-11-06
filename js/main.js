

// Validacion de usuario y contraseña
let repetir;
do {
    const NOMBRE_USUARIO = prompt("Escriba su nombre de usuario (Nico Krein)");
    const PASSWORD = prompt("Escriba su contraseña (ElMejorTutor)");
    if ((NOMBRE_USUARIO === "Nico Krein") && (PASSWORD === "ElMejorTutor")){
        alert("Bienvenido Nico!");
        console.log("Bienvenido Nico!")
        repetir = false;
    }else{
        alert("El usuario o contraseña es incorrecto :c");
        repetir = true;
    }
}while (repetir === true);


// Carrito de compras de productos
let sumaProductos = 0;
let cantidad = 0;
let continuar;

function agregarProducto(nombre, precio) {
    sumaProductos += precio;
    cantidad += 1;
    continuar = prompt("¿Queres agregar algo más? SI / NO").toLowerCase();
    console.log("Producto: " + nombre);
}

do {
    let pedido = parseInt(prompt("¿Qué vas a pedir? (Elegí un número) 1) Hamburguesa con queso -1400$- 2) Papas fritas -800$- 3) Gaseosa -500$- 4) Agua -400$-"));

    switch (pedido) {
        case 1:
            agregarProducto("Hamburguesa con queso", 1400);
            break;
        case 2:
            agregarProducto("Papas fritas", 800);
            break;
        case 3:
            agregarProducto("Gaseosa", 500);
            break;
        case 4:
            agregarProducto("Agua", 400);
            break;
        default:
            alert("Ingresa un número válido");
            continuar = "si";
    }
} while (continuar === "si");

alert("Tu compra es un total de " + sumaProductos + "$ por " + cantidad + " producto/s");

