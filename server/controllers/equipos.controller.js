const Equipo = require('../models/equipos');
const Posiciones = require('../models/posiciones');
const equipoCtrl = {};

equipoCtrl.getEquipos = async (req, res, next) => {
    const equipos = await Equipo.find();
    const posiciones = await Posiciones.find();
    res.json(equipos);
};

equipoCtrl.createEquipo = async (req, res, next) => {
    const equipo = new Equipo({
        name: req.body.name,
        seccion: req.body.seccion
    });
    await equipo.save();
    const posiciones = new Posiciones({
        equipo: req.body.name,
        jj: 0,
        jg: 0,
        jgnf: 0,
        jgf: 0,
        jp: 0,
        jpnf: 0,
        jpf: 0 ,
        categoria: req.body.seccion
    });
    await posiciones.save();
    res.json({status: 'Equipo Creado'});

};

equipoCtrl.getEquipo = async (req, res, next) => {
    const { id } = req.params;
    const equipo = await Equipo.findById(id);
    res.json(equipo);
};

equipoCtrl.editEquipo = async (req, res, next) => {
    const { id } = req.params;
    const equipo = {
        name: req.body.name,
        seccion: req.body.seccion
    };
    await Equipo.findByIdAndUpdate(id, {$set: equipo}, {new: true});
    res.json({status: 'Equipo Modificado'});
};

equipoCtrl.deleteEquipo = async (req, res, next) => {
   var equipo = await Equipo.findById(req.params.id);
    await Posiciones.deleteOne({'equipo':equipo.name});
    await Equipo.findByIdAndRemove(req.params.id);
    res.json({status: 'Equipo Eliminado'});
};

module.exports = equipoCtrl;