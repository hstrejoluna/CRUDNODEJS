const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'hstrejoluna-pc', // "LOCALHOST"
    user: 'mysql',
    password: 'osoregordeteA1!',
    database: 'crud_nodejs_db'
})