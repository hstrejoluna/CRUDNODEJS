const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'hstrejoluna-pc', // "LOCALHOST"
    user: 'root',
    password: 'osoregordeteA1!',
    database: 'crud_nodejs_db'
});

conexion.connect((error)=>{
    if(error){
        console.error("El error de conexión es: "+error);
        return
    }
    console.log('¡Conectado a la BD MySQL!');
})

module.exports = conexion;