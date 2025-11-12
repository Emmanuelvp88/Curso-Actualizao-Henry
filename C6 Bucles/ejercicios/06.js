function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  let absoluto = Math.abs(num);
  let cadena = absoluto.toString();
  if(cadena.length === 3){
    return true;
  }else{
    return false;
  }
}

module.exports = tieneTresDigitos;
