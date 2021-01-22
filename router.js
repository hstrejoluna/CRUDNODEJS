const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req,res)=>{
    res.render('index')
}

/*
router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM users')
})

*/
module.exports = router