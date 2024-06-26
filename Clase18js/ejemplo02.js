function getNameDias(mes){

    // NaN > not a number
    // Si no es un número da falso > en un futuro dira "Mes inválido"
    if(Number.isNaN(mes )) return false;


    // si es menos a 1 y mayor a 12 > mes invalido
    if(mes < 1 || mes > 12) return false;

    mes--; //ej: 12 ------ 12-1 posic 11 (diciembre)


    const data = [
        {
            nombre: 'Enero', //pos 0
            dias: 31
        },
        {
            nombre: 'Febrero', //pos1
            dias: 28
        },
        {
            nombre: 'Marzo',  //pos 2
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 31
        },
        {
            nombre: 'Julio',
            dias: 31
        },
        {
            nombre: 'Agosto',
            dias: 31
        },
        {
            nombre: 'Septiembre',
            dias: 30
        },
        {
            nombre: 'Octubre',
            dias: 31
        },
        {
            nombre: 'Noviembre',
            dias: 30
        },
        {
            nombre: 'Diciembre', //posic 11
            dias: 31
        }
    ];
    return data[mes];
} //Cierra la función





const numMes = parseInt(prompt('Ingrese el mes del año en numeros', ''));

const resultado = getNameDias(numMes);

if(resultado){
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias}`)
} else {
    alert('Mes inválido')
}