const express = require('express');
const router = express.Router();

const employee = require('../controllers/equipos.controller');

router.get('/', employee.getEquipos);
router.post('/', employee.createEquipo);
router.get('/:id', employee.getEquipo);
router.put('/:id', employee.editEquipo);
router.delete('/:id', employee.deleteEquipo);

module.exports = router;