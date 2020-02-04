var socket = io();
socket.on('connect', function(){
    console.log('Conectado');
});
// On: Escucha el servidor
socket.on('disconnect', function(){
    console.log('Coneccion perdida con el servidor');
});

// Emit: Envio de informacion
socket.emit('enviarMensaje', {
    usuario: 'yo',
    mensaje: 'hi word'
}, function( respuesta ){
    console.log('Servidor: ', respuesta);
});

socket.on('enviarMensaje', function(respuesta){
    console.log('Server: ', respuesta);
})