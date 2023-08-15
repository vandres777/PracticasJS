/*Ejercicio 4: Verificación de contraseña
Solicita al usuario ingresar una contraseña utilizando prompt("Ingresa tu contraseña"). Si la contraseña es "secreto123", muestra un mensaje de acceso concedido con alert(). De lo contrario, muestra un mensaje de acceso denegado.*/

const key = prompt("Ingresa tu contraseña");
//const country = prompt("Ingresa tu país").toLowerCase();

if (key === "secreto123") {
  alert("Acceso concedido");
} else {
  alert("Acceso denegado");
}
