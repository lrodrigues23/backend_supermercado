const express = require('express');
const SupermercadoController = require ('../controllers/supermercadoController');
const router = express.Router();
 
router.post('/supermercado', SupermercadoController.Insert);
router.get('/supermercado', SupermercadoController.SelectAll);
router.get('/supermercado/:id', SupermercadoController.SelectDetail);
router.put('/supermercado/:id', SupermercadoController.Update);
router.delete('/supermercado/:id', SupermercadoController.Delete);
 
module.exports = router;