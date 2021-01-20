const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM users')
})

module.exports = router