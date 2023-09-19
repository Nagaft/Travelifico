const router = require('express').Router();
router.get('/', (req, res) => {
  
    res.render('home'); // Adjust the path to your HTML file
  });

  router.get('/login',(req,res) =>{
    res.render('login')
  })

  module.exports = router;
