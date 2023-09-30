const router = require('express').Router();
router.get('/', async (_, res) => {
    res.render('./views/layouts/main.handlebars', { title: 'Welcome to Travelifico'});
});

module.exports = router;
