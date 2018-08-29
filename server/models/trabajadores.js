const mongoose = require('mongoose');
const { Schema } = mongoose;

const trabajadoresSchema = new Schema({
    name: { type: String, required: true},
    equipo: { type: String, required: true},
    trabajo: { type: String, required: true},
    categoria: { type: String, required: true}


});

module.exports = mongoose.model('Trabajadores', trabajadoresSchema);