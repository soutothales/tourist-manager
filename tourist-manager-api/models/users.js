const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    telefono: String,
    email: String,
    pax: Number,
    hospedaje: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospedaje' }],
    gastosTransfer: Number,
    gastosPaseos: Number,
    pagos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pago' }],
});

module.exports = mongoose.model('Usuario', userSchema);
