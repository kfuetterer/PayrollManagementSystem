var express = require("express");
// var db = require("../models");
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var bCrypt = require('bcrypt-nodejs');

var approvalController = require("../controllers/approvalController");
var employeeController = require("../controllers/employeeController");
var payrollcycleController = require("../controllers/payrollcycleController");
var scheduleController = require("../controllers/scheduleController");
var timeoffsegmentController = require("../controllers/timeoffsegmentController");
var worksegmentController = require("../controllers/worksegmentController");

var router = new express.Router();

// router.use(require('cookie-parser')())
// router.use(require('body-parser').urlencoded({ extended: true }))
// router.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))

// router.use(passport.initialize());
// router.use(passport.session());

// passport.use(new LocalStrategy(function(email, pass, cb){
//     var hashedPass = bCrypt.hashSync(pass)
//     db.Employee.findOne({
//         where: {
//             email: email
//         }
//         }).then(function(user, err){
//             if (err) { 
//                 return cb(err); 
//             }
//             if (!user) { 
//                 return cb(null, false); 
//             }
//             if (!bCrypt.compareSync(pass, user.password)){ 
//                 return cb(null, false); 
//             }
//             return cb(null, user);
//         })
// }));

// passport.serializeUser(function(user, cb) {
//     cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//     db.Employee.findById(id).then(function (user) {
//         cb(null, user);
//     });
// });

// passport.use(function(req, res, next){
//     if(req.user){
//         res.locals.user = req.user.email
//     }
//     next()
// });

// router.post("/signin/", passport.authenticate('local'), function(req, res) {
//     console.log("Succesfully signed in.");
//     res.redirect("/");
// });

router.get("/approval/:id?", approvalController.index);

router.get("/employee/:id?", employeeController.index);
router.post("/employee", employeeController.create);

router.get("/payrollcycle/:id?", payrollcycleController.index);

router.get("/schedule/:id?", scheduleController.index);

router.get("/timeoffsegment/:id?", timeoffsegmentController.index);
router.post("/timeoffsegment", timeoffsegmentController.create);

router.get("/worksegment/:id?", worksegmentController.index);
router.post("/worksegment", worksegmentController.create);
router.patch("/worksegment/:id", worksegmentController.update);

module.exports = router;