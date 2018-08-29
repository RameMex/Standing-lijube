const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: { type: String, required: true},
    bateador: { type: String, required: false},
    cacha: { type: String, required: false},
    date: { type: String, required: false},
    position: { type: String, required: false },
    team: { type: String, required: false },
    number: { type: Number, required: false},
    categoria: { type: String, required: false},
    situacion:{type : String, required:false }
});

module.exports = mongoose.model('Employee', employeeSchema);