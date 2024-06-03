function esFechaValida(fecha) {
      // La función recibe un argumento "fecha".
      // Comprueba si este corresponde a una fecha válida.
      // Si es así, retorna true, sino retorna false.
      // Tu código:
      // let regExp = /^\d{4}-\d{2}-\d{2}$/;
    
      let dato = new Date(fecha.getDay());
      // let somos = fecha;
      // let obtencion = typeof fecha;
      // let tipo = typeof fecha;
      document.write(dato);
//       if (fecha === dato ) {
//             return true;
//       } else {
//             return false;
//       }
// }
esFechaValida();

module.exports = esFechaValida;
