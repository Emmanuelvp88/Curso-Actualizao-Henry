function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  function verificarVocal(letra) {
    // Verificar que la entrada es una cadena de un solo carácter
    if (typeof letra !== 'string' || letra.length !== 1) {
        return "Dato incorrecto";
    }

    // Convertir la letra a minúscula para simplificar la comparación
    const letraMinuscula = letra.toLowerCase();

    // Verificar si la letra es una vocal
    if (letraMinuscula === 'a' || letraMinuscula === 'e' || 
        letraMinuscula === 'i' || letraMinuscula === 'o' || 
        letraMinuscula === 'u') {
        return "Es vocal";
    } else {
        return "Dato incorrecto";
    }
}

      document.write(esVocal(3));
}
  // esVocal(5);

module.exports = esVocal;
