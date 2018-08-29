const express = require('express');
const router = express.Router();

const jugador = require('../controllers/jugadores.controller');

router.get('/', jugador.getJugadores);
router.post('/', jugador.createJugador);
router.get('/:id', jugador.getJugador);
router.put('/:id', jugador.editJugador);
router.delete('/:id', jugador.deleteJugador);

module.exports = router;