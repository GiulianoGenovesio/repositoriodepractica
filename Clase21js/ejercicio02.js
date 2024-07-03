const numeros = [100, 25, 1250, 8, 16, 12, 
    234, 4567,12, 34, 56, 789];

let mayor = 0; //1250

console.log(numeros)
console.log(numeros[2])



for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i]
    }
}

console.log(`El número mayor de los 
    siguientes números: ${numeros} 
    es ${mayor}`)
    //alert(`El número mayor de los 
    //siguientes números: ${numeros} 
    //es ${mayor}`)

    // document.write(`El número mayor de los 
        // siguientes números: ${numeros} 
        // es ${mayor}`)

    //'El mayor es ' + mayor + '!')    