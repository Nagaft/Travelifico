const router = require("express").Router();
const session = require("express-session");
const { User } = require("../models");
const withAuth = require("../utils/auth");
const { compare } = require("bcrypt");

const scripts = ['./api/tripadvisor.js'];


router.get("/create-account", (req, res) => {
  res.render("create-account", {
    people: [
      { name: "alex", edad: 24 },
      { name: "lalo", edad: 28 }
    ]
  });
});

//profile
router.get("/profile", (req, res) => {
  res.render("profile");
});

//yelp
router.get("/", (req, res) => {
  console.log(req.yelpinfo);
  res.render("login"); // Adjust the path to your HTML file
});


router.get("/", (req, res) => {
  res.render("login");
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const  userEmail = req.body.email;
    const  bodypaswd = req.body.password;
    
    const user = await User.findOne({ where: { email: userEmail } });
    if(!user){
     return res.send('<p>403 No user found</p>');
    }
    const checkPassword = await compare(bodypaswd,user.password);
    //const tokenSession = await tokenSign(user);
     if(!checkPassword){
      res.send('Incorrect Password');
      return;
     }
     

      req.session.save(()=>{
      req.session.user_id = user.id;
     req.session.logged_in = true;      
     console.log("Session data:", req.session);

        //res.json({ user: user, message: 'You are now logged in!' });
      res.redirect('/homepage');
      });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/homepage", withAuth, (req, res) => {
  res.render("homepage",{
    layout: 'main', 
    title:'Travelifico',
    scripts: scripts
  }
  );
});

router.get("/login", (req, res) => {
  res.render("login");
});

//CREATE NEW USER
router.post("/create-account", async (req, res) => {
  try {
    const { email, password, phoneNumber } = req.body;
    await User.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });
    res.redirect("/profile");
  } catch (error) {
    console.error("Account creation failed:", error);
    //res.render('homepage');
    res.redirect('/'); //CAMBIE PARA QUE NO LLEVE AL HOME PAGE
    // res.status(500).send("Account creation failed. Please try again.");
  }
});


module.exports = router;
