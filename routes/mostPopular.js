const express = require('express'); 
const router = express.Router();
const { User } = require('../models'); // Import your User model

router.get('/mostPopular', (req, res) => {
    res.sendFile(__dirname + ''); //
    });


