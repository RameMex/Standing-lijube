const express = require('express');
const router = express.Router();

const trabajador = require('../controllers/trabajadores.controller');

router.get('/', trabajador.getTrabajadores);
router.post('/', trabajador.createTrabajador);
router.get('/:id', trabajador.getTrabajador);
router.put('/:id', trabajador.editTrabajador);
router.delete('/:id', trabajador.deleteTrabajador);

module.exports = router;