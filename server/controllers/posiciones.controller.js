const Partido = require('../models/partidos');
const Posiciones = require('../models/posiciones');

const posicionesCtrl = {};

posicionesCtrl.getPosiciones = async (req, res, next) => {
    const posiciones = await Posiciones.find();
    res.json(posiciones);
};

posicionesCtrl.createPosicion = async (req, res, next) => {
    const posiciones = new Posiciones({
        equipo: req.body.equipo,
        jj: req.body.jj,
        jg: req.body.jg,
        jp: req.body.jp,
        pct: req.body.pct,
        categoria: req.body.categoria

    });
    await posiciones.save();
    res.json({status: 'Posicion Creado'});
};

posicionesCtrl.getPosicion = async (req, res, next) => {
    const { id } = req.params;
    const posiciones = await Posiciones.findById(id);
    res.json(posiciones);
};

posicionesCtrl.editPosicion = async (req, res, next) => {
    const { id } = req.params;
    const name  = req.params.name;
    const posiciones = new Posiciones({
        equipo: req.body.equipo,
        jj: req.body.jj,
        jg: req.body.jg,
        jp: req.body.jp,
        pct: req.body.pct,
        categoria: req.body.categoria
    });
    console.log(as);
    res.json({status: 'Partido Modificado'});
};

posicionesCtrl.deletePosicion = async (req, res, next) => {
    await Posiciones.findByIdAndRemove(req.params.id);
    res.json({status: 'Posicion Eliminado'});
};

module.exports = posicionesCtrl;