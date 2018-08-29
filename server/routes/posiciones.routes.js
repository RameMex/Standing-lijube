const express = require('express');
const router = express.Router();

const posicion = require('../controllers/posiciones.controller');

router.get('/', posicion.getPosiciones);
router.post('/', posicion.createPosicion);
router.get('/:id', posicion.getPosicion);
router.put('/:id', posicion.editPosicion);
router.delete('/:id', posicion.deletePosicion);

module.exports = router;
/*
const {equipo1,resultado1,equipo2,resultado2 } = req.params;
    if(resultado1 > resultado2){
        const posicion1 = new Posiciones({
            jj: req.body.jj + 1,
            jg: req.body.jj + 1
        });
        await Posiciones.findByIdAndUpdate(equipo1, {$set: posicion1}, {new: true});
        const posicion2 = new Posiciones({
            jj: req.body.jj + 1,
            jp: req.body.jj + 1
        });
        await Partido.findByIdAndUpdate(equipo2, {$set: posicion2}, {new: true});
    }else{
        const posicion2 = new Posiciones({
            jj: req.body.jj + 1,
            jg: req.body.jj + 1
        });
        await Posiciones.findByIdAndUpdate(equipo1, {$set: posicion2}, {new: true});
        const posicion1 = new Posiciones({
            jj: req.body.jj + 1,
            jp: req.body.jj + 1
        });
        await Partido.findByIdAndUpdate(equipo2, {$set: posicion1}, {new: true});
    }
    
    res.json({status: 'Nose que paso'});*/