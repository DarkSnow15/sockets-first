const {io} = require('../server')
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensage: 'Wellcome'
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback)=>{
        
        client.broadcast.emit('enviarMensaje', data);
        // console.log(data );
        // if(mensaje.usuario){
        //     callback({
        //         resp: 'All ok'
        //     });
        // }else{
        //     callback({
        //         resp: 'Error'
        //     });
        // } 
    });
});