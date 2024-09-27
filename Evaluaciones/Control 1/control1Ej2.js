// Se pide el ingreso de una contraseña
let contraseña = prompt("Ingrese una contraseña:");

// Se hace la comprobación de parametros
    if (contraseña.length<=7){
    alert(`Su contraseña cumple los requisitos de seguridad.`);
    } else {
    alert("Su contraseña no tiene alguno de estos requisitos de seguridad: ")
    }