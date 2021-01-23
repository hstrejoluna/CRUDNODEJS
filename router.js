const express = require("express");
const router = express.Router();

const conexion = require("./database/db");

router.get("/", (req, res) => {
  conexion.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("index", { results: results });
    }
  });
});



 // RUTA PARA CREAR REGISTROS
 router.get('/create', (req, res)=>{
     res.render('create');
 })

const crud = require('./controllers/crud');
router.post('/save', crud.save)



// RUTA PARA EDITAR REGISTROS
router.get('/edit/:id', (req, res)=>{
  const id = req.param.id;
  conexion.query('SELECT * FROM users WHERE id=?',[id], (error, results)=>{
    if(error){
      throw error;
    }else{
      res.render('edit',{user:results[0]});
    }
  })

});

module.exports = router;
