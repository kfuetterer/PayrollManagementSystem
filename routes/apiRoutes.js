var express = require("express");
var db = require("../models");

var employeeController = require("../controllers/employeeController");
var payrollcycleController = require("../controllers/payrollcycleController");
var scheduleController = require("../controllers/scheduleController");
var timeoffsegmentController = require("../controllers/timeoffsegmentController");
var worksegmentController = require("../controllers/worksegmentController");

var router = new express.Router();

router.get("/employee/:id?", employeeController.index);

router.get("/payrollcycle/:id?", payrollcycleController.index);

router.get("/schedule/:id?", scheduleController.index);

router.get("/timeoffsegment/:id?", timeoffsegmentController.index);
router.post("/timeoffsegment", timeoffsegmentController.create);

router.get("/worksegment/:id?", worksegmentController.index);
router.post("/worksegment", worksegmentController.create);
router.patch("/worksegment/:id", worksegmentController.update);

module.exports = router;