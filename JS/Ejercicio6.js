/*Ejercicio 6: Decisión de beca
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18*/

const name = prompt("Ingresa tu nombre");
const age = prompt("Ingresa tu edad");
const country = prompt("Ingresa tu país").toLowerCase();
const departamento = prompt("Ingresa tu departamento").toLowerCase();

if (age >= "18" && country == "canada" && departamento == "toronto") {
  alert("Beca aprobada");
} else {
  alert("Beca rechazada");
}
