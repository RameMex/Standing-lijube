const mongoose = require('mongoose');
const { Schema } = mongoose;

const partidoSchema = new Schema({
    categoria:{type : String, require:false},
    equipo1: { type: String, required: true},
    resultado1: { type: Number, required: false, default:0},
    equipo2: { type: String, required: true},
    resultado2: { type: Number, required: false, default:0},
    empate: { type: String, required: false, default:""},
    fecha:{ type:String,required:false}
});
module.exports = mongoose.model('Partido', partidoSchema);