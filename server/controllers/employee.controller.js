const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {
    const employee = new Employee({
        name: req.body.name,
        bateador: req.body.bateador,
        cacha: req.body.cacha,
        date: req.body.date,
        position: req.body.position,
        team: req.body.team,
        number: req.body.number,
        categoria: req.body.categoria,
        situacion: req.body.situacion

    });
    await employee.save();
    res.json({status: 'Jugador Creado'});
};

employeeCtrl.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        bateador: req.body.bateador,
        cacha: req.body.cacha,
        date: req.body.date,
        position: req.body.position,
        team: req.body.team,
        number: req.body.number,
        categoria: req.body.categoria,
        situacion: req.body.situacion

    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Jugador Modificado'});
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Jugador Eliminado'});
};

module.exports = employeeCtrl;