const router = require('express').Router();
const apiRoutes = require('./api');
 const homeRoutes = require('./homeRoutes');
 const apiRoutes = require('./routes/api/apiRoutes'); // Asegúrate de que la ruta sea correcta
 app.use('/api', apiRoutes);
 router.use('/',yelpController, homeRoutes);
 
router.use('/api', apiRoutes);
module.exports = router;