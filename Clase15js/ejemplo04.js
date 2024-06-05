const items = document.getElementsByClassName ('item');

console.log(items)

function cambiarVisibilidad(numItem){
const item = items [numItem]

if (item.style.visibility == ''){
    item.style.visibility = 'hiden';
 } else {
        item.style.visibility = ''
}
}

cambiarVisibilidad(2)
