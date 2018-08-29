const mongoose = require('mongoose');
const { Schema } = mongoose;

const posicionesSchema = new Schema({
    equipo: { type: String, required: true},
    jj: { type: Number, required: false, default:0},       
    jg: { type: Number, required: false, default:0},      
    jgnf:{ type: Number, required: false, default:0},      
    jgf: { type: Number, required: false, default:0},       
    jp: { type: Number, required: false, default:0},           
    jpnf: { type: Number, required: false, default:0},     
    jpf: { type: Number, required: false, default:0},
    categoria: { type: String, required: false, default:''},     
});
module.exports = mongoose.model('Posiciones', posicionesSchema);