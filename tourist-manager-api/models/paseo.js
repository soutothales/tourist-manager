const mongoose = require('mongoose');

const paseoSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    valor: Number,
    usuarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }],
});

module.exports = mongoose.model('Paseo', paseoSchema);