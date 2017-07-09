var express = require("express");
var db = require("../models");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

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
            if (!bCrypt.compareSync(pass, user.password)){ 
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

router.post("/signup", function(req, res, next){
    db.Employee.findOne({
        where: {
            email: req.body.email
        }
    }).then(function(user){
        if(!user){
        db.Employee.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            street_address: req.body.street_address,
            phone_number: req.body.phone_number,
            email: req.body.email,
            password: bCrypt.hashSync(req.body.password),
            pay_type: req.body.pay_type,
            pay_rate: req.body.pay_rate
        }).then(function(user){
            passport.authenticate("local", {failureRedirect:"/signup", successRedirect: "/signup"})(req, res, next)
            return done(null, user);
        })
        } else {
            res.send("user exists");
        }
    })
});

router.get("/signup", function(req, res){
    console.log("Successfully signed up.");
    res.redirect("/profile");
});

router.post("/signin", passport.authenticate('local'), function(req, res) {
    console.log("Succesfully signed in.");
    res.redirect("/profile");
});

router.get('/signout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get("/employee/:id?", employeeController.index);

router.get("/payrollcycle/:id?", payrollcycleController.index);

router.get("/schedule/:id?", scheduleController.index);

router.get("/timeoffsegment/:id?", timeoffsegmentController.index);
router.post("/timeoffsegment", timeoffsegmentController.create);

router.get("/worksegment/:id?", worksegmentController.index);
router.post("/worksegment", worksegmentController.create);
router.patch("/worksegment/:id", worksegmentController.update);

module.exports = router;