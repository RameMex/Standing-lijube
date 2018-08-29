const express = require('express');
const router = express.Router();

const partido = require('../controllers/partidos.controller');

router.get('/', partido.getPartidos);
router.post('/', partido.createPartido);
router.get('/:id', partido.getPartido);
router.put('/:id', partido.editPartido);
router.delete('/:id', partido.deletePartido);

module.exports = router;