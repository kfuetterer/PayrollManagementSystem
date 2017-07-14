var express = require("express");
var db = require("../models");
var Employee = require("../models/employee.js");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

var companyController = require("../controllers/companyController");
var employeeController = require("../controllers/employeeController");
var payrollcycleController = require("../controllers/payrollcycleController");
var scheduleController = require("../controllers/scheduleController");
var timeoffsegmentController = require("../controllers/timeoffsegmentController");
var worksegmentController = require("../controllers/worksegmentController");

var router = new express.Router();

router.use(require('cookie-parser')())
router.use(require('body-parser').urlencoded({ extended: true }))
router.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))

router.use(passport.initialize());
router.use(passport.session());

passport.use(new LocalStrategy({usernameField:"email", passwordField:"password"}, function(email, password, cb){
    var hashedPass = bCrypt.hashSync(password)
    db.Employee.findOne({ 
      where: {
        email: email 
      }
    }).then(function(user, err){
      if (err) { 
        return cb(err); 
      }
      if (!user) { 
        return cb(null, false); 
      }
      if (!bCrypt.compareSync(password, user.password)){ 
        return cb(null, false); 
      }
        return cb(null, user);
      })
}));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    db.Employee.findById(id).then(function (user) {
        cb(null, user);
    });
});

router.use(function(req,res,next){
    if(req.user){
        res.locals.user = req.user.email
    }
    next()
});

function requireAdmin() {
  return function(req, res, next) {
    db.Employee.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(err, user, cb) {
      if (err) { return next(err); }

      if (!user) {        
          return cb(null, false); 
      }

      if (!user.admin) { 
          return cb(null, false); 
      }
      next();
    });
  }
}

router.post("/signup", function(req, res, next){
    db.Employee.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(user){
        console.log(req.body);
        if(!user){
        db.Employee.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            street_address: req.body.street_address,
            phone_number: req.body.phone_number,
            email: req.body.email,
            password: bCrypt.hashSync(req.body.password),
            pay_type: req.body.pay_type,
            pay_rate: req.body.pay_rate,
            companyId: req.body.companyId
        }).then(function(user){
            passport.authenticate("local", function(req, res) {
                res.json(req.user);
            });
        })
        } else {
            res.send("user exists");
        }
    });
});

router.get("/signup", function(req, res){
    console.log("Successfully signed up.");
    res.json(req.user);
});

router.post("/signin", requireAdmin(), passport.authenticate('local'), function(req, res) {
    console.log("Succesfully signed in.");
    res.json(req.user);
});

router.get('/signout', function(req, res){
  req.logout();
});

router.get("/company/:id?", companyController.index);

router.get("/employee/:id?", employeeController.index);

router.get("/payrollcycle/:id?", payrollcycleController.index);

router.get("/schedule/:id?", scheduleController.index);

router.get("/timeoffsegment/:id?", timeoffsegmentController.index);
router.post("/timeoffsegment", timeoffsegmentController.create);

router.get("/worksegment/:id?", worksegmentController.index);
router.post("/worksegment", worksegmentController.create);
router.patch("/worksegment/:id?", worksegmentController.update);

module.exports = router;