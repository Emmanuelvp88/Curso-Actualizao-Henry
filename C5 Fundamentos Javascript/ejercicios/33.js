function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  // const primo = (numero) =>{
    // let resultado = typeof(numero);
    if (Number.isInteger(numero)){
      return "es un numero entero" + typeof(numero);
      
    }else{
      return "es un flotante"
    }  // }
}
document.write(esNumeroPrimo(3));

module.exports = esNumeroPrimo;
