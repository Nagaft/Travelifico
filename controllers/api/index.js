const router = require('express').Router();
const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);
router.get('/', async (req, res, next) => {
    res.render('./views/layouts/main.handlebars', { title: 'Welcome to Travelifico'});
});

module.exports = router;
