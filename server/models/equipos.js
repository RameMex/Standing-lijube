const mongoose = require('mongoose');
const { Schema } = mongoose;

const equipoSchema = new Schema({
    name: { type: String, required: true},
    seccion: { type: String, required: true},
    
});


module.exports = mongoose.model('Equipo', equipoSchema);