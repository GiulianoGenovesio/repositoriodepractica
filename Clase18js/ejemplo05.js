// let now = new Date();
// alert (now); // muestra en pantalla la fecha y la hora actuales

// const dia = new Date();
// const hours = dia.getHours();

// console.log(hours);

const nombre = prompt('Escribir tu nombre', '');
const today = new Date();

const hrs = today.getHours();

if (hrs < 12) {
    document.write('Buenos días ' + nombre + '!')
    console.log(`Buenos días ${nombre} !!`)
} else if (hrs >= 12 && hrs <= 19) {
    document.write('Buenos tardes ' + nombre + '!')
    console.log(`Buenos tardes ${nombre} !!`)
} else {
    document.write('Buenos noches ' + nombre + '!')
    console.log(`Buenos noches ${nombre} !!`)
}