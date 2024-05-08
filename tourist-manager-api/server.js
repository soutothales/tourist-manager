const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello root node');
});

// Include route files
const usersRoute = require('./routes/users');

// Use routes
app.use('/users', usersRoute);

const port = 3000; // You can use environment variables for port configuration

app.listen(port, () => {
    console.log(`Server is running on pssort ss${port}`);
});