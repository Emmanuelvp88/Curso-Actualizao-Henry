function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:

return  Number.isInteger(numero);

}
// esNumeroEntero (3);
console.log(esNumeroEntero(3));

module.exports = esNumeroEntero;