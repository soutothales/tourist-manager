// routes/users.js
const express = require('express');
const router = express.Router();
const users = require('../models/users');

// Define a route
router.get('/', (req, res) => {
    res.send('esta es la ruta de usuario');// this gets executed when user visit http://localhost:3000/user
});

// Ruta para obtener un usuario especifico por ID
router.get('/:id', async (req, res) => {
    const usersId = req.params.id;
    const users = await users.findById(usersId);
    if (users) {
        res.json(users); // Devuelve el usuario encontrado
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
    const newUsers = new Users(req.body);
    await newUsers.save();
    res.status(201).json(newUsers);
});

// Ruta para actualizar un usuario existente
router.put('/:id', async(req, res) => {
    const usersId = req.params.id;
    const updatedUsers = await Users.findByIdAndUpdate(usersId, req.body, { new: true });
    if(updatedUsers) {
        res.json(updatedUsers);
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// Ruta para eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
    const usersId = req.params.id;
    const deletedUsers = await Users.findByIdAndDelete(usersId);
    if (deletedUsers) {
        res.send('Usuario eliminado correctamente');
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});

// export the router module so that server.js file can use it
module.exports = router;