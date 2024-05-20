const express = require('express');
const router = express.Router();
const Pago = require('../models/pagos');

// Define a ruta
router.get('/', (req, res) => {
    res.send('esta es la ruta de pago');
});

// Ruta para obtener un pago especifico por ID
router.get('/:id', async(req, res) => {
    const pagoId = req.params.id;
    const pago = await Pago.findById(pagoId);
    if(pago) {
        res.json(pago); // Devuelve el pago encontrado
    } else {
        res.status(404).json({ msg: 'Pago no encontrado' });
    }
});

// Ruta para crear un nuevo pago
router.post('/', async (req, res) => {
    const newPago = new Pago(req.body);
    await newPago.save();
    res.status(201).json(newPago);
});

// Ruta para actualizar un pago existente
router.put('/:id', async (req, res) => {
    const pagoId = req.params.id;
    const updatedPago = await Pago.findByIdAndUdate(pagoId, req, body, { new: true });
    if (updatedPago) {
        res.json(updatedPago); // Devuelve el pago actualizado
    } else {
        rs.status(404).send('Pago no encontrado');
    }
});

// Ruta para eliminar un pago por ID
router.delete('/:id', async (req, res) => {
    const pagoId = req.params.id;
    const deletedPago = await Pago.findByIdAndDelete(pagoId);
    if (deletedPago) {
        res.send('Pago eliminado correctamente');
    } else {
        res.status(404).send('Pago no encontrado');
    }
});

// Exportar el módulo del enrutador para que el archivo server.js pueda usarlo
module.exports = router; 