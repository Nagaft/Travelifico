const express = require('express'); 
const router = express.Router();
const { User } = require('../models'); // Import your User model

router.get('/', async (req, res, next) => {
    res.render('./views/mostPop.handlebars', { title: 'Most Popular'})
    });

module.exports = router;
