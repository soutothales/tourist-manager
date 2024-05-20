const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((err) => {
        console.error('error al conectar a mongoDB', err.message);
        process.exit(1); // Salir del proceso si no se puede conectar a la base de datos
    });

// Include route files
const usersRoute = require('./routes/users');
const hospedajeRoute = require('./routes/hospedaje');
const paseoRoute = require('./routes/paseo.js');
const pagosRoute = require('./routes/pagos');

// Usar rutas
app.use('/api/users', usersRoute);
app.use('/api/hospedaje', hospedajeRoute);
app.use('/api/paseo', paseoRoute);
app.use('/api/pagos', pagosRoute);

app.get('/', (req, res) => {
   res.send('hello root node');
});

const port = 3000; // You can use environment variables for port configuration

app.listen(port, () => {
    console.log(`Server is running on pssort ${port}`);
});