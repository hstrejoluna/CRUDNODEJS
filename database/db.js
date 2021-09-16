const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'host', // "LOCALHOST"
    user: 'dbuser',
    password: 'dbpassword',
    database: 'db'
});

conexion.connect((error)=>{
    if(error){
        console.error("El error de conexión es: "+error);
        return
    }
    console.log('¡Conectado a la BD MySQL!');
})

module.exports = conexion;
