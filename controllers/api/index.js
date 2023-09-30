const router = require('express').Router();
router.get('/', async (req, res, next) => {
    res.render('./views/layouts/main.handlebars', { title: 'Welcome to Travelifico'});
});

module.exports = router;
