// routes/users.js
const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.send('this is user route');// this gets executed when user visit http://localhost:3000/user
});

// Rota para obter um usuário especifico pelo ID
router.get('/:id', (req, res) => {
    const userID = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userID);
    if(user) {
        res.json(user); // Retorna o usuário encontrado
    } else {
        res.status(404).send('User not found'); // Se não encontrar, retorna erro 404
    }
});

// Rota para criar um novo usuário
router.post('/', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // Atribui um ID unico ao novo usuário
    users.push(newUser); // Adiciona o novo usuário
    res.status(201).json(newUser);
});

// Rota para atualizar um usuário existente 
router.put('/:id', (req, res) => {
    const userID = parseInt(req.params.id, 10); 
    const userIndex = users.findIndex(u => u.id === userID); // Encontra o indice do usuario
    if (userIndex !== -1) {
        user[userIndex] = { ...users[userIndex], ...req.body }; // Atualiza os dados do usuário
        res.json(users[userIndex]); // Retorna o usuário atualizado
    } else {
        res.status(404).send('User not found');
    }
});

// Exluir um usuário pelo ID
router.delete('/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10); 
    const userIndex = users.findIndex(u => u.id === userId); // Encontra o indice do usuário
    if (userIndex !== -1) {
        users.splice(userIndex, 1); // Remove o usuário
        res.send('User delette for success');
    } else {
        res.status(404).send('User not found')
    }
});

// export the router module so that server.js file can use it
module.exports = router;