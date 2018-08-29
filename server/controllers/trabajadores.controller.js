const Trabajadores = require('../models/trabajadores');

const trabajadoresCtrl = {};

trabajadoresCtrl.getTrabajadores = async (req, res, next) => {
    const trabajadores = await Trabajadores.find();
    res.json(trabajadores);
};

trabajadoresCtrl.createTrabajador = async (req, res, next) => {
    const trabajadores = new Trabajadores({
        name: req.body.name,
        equipo: req.body.equipo,
        trabajo: req.body.trabajo,
        categoria: req.body.categoria


    });
    await trabajadores.save();
    res.json({status: 'Trabajador Creado'});
};

trabajadoresCtrl.getTrabajador = async (req, res, next) => {
    const { id } = req.params;
    const trabajadores = await Trabajadores.findById(id);
    res.json(trabajadores);
};

trabajadoresCtrl.editTrabajador = async (req, res, next) => {
    const { id } = req.params;
    const trabajadores = {
        name: req.body.name,
        equipo: req.body.equipo,
        trabajo: req.body.trabajo,
        categoria: req.body.categoria

    };
    await Trabajadores.findByIdAndUpdate(id, {$set: trabajadores}, {new: true});
    res.json({status: 'Trabajador Modificado'});
};

trabajadoresCtrl.deleteTrabajador = async (req, res, next) => {
    await Trabajadores.findByIdAndRemove(req.params.id);
    res.json({status: 'Trabajador Eliminado'});
};

module.exports = trabajadoresCtrl;