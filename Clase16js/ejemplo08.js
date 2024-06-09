function ocultarMensaje(){

    const mensaje = document.getElementById('mesnaje');

    mensaje.style.display = 'none'
}

//ocultarMensaje()

setTimeout(ocultarMensaje,5000);
//5000 > 5 segundos
//se ejecuta 1 sola vez