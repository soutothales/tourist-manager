const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema({
    fecha: Date,
    monto: Number,
    users: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
});

module.exports = mongoose.model('Pago', pagoSchema);
