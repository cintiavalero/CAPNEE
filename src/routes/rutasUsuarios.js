//Requiero desde express el metodo Router, este me permite definir nuevas
//rutas para mi servidor
const { Router } = require('express');

const {getUsuarios, createUser}=require('../controllers/usuariosControllers');
//Instanciamos ese metodo
const router= Router();

router.get('/usuarios',getUsuarios);

router.get('/usuarios/:id',(req,res)=>{
    res.json({"Titulo":"Ruta para obtener usuario de id pasado por parametro en la URL"})
});

router.post('/usuarios',createUser);

router.put('/usuarios/:id',(req,res)=>{
    res.json({"Titulo":"Ruta para modificar usuario de id pasado por parametro en la URL"})
} );

module.exports = router;