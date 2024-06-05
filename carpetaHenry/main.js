
// Mostrar Fecha Actual con el uso del Objeto "Date"
let fecha = new Date();
let nameDia = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
let nameMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'noviembre', 'Diciembre'];
document.write(`Hoy es ${nameDia[fecha.getDay()]} ${fecha.getDate()} de ${nameMes[fecha.getMonth()]} del ${fecha.getFullYear()}, dia de las Votaciones en Mexico`);