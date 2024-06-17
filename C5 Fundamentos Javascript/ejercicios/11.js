function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  let fecha = new Date(fechaNacimiento);
  const añoNacimiento = fecha.getFullYear();

  let años = (2024 - añoNacimiento);
  if (años > 18){
      return true
    }else{
        return false
      }

}
document.write(esMayorDeEdad(1988));

module.exports = esMayorDeEdad;