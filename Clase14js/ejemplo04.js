const frutas =['manzana', 'bananas', 'palta', 'pera'];

console.log(frutas);
// document.write(frutas);
console.log(frutas[1]);

/* Objetivo es que imprima manzanas..... Tenemos Bananas....
*/

for(let g = 0; g< frutas.length; g++){
    console.log('Tenemos ' + frutas [g]);
    document.write('Tenemos ' + frutas [g] + "<br/>")
}