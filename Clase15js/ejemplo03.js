function allParrafo(){
    const all = document.getElementsByTagName('p');
    console.log(all)

    const num = all.length;

    console.log(num)

    alert(`Hay ${num} elementos p dentro de este documento`)
}

function caja1P(){

    const caja1 =document.getElementById('caja1');
    console.log(caja1) //caja con el borde azul

    const caja1p = caja1.getElementsByTagName('p');
    console.log(caja1p) //las p de la caja de borde azul

const num = caja1p.length;
console.log(num); //5

alert(`Hay ${num} elementos p dentro de la caja 1`)

}

caja1P();