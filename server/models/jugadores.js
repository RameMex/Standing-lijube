const mongoose = require('mongoose');
const { Schema } = mongoose;

const JugadorSchema = new Schema({
    Name:  {type: String, required: true},
    Curp:  {type: String, required:true},
    Fecha: {type: Date, requiered:true},
    Position: {type: String, required: true},
    Team: {type: String, required:true},
    Number: {type: Number, requiered:true},
    Seleccionado : {type: String, required:true}
    
});

module.exports = mongoose.model('Jugador',JugadorSchema)