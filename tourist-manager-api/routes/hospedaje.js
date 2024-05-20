const express = require('express');
const router = express.Router();
const Hospedaje = require('../models/hospedaje');

// Definir una ruta
router.get('/', (req, res) => {
    res.send('esta es la ruta de hospedaje');
});

// Ruta para obtener un hospedaje específico por ID
router.get('/:id', async(req, res) => {
    const hospedajeId = req.params.id;
    const hospedaje = await Hospedaje.findById(hospedajeId);
    if(hospedaje) {
        res.json(hospedaje); // devuelve el hosepdaje encontrado
    } else {
        res.status(404).send('Hospedaje no encontrado');
    }
});

// Ruta para crear un nuevo hospedaje
router.post('/', async (req, res) => {
    const newHospedaje = new Hospedaje(req.body);
    await newHospedaje.save();
    res.status(201).json(newHospedaje);
});

// Ruta para actualizar un hospedaje existente
router.put('/:id', async (req, res) => {
    const hospedajeId = req.params.id;
    const updateHospedaje = await Hospedaje.findByIdAndUpdate(hospedajeId, req.body, { new: true });
    if (updateHospedaje) {
        res.json(updateHospedaje); // Devuelve el hospedaje actualizado
    } else {
        res.status(404).send('Hospedaje no encontrado');
    }
});

// Ruta para eliminar un hospaje por ID
router.delete('/:id', async (req, res) => {
    const hospedajeId = req.params.id;
    const deleteHospedaje = await Hospedaje.findByIdAndDelete(hospedajeId);
    if (deleteHospedaje) {
        res.send('Hospedaje eliminado correctamente');
    } else {
        res.status(404).send('Hospedaje no encontrado');
    }
});

// Exporta el módulo del enrutador para que el archivo server.js pueda usarlo
module.exports = router;