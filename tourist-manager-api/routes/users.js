// routes/users.js
const express = require('express');
const router = express.Router();

// Define a route
router.get('/', (req, res) => {
    res.send('this is user route');// this gets executed when user visit http://localhost:3000/user
});

// Define a route
router.get('/101', (req, res) => {
    res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user
});

// export the router module so that server.js file can use it
module.exports = router;