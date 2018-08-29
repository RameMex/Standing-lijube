const Jugador = require('../models/jugadores');
const jugadorCtrl = {};

jugadorCtrl.getJugadores = async (req,res) => {
    const jugadores = await Jugador.find();
    res.json(jugadores);
}

jugadorCtrl.createJugador = async (req,res) => {
    const jugador = new Jugador(req.body);
    console.log(jugador);
    res.json('Recibido');
}
jugadorCtrl.getJugador = async (req,res) => {
    const jugador = await Jugador.findById(req.params.id);
    res.json(jugador);
}

jugadorCtrl.editJugador = async (req,res) =>{
    const { id } = req.params;
    const jugador = {
        Name:req.body.Name,
        Curp:req.body.Curp,
        Fecha:req.body.Fecha,
        Position:req.body.Position,
        Team:req.body.Team,
        Number:req.body.Number
    }
    await Jugador.findByIdAndUpdate(id, {$set: jugador },{upsert:true});
    res.json({status:'Jugador Modificado'});
}

jugadorCtrl.deleteJugador = async (req,res) => {
    await Jugador.findByIdAndRemoved(req.params.id);
    res.json({status: 'Jugador Eliminado'})

}

module.exports = jugadorCtrl;