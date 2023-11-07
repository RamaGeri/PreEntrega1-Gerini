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
        alert("Bienvenido " + USER_LOGIN + "!");
        console.log("Bienvenido " + USER_LOGIN + "!")
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

alert("Tu compra es un total de " + sumaProductos + "$ por " + cantidad + " producto/s"); */