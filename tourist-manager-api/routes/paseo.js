const express = require('express');
const router = express.Router();
const Paseo = require('../models/paseo');

// Definir una ruta
router.get('/', (req, res) => {
    res.send('esta es la ruta de paseo');
});

// Ruta pra obtener un paseo específico de ID
router.get('/:id', async (req, res) => {
    const paseoId = req.params.id;
    const paseo = await Paseo.findById(paseoId);
    if (paseo) {
        res.status(404).send('Paseo no encontrado');
    }
});

// Ruta para crear un nuevo paseo
router.post('/', async (req, res) => {
    const newPaseo = new Paseo(req.body);
    await newPaseo.save();
    res.status(201).json(newPaseo);
});

// Ruta para actualizar un paseo existente
router.put('/:id', async (req, res) => {
    const paseoId = req.params.id;
    const updatedPaseo = await Paseo.findByIdAndUpdate(paseoId, req.body, { new: true });
    if (updatedPaseo) {
        res.json(updatedPaseo); // Devuelve el paseo actualizado
    } else {
        res.status(404).send('Paseo no encontrado');
    }
});

// Ruta para eliminar un paseo por ID
router.delete('/:id', async (req, res) => {
    const paseoId = req.params.id;
    const deletedPaseo = await Paseo.findByIdAndDelete(paseoId);
    if (deletedPaseo) {
        res.send('Paseo eliminado correctamente');
    } else {
        res.status(404).send('Paeo no encontrado');
    }
});

// Exportar el módulo del enrutador para que el archivo server.js pueda usarlo
module.exports = router;