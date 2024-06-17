function esFechaValida(fecha) {
      // La función recibe un argumento "fecha".
      // Comprueba si este corresponde a una fecha válida.
      // Si es así, retorna true, sino retorna false.
      // Tu código:
      const fechaConvertida = new Date(fecha);
      if (typeof fechaConvertida !== 'string' ){
            return false;
            }

      return !isNaN(fechaConvertida.getTime());
}

// document.write(esFechaValida("1988/7/17"));

module.exports = esFechaValida;
