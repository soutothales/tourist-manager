const mongoose = require('mongoose');

const hospedajeSchema = new mongoose.Schema({
    calle: String,
    numero: Number,
    nombre: String,
    usuarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
});

module.exports = mongoose.model('hospedaje', hospedajeSchema);
