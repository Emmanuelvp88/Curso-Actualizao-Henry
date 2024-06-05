function esFechaValida(fecha) {
      // La función recibe un argumento "fecha".
      // Comprueba si este corresponde a una fecha válida.
      // Si es así, retorna true, sino retorna false.
      // Tu código:
      let regExp = /^\d{4}-\d{2}-\d{2}$/;
      var dato = new Date(fecha);
      // dato.test();
      
      // return regExp.test(fecha);
      // let somos = fecha;
      // let obtencion = typeof fecha;
      let tipo = typeof dato;
      document.write(fecha);
      // if (regExp.test(fecha)) {
            //       return true;
            // } else {
      //       return false;
      // }
}
esFechaValida();

module.exports = esFechaValida;
