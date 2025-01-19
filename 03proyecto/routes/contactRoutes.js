const express = require('express')
const  {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getIndividualContact } = require('../controller/contactControllers');
const validateTokenHandler = require('../middleware/validateToken');


const router = express.Router();

//CONFIGURAR RUTAS
//SE USAN LOS METODOS DESPUES DE LA RUTA

//GET
router.use(validateTokenHandler);

router.route('/')
.get(getContact)
.post(createContact);

router.route('/:id')
.put(updateContact) 
.delete(deleteContact)
.get(getIndividualContact) ;



module.exports = router;